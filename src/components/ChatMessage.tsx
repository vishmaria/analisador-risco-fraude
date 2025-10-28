import { cn } from "@/lib/utils";
import { Shield, AlertTriangle, CheckCircle2, TrendingUp } from "lucide-react";

interface ChatMessageProps {
  message: string;
  type: "user" | "system";
  riskLevel?: "low" | "medium" | "high";
  timestamp?: string;
}

const ChatMessage = ({ message, type, riskLevel, timestamp }: ChatMessageProps) => {
  const isUser = type === "user";

  const getRiskIcon = () => {
    if (!riskLevel) return null;
    switch (riskLevel) {
      case "low":
        return <CheckCircle2 className="w-4 h-4 text-success" />;
      case "medium":
        return <TrendingUp className="w-4 h-4 text-warning" />;
      case "high":
        return <AlertTriangle className="w-4 h-4 text-destructive" />;
    }
  };

  return (
    <div
      className={cn(
        "flex gap-3 animate-in fade-in-0 slide-in-from-bottom-2 duration-500",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
          <Shield className="w-4 h-4 text-primary-foreground" />
        </div>
      )}
      
      <div
        className={cn(
          "max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3 shadow-card",
          isUser
            ? "bg-gradient-primary text-primary-foreground"
            : "bg-card text-card-foreground border border-border"
        )}
      >
        <div className="flex items-start gap-2">
          {getRiskIcon()}
          <div className="flex-1">
            <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
            {timestamp && (
              <span className="text-xs opacity-70 mt-1 block">{timestamp}</span>
            )}
          </div>
        </div>
      </div>

      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-semibold">
          U
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
