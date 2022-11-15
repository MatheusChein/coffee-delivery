import styled from 'styled-components';

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  a {
    transition: 150ms;

    &:hover {
      filter: brightness(0.8);
      transform: scale(1.1);
    }
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;

  > div {
    display: flex;
    align-items: center;
    gap: 4px;
    background: ${props => props.theme.purple300};
    padding: 0 8px;
    border-radius: 6px;

    svg {
      color: ${props => props.theme.purple500};
    }

    span {
      color: ${props => props.theme.purple700};
      font-size: 0.875rem;
      line-height: 18.2px;
    }
  }

  a {
    align-self: center;
    display: flex;
    align-items: center;
    background: ${props => props.theme.yellow300};
    padding: 8px;
    border-radius: 6px;
    position: relative;

    svg {
      color: ${props => props.theme.yellow700};
    }
  }
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  position: absolute;
  width: 20px;
  height: 20px;
  background: ${props => props.theme.yellow700};
  right: -8.35px;
  top: -8px;
  z-index: 10;

  span {
    color: ${props => props.theme.white};
    font-weight: 700;
    font-size: 0.75rem;
    text-align: center;
  }
`;
