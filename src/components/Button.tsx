import React from 'react';
type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  href?: never;
};
type Anchor = React.ComponentPropsWithoutRef<'a'> & {
  href?: string;
};
type BProps = Anchor | ButtonProps;

const isAnchor = (props: BProps): props is Anchor => {
  return 'href' in props;
};
const Button: React.FC<BProps> = (props) => {
  if (isAnchor(props)) {
    return <a className="button" {...props}></a>;
  }
  return <button className="button" {...props}></button>;
};

export default Button;
