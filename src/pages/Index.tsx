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

interface Message {
  id: string;                    // ✅ OBRIGATÓRIO
  message: string;
  type: 'user' | 'system';       // ✅ Union type
  riskLevel?: 'low' | 'medium' | 'high';  // ✅ Optional
  timestamp: string;
}


const Index = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
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
        {/* Quick Actions - Show only when no messages */}
        {messages.length <= 1 && (
          <div className="mb-6 space-y-3">
            <h2 className="text-sm font-medium text-muted-foreground">Consultas Rápidas</h2>
            <QuickActions onActionClick={handleSendMessage} />
          </div>
        )}

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
