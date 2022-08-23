import styled from 'styled-components';

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  a {
    transition: 200ms;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;

  div {
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

    svg {
      color: ${props => props.theme.yellow700};
    }
  }
`;
