import { useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Shield, 
  Database, 
  Cpu, 
  MessageSquare, 
  GitBranch, 
  BarChart3, 
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  background?: string;
}

const Presentation = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    // Slide 1 - Capa
    {
      id: 1,
      title: "Analisador de Risco de Fraude",
      subtitle: "Prova de Conceito (PoC)",
      content: (
        <div className="flex flex-col items-center gap-8 animate-fade-in">
          <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
            <Shield className="w-14 h-14 text-primary-foreground" />
          </div>
          <div className="text-center space-y-2">
            <p className="text-xl text-muted-foreground">Sistema de Detecção em Tempo Real</p>
            <p className="text-lg text-muted-foreground/70">Baseado em Machine Learning + LLM</p>
          </div>
          <div className="mt-8 px-6 py-3 rounded-full bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground">Maria Fernanda Bittelbrunn Toniasso</p>
          </div>
        </div>
      ),
    },
    // Slide 2 - Problema
    {
      id: 2,
      title: "O Problema",
      subtitle: "Fraudes em Transações Financeiras",
      content: (
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-card border border-border shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-risk-high" />
                <h3 className="text-xl font-semibold">Desafios</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-risk-high mt-1">•</span>
                  <span>Sofisticação crescente das tentativas de fraude</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-risk-high mt-1">•</span>
                  <span>Dados sensíveis requerem proteção robusta</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-risk-high mt-1">•</span>
                  <span>Dataset altamente desbalanceado (~9% fraudes)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-card border border-border shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Dataset</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>3.713.576</strong> transações totais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>336.788</strong> fraudes identificadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Disponível no <strong>HuggingFace</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 3 - Solução Proposta
    {
      id: 3,
      title: "Solução Proposta",
      subtitle: "Arquitetura do Sistema",
      content: (
        <div className="space-y-8 animate-fade-in">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border shadow-card text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Interface Chat</h3>
              <p className="text-sm text-muted-foreground">Frontend React interativo para consultas conversacionais</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border shadow-card text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <GitBranch className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Orquestração n8n</h3>
              <p className="text-sm text-muted-foreground">Workflow de automação para roteamento inteligente</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border shadow-card text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Cpu className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Modelo ML</h3>
              <p className="text-sm text-muted-foreground">LightGBM para predição de fraude em tempo real</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-muted/30 border border-border">
            <p className="text-center text-sm text-muted-foreground">
              <strong>Fluxo:</strong> Chat UI → n8n Webhook → Análise LLM ou Predição ML → Resposta formatada
            </p>
          </div>
        </div>
      ),
    },
    // Slide 4 - Pipeline n8n
    {
      id: 4,
      title: "Pipeline de Processamento",
      subtitle: "Workflow n8n Implementado",
      content: (
        <div className="space-y-6 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border shadow-card">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
                Recebimento (Webhook)
              </h3>
              <p className="text-sm text-muted-foreground">
                Endpoint POST recebe mensagens da interface de chat e dados de transações estruturados.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border shadow-card">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
                Roteamento Inteligente
              </h3>
              <p className="text-sm text-muted-foreground">
                Identifica se é análise de transação (ML) ou pergunta geral (LLM) via código JavaScript.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border shadow-card">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">3</span>
                Processamento
              </h3>
              <p className="text-sm text-muted-foreground">
                <strong>Transação:</strong> HTTP Request para API Python<br />
                <strong>Pergunta:</strong> LLM Chain com Groq
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border shadow-card">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">4</span>
                Formatação UI
              </h3>
              <p className="text-sm text-muted-foreground">
                Nó Code formata resposta com nível de risco, probabilidade e mensagem amigável.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 5 - Backend Python
    {
      id: 5,
      title: "Serviço de Predição",
      subtitle: "Backend Python + Docker",
      content: (
        <div className="space-y-6 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-card border border-border shadow-card">
                <h3 className="font-semibold mb-3">🐍 Flask API</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Endpoint <code className="px-2 py-0.5 rounded bg-muted">/predict</code></li>
                  <li>• Health check para monitoramento</li>
                  <li>• Validação de campos obrigatórios</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border shadow-card">
                <h3 className="font-semibold mb-3">🐳 Docker</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Imagem Python 3.11-slim</li>
                  <li>• Dependências: Flask, scikit-learn, LightGBM</li>
                  <li>• Healthcheck integrado</li>
                </ul>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border shadow-card">
              <h3 className="font-semibold mb-3">⚙️ Feature Engineering</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>amount_high:</strong> Valor acima da média</li>
                <li>• <strong>balance_suspicious:</strong> Saldo fora do IQR</li>
                <li>• <strong>amount_balance_ratio:</strong> Relação valor/saldo</li>
                <li>• <strong>log_amount:</strong> Log transformado</li>
                <li>• <strong>One-hot encoding:</strong> Tipos de transação</li>
              </ul>
              <div className="mt-4 p-3 rounded-lg bg-muted/50">
                <p className="text-xs text-muted-foreground">
                  <strong>Threshold ótimo:</strong> 0.423 (otimizado no step 3)
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 6 - Modelagem ML
    {
      id: 6,
      title: "Modelagem Machine Learning",
      subtitle: "Treinamento e Validação",
      content: (
        <div className="space-y-6 animate-fade-in">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { name: "Logistic", auc: 0.82, recall: 0.72 },
              { name: "Random Forest", auc: 0.90, recall: 0.80 },
              { name: "XGBoost", auc: 0.92, recall: 0.83 },
              { name: "LightGBM ⭐", auc: 0.93, recall: 0.85, selected: true },
            ].map((model) => (
              <div 
                key={model.name}
                className={`p-4 rounded-xl border ${model.selected ? 'bg-primary/10 border-primary' : 'bg-card border-border'} shadow-card`}
              >
                <h4 className="font-semibold text-sm mb-3">{model.name}</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>ROC-AUC</span>
                      <span className="font-mono">{model.auc.toFixed(2)}</span>
                    </div>
                    <Progress value={model.auc * 100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Recall</span>
                      <span className="font-mono">{model.recall.toFixed(2)}</span>
                    </div>
                    <Progress value={model.recall * 100} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-card border border-border shadow-card">
            <h4 className="font-semibold mb-3">Metodologia</h4>
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span className="px-3 py-1 rounded-full bg-muted">70% Treino</span>
              <span className="px-3 py-1 rounded-full bg-muted">15% Teste</span>
              <span className="px-3 py-1 rounded-full bg-muted">15% Validação</span>
              <span className="px-3 py-1 rounded-full bg-muted">Class Weights</span>
              <span className="px-3 py-1 rounded-full bg-muted">RobustScaler</span>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 7 - Interface Implementada
    {
      id: 7,
      title: "Interface Implementada",
      subtitle: "Funcionalidades Disponíveis",
      content: (
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-card border border-border shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-risk-low" />
                <h4 className="font-semibold">Autenticação</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Tela de login seguro com validação de credenciais
              </p>
            </div>
            <div className="p-5 rounded-xl bg-card border border-border shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-risk-low" />
                <h4 className="font-semibold">Chat Interativo</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Interface conversacional para consultas sobre risco e fraude
              </p>
            </div>
            <div className="p-5 rounded-xl bg-card border border-border shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-risk-low" />
                <h4 className="font-semibold">Ações Rápidas</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Botões pré-configurados para consultas frequentes
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-card border border-border shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-risk-low" />
                <h4 className="font-semibold">Formulário de Transação</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Entrada estruturada: valor, tipo e saldo destino
              </p>
            </div>
            <div className="p-5 rounded-xl bg-card border border-border shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-risk-low" />
                <h4 className="font-semibold">Indicadores de Risco</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Cores visuais: verde (baixo), amarelo (médio), vermelho (alto)
              </p>
            </div>
            <div className="p-5 rounded-xl bg-card border border-border shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-risk-low" />
                <h4 className="font-semibold">Histórico de Mensagens</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Contexto da sessão com timestamps
              </p>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 8 - Métricas
    {
      id: 8,
      title: "Resultados da Validação",
      subtitle: "Métricas do Modelo em Produção",
      content: (
        <div className="space-y-6 animate-fade-in">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">ROC-AUC</span>
              </div>
              <p className="text-4xl font-bold">92.45%</p>
              <p className="text-xs text-muted-foreground mt-1">Excelente discriminação</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-risk-low/20 to-risk-low/5 border border-risk-low/30">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-risk-low" />
                <span className="text-sm text-muted-foreground">Recall</span>
              </div>
              <p className="text-4xl font-bold">85.67%</p>
              <p className="text-xs text-muted-foreground mt-1">Fraudes detectadas</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-risk-medium/20 to-risk-medium/5 border border-risk-medium/30">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-risk-medium" />
                <span className="text-sm text-muted-foreground">Precision</span>
              </div>
              <p className="text-4xl font-bold">82.34%</p>
              <p className="text-xs text-muted-foreground mt-1">Alertas corretos</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border shadow-card">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="px-4 py-2 rounded-lg bg-muted">
                <span className="text-muted-foreground">Threshold: </span>
                <span className="font-mono font-semibold">0.423</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-muted">
                <span className="text-muted-foreground">Modelo: </span>
                <span className="font-semibold">LightGBM</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-muted">
                <span className="text-muted-foreground">Status: </span>
                <span className="font-semibold text-risk-low">Pronto para Deploy</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 9 - Conclusão
    {
      id: 9,
      title: "Conclusão e Próximos Passos",
      subtitle: "Roadmap do Projeto",
      content: (
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-risk-low" />
              Implementado neste PoC
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-risk-low">✓</span>
                Interface chat responsiva em português
              </li>
              <li className="flex items-start gap-2">
                <span className="text-risk-low">✓</span>
                Pipeline n8n com roteamento inteligente
              </li>
              <li className="flex items-start gap-2">
                <span className="text-risk-low">✓</span>
                Modelo LightGBM treinado e validado
              </li>
              <li className="flex items-start gap-2">
                <span className="text-risk-low">✓</span>
                API Flask containerizada
              </li>
              <li className="flex items-start gap-2">
                <span className="text-risk-low">✓</span>
                Formulário de análise de transações
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-risk-medium" />
              Próximos Passos
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground">○</span>
                Integração com base de dados PostgreSQL
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground">○</span>
                Sistema de alertas automatizados
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground">○</span>
                Dashboard de monitoramento
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground">○</span>
                Autenticação robusta com OAuth
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground">○</span>
                Análise de documentos com LLM
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    // Slide 10 - Obrigado
    {
      id: 10,
      title: "Obrigada!",
      subtitle: "Perguntas?",
      content: (
        <div className="flex flex-col items-center gap-8 animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
            <Shield className="w-12 h-12 text-primary-foreground" />
          </div>
          <div className="text-center space-y-4">
            <p className="text-lg text-muted-foreground">
              Maria Fernanda Bittelbrunn Toniasso
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="https://huggingface.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-muted/80 transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Dataset HuggingFace
              </a>
            </div>
          </div>
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            size="lg"
            className="mt-8"
          >
            <Home className="w-4 h-4 mr-2" />
            Voltar para o Sistema
          </Button>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Voltar</span>
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Slide {currentSlide + 1} de {slides.length}
            </span>
          </div>
          <div className="w-20" /> {/* Spacer for alignment */}
        </div>
      </header>

      {/* Main Slide Content */}
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center justify-center max-w-5xl">
        <div className="w-full space-y-6">
          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {slides[currentSlide].title}
            </h1>
            {slides[currentSlide].subtitle && (
              <p className="text-lg text-muted-foreground">
                {slides[currentSlide].subtitle}
              </p>
            )}
          </div>

          {/* Content */}
          <div className="py-8">
            {slides[currentSlide].content}
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-card border-t border-border px-4 py-4">
        <div className="container mx-auto flex flex-col gap-4">
          {/* Slide indicators */}
          <div className="flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </Button>
            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="gap-2"
            >
              Próximo
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Presentation;