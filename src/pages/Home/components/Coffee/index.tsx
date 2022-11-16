import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useState } from 'react';
import { CounterButton } from '../../../../components/CounterButton';
import { useCart } from '../../../../hooks/useCart';
import {
  CoffeeContainer,
  CoffeeFooter,
  CoffeeFoterCartButtons,
} from './styles';

export interface CoffeeProps {
  name: string;
  description: string;
  categories: string[];
  price: number;
  imgSrc: string;
}

export function Coffee({
  imgSrc,
  name,
  description,
  categories,
  price,
}: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const isAddToCartDisabled = quantity === 0;

  function handleIncreaseQuantity() {
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  function handleDecreaseQuantity() {
    setQuantity(prevQuantity => (prevQuantity === 0 ? 0 : prevQuantity - 1));
  }

  function handleAddoToCart() {
    addToCart({
      name,
      description,
      imgSrc,
      categories,
      price,
      quantity,
    });
  }

  return (
    <CoffeeContainer>
      <img src={imgSrc} alt={name} />
      <div>
        {categories.map(category => (
          <p key={category}>{category}</p>
        ))}
      </div>
      <h4>{name}</h4>
      <span>{description}</span>

      <CoffeeFooter>
        <span>{price.toFixed(2)}</span>

        <CoffeeFoterCartButtons>
          <CounterButton
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleIncreaseQuantity={handleIncreaseQuantity}
            quantity={quantity}
          />

          <button disabled={isAddToCartDisabled} onClick={handleAddoToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </CoffeeFoterCartButtons>
      </CoffeeFooter>
    </CoffeeContainer>
  );
}
