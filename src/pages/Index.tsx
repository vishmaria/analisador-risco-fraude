import { useState } from "react";
import { Shield, LogOut, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import QuickActions from "@/components/QuickActions";
import LoginScreen from "@/components/LoginScreen";
import { ScrollArea } from "@/components/ui/scroll-area";

// Adicionar formulário para análise de transações

import TransactionForm from '@/components/TransactionForm'; // NOVO
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // NOVO

interface Message {
  id: string;                    // ✅ OBRIGATÓRIO
  message: string;
  type: 'user' | 'system';       // ✅ Union type
  riskLevel?: 'low' | 'medium' | 'high';  // ✅ Optional
  timestamp: string;
}

// Adicionar interface de dados de transação
interface TransactionData {
  amount: number;
  type: string;
  newBalanceDest?: number;
}


const Index = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  // Estado para formulário de transação
  const [showTransactionForm, setShowTransactionForm] = useState(false); 
  const [isLoading, setIsLoading] = useState(false);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleLogin = (email: string, password: string) => {
    // Mock authentication - replace with actual API call
    if (email && password) {
      setIsAuthenticated(true);
      toast.success("Login realizado com sucesso!");
      setMessages([
        {
          id: "welcome",
          message: "Bem-vindo ao Analisador de Risco de Fraude! Como posso ajudá-lo hoje?",
          type: "system",
          timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setMessages([]);
    toast.info("Sessão encerrada com segurança");
  };

  const handleSendMessage = async (messageText: string) => {

    // Mensagem para analisar transação
    const lowerMessage = messageText.toLowerCase();
    const isTransactionRequest = 
      lowerMessage.includes('analisar transação') || 
      lowerMessage.includes('verificar risco') ||
      lowerMessage.includes('transação de') ||
      lowerMessage.match(/r\$\s*\d+|valor\s*\d+/);

    if (isTransactionRequest && !showTransactionForm) {
      // Sugere usar formulário estruturado
      const suggestFormMessage: Message = {
        id: `suggest-${Date.now()}`,
        message: `💡 Para análise precisa de transação, use o formulário abaixo.\nOu continue digitando os detalhes aqui.`,
        type: 'system',
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      };
    
      setMessages(prev => [...prev, suggestFormMessage]);
      setShowTransactionForm(true);
      return;
    }
    // 1. Mensagem do usuário
    const userMessage: Message = {
      id: `user-${Date.now()}`,  // ✅ ID único
      message: messageText,
      type: 'user' as const,
      timestamp: new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      // 2. Chamar n8n webhook
      const N8N_WEBHOOK = 'http://localhost:5678/webhook/fraud-pipeline';
      
      const response = await fetch(N8N_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: messageText,
          pipeline: 'fraud-analysis',
          source:'quick-actions'
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      // 3. Mensagem do sistema COM ID OBRIGATÓRIO ✅
      const systemMessage: Message = {
        id: `system-${Date.now()}`,  // ✅ RESOLVIDO!
        message: data.message || data.analysis || 'Análise concluída!',
        type: 'system' as const,
        riskLevel: (data.riskLevel as 'low' | 'medium' | 'high') || 'medium',
        timestamp: data.timestamp || new Date().toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit'
        })
      };
      
      setMessages(prev => [...prev, systemMessage]);
      toast.success('✅ Análise de risco concluída!');
      
    } catch (error) {
      console.error('Erro n8n:', error);
      
      // 4. Erro também COM ID
      const errorMessage: Message = {
        id: `error-${Date.now()}`,  // ✅ ID obrigatório
        message: `❌ Erro na análise:\n${error instanceof Error ? error.message : 'Falha desconhecida'}\n\n💡 Verifique se n8n está ativo (localhost:5678)`,
        type: 'system' as const,
        riskLevel: 'high' as const,
        timestamp: new Date().toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit'
        })
      };
      
      setMessages(prev => [...prev, errorMessage]);
      toast.error('Erro na conexão com n8n');
    } finally {
      setIsLoading(false);
    }
  };

  //Função para análise estruturada de transação
  const handleTransactionAnalysis = async (transaction: TransactionData) => {
    setIsLoading(true);
    
    const userMessage: Message = {
      id: `transaction-${Date.now()}`,
      message: `🔍 Analisando transação:\n• Valor: R$ ${transaction.amount.toLocaleString()}\n• Tipo: ${transaction.type}${transaction.newBalanceDest ? `\n• Saldo Destino: R$ ${transaction.newBalanceDest.toLocaleString()}` : ''}`,
      type: 'user',
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);

    try {
      const N8N_WEBHOOK = 'http://localhost:5678/webhook/fraud-pipeline';
      
      const response = await fetch(N8N_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: 'Analisar transação', // Trigger específico para n8n
          pipeline: 'fraud-prediction',
          source: 'transaction-form', // Identificador para n8n
          transactionData: transaction // Dados estruturados
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      const systemMessage: Message = {
        id: `system-${Date.now()}`,
        message: data.message || 'Análise concluída!',
        type: 'system',
        riskLevel: data.riskLevel || 'medium',
        timestamp: data.timestamp || new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, systemMessage]);
      toast.success('✅ Análise de risco concluída!');
      
    } catch (error) {
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        message: `❌ Erro na análise de transação:\n${error instanceof Error ? error.message : 'Falha desconhecida'}\n\n💡 Verifique se o serviço Python está rodando (porta 5000) e n8n ativo (porta 5678)`,
        type: 'system',
        riskLevel: 'high',
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, errorMessage]);
      toast.error('Erro na análise de transação');
    } finally {
      setIsLoading(false);
      setShowTransactionForm(false); // Fecha formulário após análise
    }
  };


  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-secondary flex flex-col">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleGoBack}
              className="hover:bg-muted"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Analisador de Risco</h1>
              <p className="text-xs text-muted-foreground">Sistema de Detecção de Fraude</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="gap-2 hover:bg-destructive/10 hover:text-destructive"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-6 flex flex-col max-w-4xl">
        {/* NOVO: Botão + Formulário + QuickActions Inteligentes */}
        <div className="mb-6 space-y-4">
          {/* Botão para abrir formulário de transação */}
          {!showTransactionForm && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  🔍 Analisar Nova Transação
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  onClick={() => setShowTransactionForm(true)}
                  variant="outline" 
                  className="w-full"
                  size="lg"
                >
                  📊 Testar Risco de Fraude
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Formulário de transação (mostra quando ativado) */}
          {showTransactionForm && (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Nova Transação</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowTransactionForm(false)}
                >
                  ✕
                </Button>
              </CardHeader>
              <CardContent>
                <TransactionForm onSubmit={handleTransactionAnalysis} />
              </CardContent>
            </Card>
          )}

          {/* Quick Actions originais - só quando vazio E formulário fechado */}
          {messages.length <= 1 && !showTransactionForm && (
            <div className="space-y-3">
              <h2 className="text-sm font-medium text-muted-foreground">Consultas Rápidas</h2>
              <QuickActions onActionClick={handleSendMessage} />
            </div>
          )}
        </div>


        {/* Messages */}
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4 pb-4">
            {messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                message={msg.message}
                type={msg.type}
                riskLevel={msg.riskLevel}
                timestamp={msg.timestamp}
              />
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Shield className="w-4 h-4 text-primary-foreground animate-pulse" />
                </div>
                <div className="bg-card rounded-2xl px-4 py-3 border border-border">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="mt-4 pt-4 border-t border-border">
          <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Index;
