import { Button } from "@/components/ui/button";
import { AlertCircle, TrendingUp, Database, Shield } from "lucide-react";

interface QuickActionsProps {
  onActionClick: (query: string) => void;
}

const QuickActions = ({ onActionClick }: QuickActionsProps) => {
  const actions = [
    {
      icon: AlertCircle,
      label: "Últimas 10 transações suspeitas",
      query: "Mostre as últimas 10 transações suspeitas",
    },
    {
      icon: TrendingUp,
      label: "Score de risco geral",
      query: "Qual é o score de risco geral atual?",
    },
    {
      icon: Database,
      label: "Resumo do dia",
      query: "Me dê um resumo das transações de hoje",
    },
    {
      icon: Shield,
      label: "Alertas ativos",
      query: "Quais alertas de fraude estão ativos agora?",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <Button
            key={index}
            variant="outline"
            className="h-auto py-4 px-4 justify-start text-left gap-3 bg-card/50 hover:bg-card border-border hover:border-primary/50 transition-all hover:shadow-glow"
            onClick={() => onActionClick(action.query)}
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-sm font-medium">{action.label}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default QuickActions;
