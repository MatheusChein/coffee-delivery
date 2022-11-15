import { MapPin } from 'phosphor-react';
import { CustomInput } from '../../components/Input/styles';
import { FormContainer, FormHeader, LeftContainer } from './styles';

export function Cart() {
  return (
    <main>
      <LeftContainer>
        <h2>Complete seu pedido</h2>

        <FormContainer>
          <FormHeader>
            <MapPin />
            <div>
              <h3>Endereço de entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </FormHeader>

          <form>
            <CustomInput placeholder="CEP" />
            <CustomInput placeholder="Rua" />

            <div>
              <CustomInput placeholder="Número" />
              <CustomInput placeholder="Complemento" />
            </div>

            <div>
              <CustomInput placeholder="Bairro" />
              <CustomInput placeholder="Cidade" />
              <CustomInput placeholder="UF" />
            </div>
          </form>
        </FormContainer>
      </LeftContainer>
    </main>
  );
}
