import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export function useCart() {
  const { coffees, addToCart } = useContext(CartContext);

  return {
    coffees,
    addToCart,
  };
}
