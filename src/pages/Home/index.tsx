import {
  ShoppingCart,
  Timer,
  Package,
  Coffee as CoffeeIcon,
} from 'phosphor-react';
import { useEffect, useState } from 'react';

import homeBannerImg from '../../assets/banner-cup.svg';
import { api } from '../../services/api';
import { Coffee } from './components/Coffee';

import {
  BannerContainer,
  BannerItemsContainer,
  BannerItem,
  ProductsContainer,
} from './styles';

interface CoffeeData {
  id: number;
  name: string;
  description: string;
  categories: string[];
  price: number;
  imgSrc: string;
}

export function Home() {
  const [coffees, setCoffees] = useState<CoffeeData[]>([]);

  useEffect(() => {
    api.get<CoffeeData[]>('/').then(response => setCoffees(response.data));
  }, []);

  return (
    <main>
      <BannerContainer>
        <aside>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>

          <BannerItemsContainer>
            <BannerItem iconColor="yellow700">
              <div>
                <ShoppingCart weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </BannerItem>

            <BannerItem iconColor="baseText">
              <div>
                <Package weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </BannerItem>

            <BannerItem iconColor="yellow500">
              <div>
                <Timer weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </BannerItem>

            <BannerItem iconColor="purple500">
              <div>
                <CoffeeIcon weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </BannerItem>
          </BannerItemsContainer>
        </aside>
        <img src={homeBannerImg} alt="Coffee cup" />
      </BannerContainer>

      <ProductsContainer>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map(coffee => (
            <Coffee
              key={coffee.id}
              name={coffee.name}
              categories={coffee.categories}
              description={coffee.description}
              imgSrc={coffee.imgSrc}
              price={coffee.price}
            />
          ))}
        </div>
      </ProductsContainer>
    </main>
  );
}
