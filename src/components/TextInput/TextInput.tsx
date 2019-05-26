import React from 'react';

export interface ITextInputProps {
  inputChange(event: React.SyntheticEvent<HTMLInputElement>): void;
  name: string;
}

const TextInput = ({ inputChange, name }: ITextInputProps) => {
  return (
    <div className="inputField">
      <input type="text" name={name} onChange={inputChange} />
    </div>
  );
};

export default TextInput;
