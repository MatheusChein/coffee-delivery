import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useState } from 'react';
import {
  CoffeeContainer,
  CoffeeFooter,
  CoffeeFoterCartButtons,
} from './styles';

interface CoffeeProps {
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

  function handleIncreaseQuantity() {
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  function handleDecreaseQuantity() {
    setQuantity(prevQuantity => (prevQuantity === 0 ? 0 : prevQuantity - 1));
  }

  const isAddToCartDisabled = quantity === 0;

  return (
    <CoffeeContainer>
      <img src={imgSrc} alt={name} />
      <div>
        {categories.map(category => (
          <p>{category}</p>
        ))}
      </div>
      <h4>{name}</h4>
      <span>{description}</span>

      <CoffeeFooter>
        <span>{price.toFixed(2)}</span>

        <CoffeeFoterCartButtons>
          <div>
            <button onClick={handleDecreaseQuantity}>
              <Minus weight="bold" />
            </button>{' '}
            <span>{quantity}</span>{' '}
            <button onClick={handleIncreaseQuantity}>
              <Plus weight="bold" />
            </button>
          </div>
          <button disabled={isAddToCartDisabled}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </CoffeeFoterCartButtons>
      </CoffeeFooter>
    </CoffeeContainer>
  );
}
