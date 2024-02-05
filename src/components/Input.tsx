import React from 'react';

type Input = {
  name: string;
  text: string;
} & React.ComponentPropsWithoutRef<'input'>;
const Input: React.FC<Input> = ({ name, text, ...props }) => {
  return (
    <p>
      <label htmlFor={name}>{text}</label>
      <input id={name} name={name} {...props} />
    </p>
  );
};

export default Input;
