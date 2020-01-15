import React, {useState} from 'react';

  // Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
  // Estado: Informações contidas em um componente (lembrar: imutabilidade)
  // Propriedade: Informações que passam de um componente PAI para um componente FILHO.

function App() {

  const [counter, setCounter] = useState(0)

  function incrementCounter() {
    setCounter(counter++)
  }

  return (
    <>
      <h1>Contador: </h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
