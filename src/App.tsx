import Input from './components/Input';
import Form from './components/Form';
import Button from './components/Button';

function App() {
  return (
    <main>
      <Form>
        <Input name="yourName" text="insert your name" type="text" />
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
