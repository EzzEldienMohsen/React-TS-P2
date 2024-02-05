import React from 'react';
type FormProps = React.ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};
export type FormHandle = {
  clear: () => void;
};
const Form = React.forwardRef<FormHandle, FormProps>(
  ({ onSave, children, ...props }, ref) => {
    const form = React.useRef<HTMLFormElement>(null);
    React.useImperativeHandle(ref, () => {
      return {
        clear() {
          form.current?.reset();
        },
      };
    });
    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);
      onSave(data);
      // e.currentTarget.reset();
      // form.current?.reset();
    }
    return (
      <form onSubmit={handleSubmit} {...props} ref={form}>
        {children}
      </form>
    );
  }
);

export default Form;
