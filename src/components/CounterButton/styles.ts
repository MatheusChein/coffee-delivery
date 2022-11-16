import styled from 'styled-components';

export const CounterButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 0.25rem;
  padding: 0.5rem;
  width: 4.5rem;
  border-radius: 4px;
  background: ${props => props.theme.baseButton};

  button {
    background: transparent;
    border: 2px solid transparent;
    color: ${props => props.theme.purple500};

    transition: 150ms;

    &:hover {
      filter: brightness(0.5);
      transform: scale(1.2);
    }

    &:focus {
      outline: none;
      border: 2px solid ${props => props.theme.purple500};
      border-radius: 4px;
    }
  }

  span {
    color: ${props => props.theme.baseTitle};
    line-height: 20.8px;
    font-size: 1rem;
    font-family: 'Baloo 2', sans-serif;
  }
`;
