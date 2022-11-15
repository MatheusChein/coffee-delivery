import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';

import toast, { Toaster } from 'react-hot-toast';

interface Coffee {
  quantity: number;
  name: string;
  description: string;
  categories: string[];
  price: number;
  imgSrc: string;
}

interface CartContextType {
  coffees: Coffee[];
  addToCart: (coffeeToAdd: Coffee) => void;
}

const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  const addToCart = useCallback(
    (coffeeToAdd: Coffee) => {
      const coffeeAlreadyAddedIndex = coffees.findIndex(
        coffee => coffee.name === coffeeToAdd.name,
      );

      if (coffeeAlreadyAddedIndex < 0) {
        setCoffees(prevState => [...prevState, coffeeToAdd]);
      } else {
        const coffeesCopy = coffees;

        coffeesCopy[coffeeAlreadyAddedIndex].quantity += coffeeToAdd.quantity;

        setCoffees(coffeesCopy);
      }

      toast.success('Added to cart successfully', {
        iconTheme: {
          primary: '#8047f8',
          secondary: '#fff',
        },
      });
    },
    [coffees],
  );

  const contextValue = useMemo(
    () => ({
      coffees,
      addToCart,
    }),
    [coffees, addToCart],
  );

  return (
    <CartContext.Provider value={contextValue}>
      <>
        <Toaster />

        {children}
      </>
    </CartContext.Provider>
  );
}

export { CartContextProvider, CartContext };
