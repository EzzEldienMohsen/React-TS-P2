import React from 'react';

type Input = {
  name: string;
  text: string;
} & React.ComponentPropsWithoutRef<'input'>;
const Input = React.forwardRef<HTMLInputElement, Input>(
  ({ name, text, ...props }, ref) => {
    return (
      <p>
        <label htmlFor={name}>{text}</label>
        <input id={name} name={name} {...props} ref={ref} />
      </p>
    );
  }
);

export default Input;
