import React from 'react';
type ButtonProps = {
  el: 'button';
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'button'>;
type Anchor = {
  el: 'link';
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'a'>;
type BProps = Anchor | ButtonProps;
const Button: React.FC<BProps> = (props) => {
  if (props.el === 'link') {
    return <a {...props}></a>;
  }
  return <button {...props}></button>;
};

export default Button;
