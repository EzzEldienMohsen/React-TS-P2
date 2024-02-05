import Button from './components/Button';

function App() {
  return (
    <main>
      <p>
        <Button el="button">button</Button>
      </p>
      <p>
        <Button
          el="link"
          href="https://react-ts-brown.vercel.app/"
          target="__blank"
        >
          Link
        </Button>
      </p>
    </main>
  );
}

export default App;
