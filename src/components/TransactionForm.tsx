import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface TransactionFormProps {
  onSubmit: (transaction: TransactionData) => void;
}

interface TransactionData {
  amount: number;
  type: string;
  newBalanceDest?: number;
}

const TransactionForm = ({ onSubmit }: TransactionFormProps) => {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('TRANSFER');
  const [balance, setBalance] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || parseFloat(amount) <= 0) {
      return;
    }

    onSubmit({
      amount: parseFloat(amount),
      type,
      newBalanceDest: balance ? parseFloat(balance) : undefined
    });

    // Reset form
    setAmount('');
    setBalance('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="amount">Valor da Transação (R$)</Label>
        <Input 
          id="amount"
          placeholder="Ex: 125000" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          min="0"
          step="0.01"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="type">Tipo de Transação</Label>
        <Select value={type} onValueChange={setType}>
          <SelectTrigger id="type">
            <SelectValue placeholder="Selecione o tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="CASH_IN">CASH_IN (Depósito)</SelectItem>
            <SelectItem value="CASH_OUT">CASH_OUT (Saque)</SelectItem>
            <SelectItem value="DEBIT">DEBIT (Débito)</SelectItem>
            <SelectItem value="PAYMENT">PAYMENT (Pagamento)</SelectItem>
            <SelectItem value="TRANSFER">TRANSFER (Transferência)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="balance">Saldo Destino (opcional)</Label>
        <Input 
          id="balance"
          placeholder="Ex: 50000" 
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          type="number"
          min="0"
          step="0.01"
        />
      </div>

      <Button type="submit" className="w-full" size="lg">
        🔍 Analisar Risco
      </Button>
    </form>
  );
};

export default TransactionForm;
