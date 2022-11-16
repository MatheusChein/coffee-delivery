import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';

import { CustomInput } from '../../components/CustomInput';
import { CheckoutItem } from './CheckoutItem';

import {
  FormContainer,
  ContainerHeader,
  LeftContainer,
  PaymentsContainer,
  PaymentOptions,
  CartContainer,
  AddressForm,
  IconButton,
  RightContainer,
  CheckoutContainer,
  CheckoutItems,
  CheckoutTotals,
} from './styles';

export function Cart() {
  return (
    <CartContainer>
      <LeftContainer>
        <h2>Complete seu pedido</h2>

        <FormContainer>
          <ContainerHeader type="address">
            <MapPinLine size={22} weight="bold" />
            <div>
              <h3>Endereço de entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </ContainerHeader>

          <AddressForm>
            <CustomInput placeholder="CEP" />
            <CustomInput placeholder="Rua" />

            <div>
              <CustomInput placeholder="Número" />
              <CustomInput placeholder="Complemento" isOptional />
            </div>

            <div>
              <CustomInput placeholder="Bairro" />
              <CustomInput placeholder="Cidade" />
              <CustomInput placeholder="UF" isState />
            </div>
          </AddressForm>
        </FormContainer>

        <PaymentsContainer>
          <ContainerHeader type="payment">
            <CurrencyDollar size={22} weight="bold" />
            <div>
              <h3>Pagamento</h3>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </ContainerHeader>

          <PaymentOptions>
            <IconButton>
              <CreditCard />
              <span>Cartão de crédito</span>
            </IconButton>

            <IconButton>
              <Bank />
              <span>Cartão de Débito</span>
            </IconButton>

            <IconButton>
              <Money />
              <span>Dinheiro</span>
            </IconButton>
          </PaymentOptions>
        </PaymentsContainer>
      </LeftContainer>

      <RightContainer>
        <h2>Cafés selecionados</h2>

        <CheckoutContainer>
          <CheckoutItems>
            <CheckoutItem />
            <CheckoutItem />
            <CheckoutItem />
          </CheckoutItems>

          <CheckoutTotals>
            <div>
              <span>Total de itens</span>
              <span>R$ 29.70</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ 3.50</span>
            </div>

            <div>
              <span>Total</span>
              <span>R$ 33.20</span>
            </div>
          </CheckoutTotals>

          <button>Confirmar pedido</button>
        </CheckoutContainer>
      </RightContainer>
    </CartContainer>
  );
}
