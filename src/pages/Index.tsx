import { useState } from "react";
import { Shield, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import QuickActions from "@/components/QuickActions";
import LoginScreen from "@/components/LoginScreen";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  message: string;
  type: "user" | "system";
  riskLevel?: "low" | "medium" | "high";
  timestamp: string;
}

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
    const userMessage: Message = {
      id: Date.now().toString(),
      message: messageText,
      type: 'user',
      timestamp: new Date().toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      // ✅ CHAMA SEU WEBHOOK N8N
      const N8N_WEBHOOK = 'http://localhost:5678/webhook/fraud-pipeline';
      
      const response = await fetch(N8N_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: messageText,
          pipeline: 'fraud-analysis'  // Identifica origem
        })
      });
      
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      
      const data = await response.json();
      
      // ✅ FORMATO COMPATÍVEL COM ChatMessage.tsx
      const systemMessage: Message = {
        id: (Date.now() + 1).toString(),
        message: data.message || data.analysis || 'Análise concluída',
        type: 'system',
        riskLevel: data.riskLevel || 'medium',  // low/medium/high
        timestamp: new Date().toLocaleTimeString('pt-BR', { 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      };
      
      setMessages(prev => [...prev, systemMessage]);
      toast.success('✅ Análise concluída!');
      
    } catch (error) {
      console.error('Erro n8n:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        message: `❌ Erro: ${error.message}\n\nVerifique se n8n está ativo em localhost:5678`,
        type: 'system',
        riskLevel: 'high',
        timestamp: new Date().toLocaleTimeString('pt-BR', { 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      };
      setMessages(prev => [...prev, errorMessage]);
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
