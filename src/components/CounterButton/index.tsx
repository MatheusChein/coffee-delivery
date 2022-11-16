import { Minus, Plus } from 'phosphor-react';
import { CounterButtonContainer } from './styles';

interface CounterButtonProps {
  handleDecreaseQuantity: () => void;
  handleIncreaseQuantity: () => void;
  quantity: number;
}

export function CounterButton({
  handleDecreaseQuantity,
  quantity,
  handleIncreaseQuantity,
}: CounterButtonProps) {
  return (
    <CounterButtonContainer>
      <button onClick={handleDecreaseQuantity}>
        <Minus weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={handleIncreaseQuantity}>
        <Plus weight="bold" />
      </button>
    </CounterButtonContainer>
  );
}
