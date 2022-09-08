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
            <button>
              <Minus weight="bold" />
            </button>{' '}
            <span>{quantity}</span>{' '}
            <button>
              <Plus weight="bold" />
            </button>
          </div>
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </CoffeeFoterCartButtons>
      </CoffeeFooter>
    </CoffeeContainer>
  );
}
