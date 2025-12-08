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
  Home,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Eye,
  Zap,
  Lock,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
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
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-xl">
            <Shield className="w-14 h-14 text-white" />
          </div>
          <div className="text-center space-y-2">
            <p className="text-xl text-slate-600">Sistema de Detecção em Tempo Real</p>
            <p className="text-lg text-slate-500">Baseado em Machine Learning + LLM</p>
          </div>
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="px-6 py-3 rounded-full bg-slate-100 border border-slate-200">
              <p className="text-sm text-slate-600">Maria Fernanda Bittelbrunn Toniasso</p>
            </div>
            <div className="px-6 py-3 rounded-full bg-slate-100 border border-slate-200">
              <p className="text-sm text-slate-600">Matheus de Oliveira Saldanha</p>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 2 - Cenário de Fraudes no Brasil
    {
      id: 2,
      title: "O Cenário das Fraudes Financeiras",
      subtitle: "Por que precisamos agir agora?",
      content: (
        <div className="space-y-8 animate-fade-in">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-3xl font-bold text-slate-800">R$ 2,5 bi</p>
              <p className="text-sm text-slate-500 mt-2">Perdas anuais estimadas com fraudes digitais no Brasil</p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <p className="text-3xl font-bold text-slate-800">+62%</p>
              <p className="text-sm text-slate-500 mt-2">Aumento de tentativas de fraude nos últimos 2 anos</p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-slate-800">Segundos</p>
              <p className="text-sm text-slate-500 mt-2">Tempo que uma fraude leva para ser executada</p>
            </div>
          </div>
          <div className="p-5 rounded-xl bg-amber-50 border border-amber-200">
            <p className="text-center text-amber-800">
              <strong>Desafio:</strong> Detectar fraudes em tempo real antes que causem prejuízos irreversíveis
            </p>
          </div>
        </div>
      ),
    },
    // Slide 3 - Impacto nas Empresas
    {
      id: 3,
      title: "O Impacto nas Empresas",
      subtitle: "Muito além do prejuízo financeiro",
      content: (
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-red-600" />
                </div>
                <h4 className="font-semibold text-slate-800">Perdas Financeiras Diretas</h4>
              </div>
              <p className="text-sm text-slate-600">
                Estornos, reembolsos e custos operacionais para investigação de cada caso suspeito.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <h4 className="font-semibold text-slate-800">Perda de Confiança</h4>
              </div>
              <p className="text-sm text-slate-600">
                Clientes afetados por fraudes tendem a abandonar a empresa e compartilhar experiências negativas.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="font-semibold text-slate-800">Riscos Regulatórios</h4>
              </div>
              <p className="text-sm text-slate-600">
                Multas e sanções por não conformidade com normas de segurança e proteção de dados (LGPD, BACEN).
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-800">Sobrecarga Operacional</h4>
              </div>
              <p className="text-sm text-slate-600">
                Equipes sobrecarregadas com análises manuais que poderiam ser automatizadas.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 4 - Nossa Proposta de Valor
    {
      id: 4,
      title: "Nossa Proposta de Valor",
      subtitle: "Inteligência Artificial a favor da segurança",
      content: (
        <div className="space-y-8 animate-fade-in">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Velocidade</h3>
              <p className="text-sm text-slate-600">Análise em milissegundos, antes que a transação seja concluída</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-600 flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Precisão</h3>
              <p className="text-sm text-slate-600">Modelo ML com 85% de detecção de fraudes reais</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-purple-600 flex items-center justify-center mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Simplicidade</h3>
              <p className="text-sm text-slate-600">Interface conversacional intuitiva, sem necessidade de treinamento técnico</p>
            </div>
          </div>
          <div className="p-5 rounded-xl bg-blue-50 border border-blue-200">
            <p className="text-center text-blue-800">
              <strong>Resultado:</strong> Redução de perdas financeiras + Liberação da equipe para análises estratégicas
            </p>
          </div>
        </div>
      ),
    },
    // Slide 5 - Diferencial Competitivo
    {
      id: 5,
      title: "Por que este Projeto?",
      subtitle: "Diferenciais da nossa solução",
      content: (
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              O que oferecemos
            </h3>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                <p className="text-sm text-slate-700"><strong>Interface em Português:</strong> Sistema 100% em português brasileiro, facilitando adoção pela equipe</p>
              </div>
              <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                <p className="text-sm text-slate-700"><strong>Chat Inteligente:</strong> Pergunte sobre transações como se estivesse conversando com um especialista</p>
              </div>
              <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                <p className="text-sm text-slate-700"><strong>Indicadores Visuais:</strong> Cores claras indicam nível de risco (verde, amarelo, vermelho)</p>
              </div>
              <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                <p className="text-sm text-slate-700"><strong>Ações Rápidas:</strong> Botões para consultas frequentes, agilizando o dia a dia</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-600" />
              Segurança e Confiabilidade
            </h3>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                <p className="text-sm text-slate-700"><strong>Autenticação:</strong> Acesso protegido por login seguro</p>
              </div>
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                <p className="text-sm text-slate-700"><strong>Dados Reais:</strong> Modelo treinado com +3.7 milhões de transações</p>
              </div>
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                <p className="text-sm text-slate-700"><strong>Validado:</strong> Métricas comprovadas em dataset público do HuggingFace</p>
              </div>
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                <p className="text-sm text-slate-700"><strong>Escalável:</strong> Arquitetura pronta para crescer com sua operação</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 6 - Dataset
    {
      id: 6,
      title: "Base de Dados",
      subtitle: "Fundamento sólido para decisões confiáveis",
      content: (
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-800">Dataset HuggingFace</h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>3.713.576</strong> transações analisadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>336.788</strong> fraudes identificadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Base pública e auditável</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Padrão internacional de qualidade</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-indigo-600" />
                <h3 className="text-xl font-semibold text-slate-800">Desafio do Desbalanceamento</h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                Apenas ~9% das transações são fraudes. Isso é um desafio comum no mundo real que exige técnicas especializadas.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600">Transações legítimas</span>
                  <span className="font-mono text-slate-800">91%</span>
                </div>
                <Progress value={91} className="h-3" />
                <div className="flex justify-between text-sm mb-1 mt-3">
                  <span className="text-slate-600">Fraudes</span>
                  <span className="font-mono text-slate-800">9%</span>
                </div>
                <Progress value={9} className="h-3" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 7 - Arquitetura (Simplificada)
    {
      id: 7,
      title: "Como Funciona",
      subtitle: "Visão geral da arquitetura",
      content: (
        <div className="space-y-8 animate-fade-in">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-800 text-sm mb-1">1. Usuário</h3>
              <p className="text-xs text-slate-500">Envia pergunta ou transação</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-3">
                <GitBranch className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-slate-800 text-sm mb-1">2. Orquestrador</h3>
              <p className="text-xs text-slate-500">Roteia para o serviço correto</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-3">
                <Cpu className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-800 text-sm mb-1">3. IA Analisa</h3>
              <p className="text-xs text-slate-500">ML ou LLM processa</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-800 text-sm mb-1">4. Resposta</h3>
              <p className="text-xs text-slate-500">Resultado com nível de risco</p>
            </div>
          </div>
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200">React (Interface)</span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200">n8n (Automação)</span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200">Python + Docker (ML)</span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200">LLM (Perguntas)</span>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 8 - Pipeline n8n (Técnico)
    {
      id: 8,
      title: "Pipeline de Processamento",
      subtitle: "Workflow n8n Implementado",
      content: (
        <div className="space-y-6 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-lg">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">1</span>
                Recebimento (Webhook)
              </h3>
              <p className="text-sm text-slate-600">
                Endpoint POST recebe mensagens da interface de chat e dados de transações estruturados.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-lg">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">2</span>
                Roteamento Inteligente
              </h3>
              <p className="text-sm text-slate-600">
                Identifica se é análise de transação (ML) ou pergunta geral (LLM) via código JavaScript.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-lg">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">3</span>
                Processamento
              </h3>
              <p className="text-sm text-slate-600">
                <strong>Transação:</strong> HTTP Request para API Python<br />
                <strong>Pergunta:</strong> LLM Chain com Groq
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-lg">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">4</span>
                Formatação UI
              </h3>
              <p className="text-sm text-slate-600">
                Nó Code formata resposta com nível de risco, probabilidade e mensagem amigável.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 9 - Backend Python
    {
      id: 9,
      title: "Serviço de Predição",
      subtitle: "Backend Python + Docker",
      content: (
        <div className="space-y-6 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-lg">
                <h3 className="font-semibold text-slate-800 mb-3">🐍 Flask API</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Endpoint <code className="px-2 py-0.5 rounded bg-slate-100">/predict</code></li>
                  <li>• Health check para monitoramento</li>
                  <li>• Validação de campos obrigatórios</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-lg">
                <h3 className="font-semibold text-slate-800 mb-3">🐳 Docker</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Imagem Python 3.11-slim</li>
                  <li>• Dependências: Flask, scikit-learn, LightGBM</li>
                  <li>• Healthcheck integrado</li>
                </ul>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-lg">
              <h3 className="font-semibold text-slate-800 mb-3">⚙️ Feature Engineering</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• <strong>amount_high:</strong> Valor acima da média</li>
                <li>• <strong>balance_suspicious:</strong> Saldo fora do IQR</li>
                <li>• <strong>amount_balance_ratio:</strong> Relação valor/saldo</li>
                <li>• <strong>log_amount:</strong> Log transformado</li>
                <li>• <strong>One-hot encoding:</strong> Tipos de transação</li>
              </ul>
              <div className="mt-4 p-3 rounded-lg bg-slate-50">
                <p className="text-xs text-slate-600">
                  <strong>Threshold ótimo:</strong> 0.423 (otimizado no step 3)
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 10 - Modelagem ML
    {
      id: 10,
      title: "Modelagem Machine Learning",
      subtitle: "Comparativo de Modelos",
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
                className={`p-4 rounded-xl border shadow-lg ${model.selected ? 'bg-blue-50 border-blue-300' : 'bg-white border-slate-200'}`}
              >
                <h4 className="font-semibold text-sm text-slate-800 mb-3">{model.name}</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600">ROC-AUC</span>
                      <span className="font-mono text-slate-800">{model.auc.toFixed(2)}</span>
                    </div>
                    <Progress value={model.auc * 100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600">Recall</span>
                      <span className="font-mono text-slate-800">{model.recall.toFixed(2)}</span>
                    </div>
                    <Progress value={model.recall * 100} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-lg">
            <h4 className="font-semibold text-slate-800 mb-3">Metodologia</h4>
            <div className="flex flex-wrap gap-2 text-sm text-slate-600">
              <span className="px-3 py-1 rounded-full bg-slate-100">70% Treino</span>
              <span className="px-3 py-1 rounded-full bg-slate-100">15% Teste</span>
              <span className="px-3 py-1 rounded-full bg-slate-100">15% Validação</span>
              <span className="px-3 py-1 rounded-full bg-slate-100">Class Weights</span>
              <span className="px-3 py-1 rounded-full bg-slate-100">RobustScaler</span>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 11 - Interface Implementada
    {
      id: 11,
      title: "Interface Implementada",
      subtitle: "Funcionalidades Disponíveis no PoC",
      content: (
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-slate-800">Autenticação</h4>
              </div>
              <p className="text-sm text-slate-600">
                Tela de login seguro com validação de credenciais
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-slate-800">Chat Interativo</h4>
              </div>
              <p className="text-sm text-slate-600">
                Interface conversacional para consultas sobre risco e fraude
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-slate-800">Ações Rápidas</h4>
              </div>
              <p className="text-sm text-slate-600">
                Botões pré-configurados para consultas frequentes
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-slate-800">Formulário de Transação</h4>
              </div>
              <p className="text-sm text-slate-600">
                Entrada estruturada: valor, tipo e saldo destino
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-slate-800">Indicadores de Risco</h4>
              </div>
              <p className="text-sm text-slate-600">
                Cores visuais: verde (baixo), amarelo (médio), vermelho (alto)
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-slate-800">Histórico de Mensagens</h4>
              </div>
              <p className="text-sm text-slate-600">
                Contexto da sessão com timestamps
              </p>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 12 - Métricas
    {
      id: 12,
      title: "Resultados da Validação",
      subtitle: "Métricas do Modelo Final",
      content: (
        <div className="space-y-6 animate-fade-in">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-slate-600">ROC-AUC</span>
              </div>
              <p className="text-4xl font-bold text-slate-800">92.45%</p>
              <p className="text-xs text-slate-500 mt-1">Excelente discriminação</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm text-slate-600">Recall</span>
              </div>
              <p className="text-4xl font-bold text-slate-800">85.67%</p>
              <p className="text-xs text-slate-500 mt-1">Fraudes detectadas</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-amber-600" />
                <span className="text-sm text-slate-600">Precision</span>
              </div>
              <p className="text-4xl font-bold text-slate-800">82.34%</p>
              <p className="text-xs text-slate-500 mt-1">Alertas corretos</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-lg">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="px-4 py-2 rounded-lg bg-slate-100">
                <span className="text-slate-600">Threshold: </span>
                <span className="font-mono font-semibold text-slate-800">0.423</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-slate-100">
                <span className="text-slate-600">Modelo: </span>
                <span className="font-semibold text-slate-800">LightGBM</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-green-100">
                <span className="text-slate-600">Status: </span>
                <span className="font-semibold text-green-700">Pronto para Deploy</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 13 - Conclusão
    {
      id: 13,
      title: "Conclusão e Próximos Passos",
      subtitle: "Roadmap do Projeto",
      content: (
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Implementado neste PoC
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                Interface chat responsiva em português
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                Pipeline n8n com roteamento inteligente
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                Modelo LightGBM treinado e validado
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                API Flask containerizada
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                Formulário de análise de transações
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              Próximos Passos
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-slate-400">○</span>
                Integração com base de dados PostgreSQL
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400">○</span>
                Sistema de alertas automatizados
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400">○</span>
                Dashboard de monitoramento
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400">○</span>
                Autenticação robusta com OAuth
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400">○</span>
                Análise de documentos com LLM
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    // Slide 14 - Obrigada
    {
      id: 14,
      title: "Obrigada!",
      subtitle: "Perguntas?",
      content: (
        <div className="flex flex-col items-center gap-8 animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-xl">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <div className="text-center space-y-4">
            <p className="text-lg text-slate-600">
              Maria Fernanda Bittelbrunn Toniasso
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="https://huggingface.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-sm text-slate-700"
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
            className="mt-8 border-slate-300 text-slate-700 hover:bg-slate-100"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-4 py-3 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="gap-2 text-slate-600 hover:text-slate-800"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Voltar</span>
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">
              Slide {currentSlide + 1} de {slides.length}
            </span>
          </div>
          <div className="w-20" />
        </div>
      </header>

      {/* Main Slide Content */}
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center justify-center max-w-5xl">
        <div className="w-full space-y-6">
          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
              {slides[currentSlide].title}
            </h1>
            {slides[currentSlide].subtitle && (
              <p className="text-lg text-slate-500">
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
      <footer className="bg-white border-t border-slate-200 px-4 py-4 shadow-sm">
        <div className="container mx-auto flex flex-col gap-4">
          {/* Slide indicators */}
          <div className="flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-blue-600 w-6"
                    : "bg-slate-300 hover:bg-slate-400"
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
              className="gap-2 border-slate-300 text-slate-700"
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </Button>
            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="gap-2 bg-blue-600 hover:bg-blue-700 text-white"
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
