import Input from './components/Input';
import Form, { type FormHandle } from './components/Form';
import Button from './components/Button';
import React from 'react';

function App() {
  const ref = React.useRef<FormHandle>(null);
  function handleSave(data: unknown): void {
    const extractedData = data as {
      name: string;
      email: string;
      password: string;
      age: string;
    };
    console.log(extractedData);
    ref.current?.clear();
  }
  return (
    <main>
      <Form onSave={handleSave} ref={ref}>
        <Input name="name" text="insert your name" type="text" />
        <Input name="email" text="insert your email" type="email" />
        <Input name="password" text="insert your password" type="password" />
        <Input name="age" text="insert your age" type="number" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
