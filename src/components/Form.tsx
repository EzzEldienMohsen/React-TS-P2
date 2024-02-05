import React from 'react';
type FormProps = React.ComponentPropsWithoutRef<'form'>;

const Form: React.FC<FormProps> = (props) => {
  return <form {...props}>{props.children}</form>;
};

export default Form;
