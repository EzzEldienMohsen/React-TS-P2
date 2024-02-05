import React from 'react';
type FormProps = React.ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};

const Form: React.FC<FormProps> = ({ onSave, children, ...props }) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    e.currentTarget.reset();
  }
  return (
    <form onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  );
};

export default Form;
