import styled from 'styled-components';

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 256px;
  height: 310px;
  padding: 1.25rem;
  padding-top: 110px;
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.baseCard};
  border-radius: 6px 36px;

  position: relative;

  transition: 100ms;

  &:hover {
    transform: translateY(-8px);
  }

  img {
    height: 120px;
    width: 120px;
    position: absolute;
    top: -20px;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    p {
      text-transform: uppercase;
      text-align: center;
      background: ${props => props.theme.yellow300};
      padding: 0.25rem 0.5rem;
      border-radius: 8px;
      color: ${props => props.theme.yellow700};
      font-weight: 700;
      font-size: 0.625rem;
      line-height: 13px;
    }
  }

  h4 {
    font-weight: 700;
    font-size: 1.25rem;
    text-align: center;
    line-height: 26px;
    font-family: 'Baloo 2', sans-serif;
    color: ${props => props.theme.baseSubtitle};
  }

  span {
    text-align: center;
    color: ${props => props.theme.baseLabel};
    font-size: 0.875rem;
    line-height: 18.2px;
  }
`;

export const CoffeeFooter = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;

  > span {
    &::before {
      content: 'R$ ';
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 18.2px;
    }

    font-weight: 800;
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
    line-height: 31.2px;
    color: ${props => props.theme.baseText};
  }
`;

export const CoffeeFoterCartButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    display: flex;
    justify-content: space-around;
    gap: 0.25rem;
    padding: 0.5rem;
    width: 4.5rem;
    border-radius: 4px;
    background: ${props => props.theme.baseButton};

    button {
      background: transparent;
      border: none;
      color: ${props => props.theme.purple500};
      margin-top: 2px;

      transition: 200ms;

      &:hover {
        filter: brightness(0.5);
        transform: rotate(360deg);
      }
    }

    span {
      color: ${props => props.theme.baseTitle};
      line-height: 20.8px;
      font-size: 1rem;
    }
  }

  > button {
    align-self: center;
    display: flex;
    align-items: center;
    background: ${props => props.theme.purple700};
    padding: 8px;
    border-radius: 6px;
    border: none;

    transition: 200ms;

    &:hover {
      filter: brightness(0.8);
    }

    svg {
      color: ${props => props.theme.white};
    }
  }
`;
