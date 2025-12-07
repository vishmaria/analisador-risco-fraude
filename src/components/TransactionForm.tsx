// src/components/TransactionForm.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

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

    const handleSubmit = () => {
        onSubmit({
            amount: parseFloat(amount),
            type,
            newBalanceDest: balance ? parseFloat(balance) : 0
        });
    };

    return (
        <div className="space-y-4 p-4 border rounded-lg">
            <h3 className="font-semibold">Analisar Nova Transação</h3>
            <Input 
                placeholder="Valor (ex: 125000)" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
            />
            <Select value={type} onValueChange={setType}>
                <option value="CASH_IN">CASH_IN</option>
                <option value="CASH_OUT">CASH_OUT</option>
                <option value="DEBIT">DEBIT</option>
                <option value="PAYMENT">PAYMENT</option>
                <option value="TRANSFER">TRANSFER</option>
            </Select>
            <Input 
                placeholder="Saldo Destino (opcional)" 
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                type="number"
            />
            <Button onClick={handleSubmit} className="w-full">
                🔍 Analisar Risco
            </Button>
        </div>
    );
};

export default TransactionForm;
