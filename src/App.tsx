import Input from './components/Input';
import Form from './components/Form';
import Button from './components/Button';

function App() {
  function handleSave(data: unknown): void {
    const extractedData = data as {
      name: string;
      email: string;
      password: string;
      age: string;
    };
    console.log(extractedData);
  }
  return (
    <main>
      <Form onSave={handleSave}>
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
