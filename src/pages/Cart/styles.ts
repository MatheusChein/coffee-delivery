import styled from 'styled-components';

export const CartContainer = styled.main`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const LeftContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 55%;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    color: ${props => props.theme.baseSubtitle};
  }
`;

export const FormContainer = styled.div`
  background: ${props => props.theme.baseCard};
  border-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

interface ContainerHeaderProps {
  type: 'address' | 'payment';
}

export const ContainerHeader = styled.header<ContainerHeaderProps>`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${props =>
      props.type === 'address' ? props.theme.yellow700 : props.theme.purple500};
  }

  h3 {
    font-size: 1rem;
    color: ${props => props.theme.baseSubtitle};
    line-height: 1.3;
    font-weight: 400;
  }

  span {
    font-size: 0.875rem;
  }
`;

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
  }
`;

export const PaymentsContainer = styled.div`
  background: ${props => props.theme.baseCard};
  border-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const PaymentOptions = styled.div`
  width: 100%;
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: ${props => props.theme.baseButton};
  border-radius: 6px;
  padding: 1rem;
  border: 2px solid transparent;
  width: 180px;
  transition: 150ms;

  &:focus {
    border: 2px solid ${props => props.theme.purple500};
    outline: none;
  }

  &:hover {
    filter: brightness(0.9);
    transform: scale(1.05);
  }

  svg {
    color: ${props => props.theme.purple500};
  }

  span {
    text-transform: uppercase;
    font-size: 0.75rem;
  }
`;

export const RightContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 42%;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    color: ${props => props.theme.baseSubtitle};
  }
`;

export const CheckoutContainer = styled.div`
  background: ${props => props.theme.baseCard};
  border-radius: 6px 44px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  > button {
    background: ${props => props.theme.yellow500};
    color: ${props => props.theme.white};
    border-radius: 6px;
    padding: 0.75rem;
    text-transform: uppercase;
    border: 2px solid transparent;
    font-weight: 700;
    font-size: 14px;
    transition: 150ms;

    &:hover {
      filter: brightness(0.9);
      transform: scale(1.05);
    }

    &:focus {
      border: 2px solid ${props => props.theme.purple500};
      outline: none;
    }
  }
`;

export const CheckoutItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
  max-height: 400px;
  padding-right: 1rem;
`;

export const CheckoutTotals = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div:not(:last-child) {
    display: flex;
    justify-content: space-between;

    span:first-child {
      font-size: 14px;
    }
  }

  div:last-child {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 20px;
      font-weight: 700;
      color: ${props => props.theme.baseSubtitle};
    }
  }
`;
