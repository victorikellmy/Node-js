import Nomes from "./components/Nomes";

function App() {
  return (
    <div>
      <h1>Bem vindo ao meu projeto </h1>
      <Nomes nome="joao" idade={10}/>
      <br/>
      <Nomes nome="pedro" idade={12}/>
    </div>
  );
}

export default App;
