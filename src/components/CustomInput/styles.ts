import styled, { css } from 'styled-components';

interface CustomInputProps {
  isState?: boolean;
  isOptional?: boolean;
}

export const CustomInputContainer = styled.div<CustomInputProps>`
  width: ${props => (props.isState ? '100px' : '100%')};
  background: ${props => props.theme.baseInput};
  border: 1px solid ${props => props.theme.baseButton};
  padding: 0.75rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  border: 2px solid transparent;

  transition: 150ms;

  &:focus-within {
    border: 2px solid ${props => props.theme.purple500};
  }

  input {
    border: none;
    background: transparent;

    ${props =>
      !props.isState &&
      css`
        flex: 1;
      `}

    ${props =>
      props.isState &&
      css`
        width: 100%;
      `}

    &:focus {
      border: none;
      outline: none;
    }
  }

  span {
    color: ${props => props.theme.baseLabel};
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
    line-height: 1.3;
  }
`;
