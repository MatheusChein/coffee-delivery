import { ShoppingCart, Coffee, Timer, Package } from 'phosphor-react';

import homeBannerImg from '../../assets/banner-cup.svg';

import { BannerContainer, BannerItemsContainer, BannerItem } from './styles';

export function Home() {
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
                <Coffee weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </BannerItem>
          </BannerItemsContainer>
        </aside>
        <img src={homeBannerImg} alt="Coffee cup" />
      </BannerContainer>
    </main>
  );
}
