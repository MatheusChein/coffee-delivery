import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.baseButton};

  aside {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 64px;
    }
  }

  > span {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.3;
  }
`;

export const CheckoutItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-size: 1rem;
    color: ${props => props.theme.baseSubtitle};
    line-height: 1.3;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${props => props.theme.baseButton};
  border-radius: 6px;
  padding: 0.5rem;
  border: 2px solid transparent;
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
