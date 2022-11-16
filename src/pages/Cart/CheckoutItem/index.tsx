import { Trash } from 'phosphor-react';
import { useState } from 'react';
import { CounterButton } from '../../../components/CounterButton';
import {
  CheckoutItemContainer,
  CheckoutItemContent,
  RemoveButton,
} from './styles';

export function CheckoutItem() {
  const [quantity, setQuantity] = useState(1);

  function handleIncreaseQuantity() {
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  function handleDecreaseQuantity() {
    setQuantity(prevQuantity => (prevQuantity === 0 ? 0 : prevQuantity - 1));
  }

  return (
    <CheckoutItemContainer>
      <aside>
        <img src="src/assets/expresso-tradicional.svg" alt="café" />

        <CheckoutItemContent>
          <span>Expresso tradicional</span>
          <div>
            <CounterButton
              quantity={quantity}
              handleDecreaseQuantity={handleDecreaseQuantity}
              handleIncreaseQuantity={handleIncreaseQuantity}
            />
            <RemoveButton>
              <Trash />
              <span>Remover</span>
            </RemoveButton>
          </div>
        </CheckoutItemContent>
      </aside>

      <span>R$ 9.90</span>
    </CheckoutItemContainer>
  );
}
