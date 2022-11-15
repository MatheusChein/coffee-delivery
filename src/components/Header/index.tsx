import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { useCart } from '../../hooks/useCart';

import { Counter, HeaderContainer, HeaderLinks } from './styles';

export function Header() {
  const { coffees } = useCart();

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="Logo" />
      </NavLink>

      <HeaderLinks>
        <div>
          <MapPin size={24} weight="fill" />
          <span>Rio de Janeiro, RJ</span>
        </div>

        <NavLink to="/cart">
          {coffees.length > 0 && (
            <Counter>
              <span>{coffees.length}</span>
            </Counter>
          )}
          <ShoppingCart size={24} weight="fill" />
        </NavLink>
      </HeaderLinks>
    </HeaderContainer>
  );
}
