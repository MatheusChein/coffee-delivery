import { InputHTMLAttributes } from 'react';
import { CustomInputContainer } from './styles';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isState?: boolean;
  isOptional?: boolean;
}

export function CustomInput({
  isOptional,
  isState,
  ...rest
}: CustomInputProps) {
  return (
    <CustomInputContainer isOptional={isOptional} isState={isState}>
      <input {...rest} />
      {isOptional && <span>Opcional</span>}
    </CustomInputContainer>
  );
}
