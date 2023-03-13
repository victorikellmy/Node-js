import React, { useState } from 'react';

function App() {
  const[nome, setNome] = useState('');
  const [idade, setIdade] =useState('');
  const [email, setEmail] =useState('');
  const[user, setUser] =useState({});


  
  function handleRegister(e){
    e.preventDefault();
    alert('usuario registrado')
    setUser({
      nome: nome,
      idade: idade,
      email: email,
    })
  }

    return (
    <div>
      <h1>Cadastrando</h1>

      <form onSubmit={handleRegister}>
        <label>Nomes:</label><br/>
        <input placeholder="digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value) }
        /><br/>

        <label>Idade:</label><br/>
        <input placeholder="digite seu Idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        /><br/>

        <label>Email:</label><br/>
        <input placeholder="digite seu Email"
        value={email}
        onChange={(e) => setEmail(e.target.value) }
        /><br/>

        <button type="submit">Registar</button>
      </form>

      <br/><br/>

      <div>
        <span>Nome:{user.nome}</span><br/>
        <span>Idade:{user.idade}</span><br/>
        <span>Email:{user.email}</span><br/>
      </div>
    </div>
  );
}

export default App;