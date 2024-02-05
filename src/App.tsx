import React from 'react';

import Input from './components/Input';

function App() {
  const input = React.useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input name="yourName" text="insert your name" type="text" ref={input} />
    </main>
  );
}

export default App;
