
// Importa o logo e o arquivo CSS para estilização
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';

// Importa os componentes Header e Button
import Header from './components/header/header';
import Button from './components/button/button';

// Define o componente App
function App() {

  // Função que será chamada quando o botão for clicado
   function evento() {
    alert('evento disparado');
  }

  //!                            "Hooks"              

// Estado para controlar o status de carregamento
// `carregando` é a variável de estado que indica se a página está carregando
// `setCarregando` é a função para atualizar o estado
// Inicialmente, `carregando` está definido como `true`, indicando que a página está em carregamento
  const [carregando, setCarregando] = useState(true);


// Estado para armazenar o valor do contador
// `contador` é a variável de estado que guarda o valor atual do contador
// `setContador` é a função usada para atualizar o valor do contador
// Inicialmente, o contador é definido como 0
  const [contador, setContador] = useState(0)



// Referência para o elemento de vídeo
// useRef cria uma referência que pode ser associada a um elemento DOM
// Isso permite que você acesse diretamente o DOM do elemento de vídeo, 
// o que pode ser útil para manipular o vídeo (por exemplo, reproduzir, pausar, etc.)
   const video = useRef();
  




// Este useEffect é executado sempre que o valor de 'contador' muda.
useEffect(() => {

  // Loga uma mensagem no console toda vez que 'contador' é alterado.
  console.log('contador usando Hook Effect');

}, [contador]); // A dependência é 'contador', então o efeito será executado sempre que 'contador' mudar.

// Este useEffect é executado sempre que o valor de 'carregando' muda.
useEffect(() => {

  // Loga uma mensagem no console quando o efeito é executado.
  console.log('carregar site usando Hook Effect');

  // Função de limpeza (cleanup) que será chamada quando o componente for desmontado ou antes de o efeito ser reexecutado.
  return () => {

      // Aqui você pode limpar qualquer recurso ou cancelar qualquer ação iniciada pelo efeito.
      // No momento, a função de limpeza está vazia.
  };
}, [carregando]); // A dependência é 'carregando', então o efeito será executado sempre que 'carregando' mudar.



//todo useEffect(() =>{

//todo   console.log(video.current)

//todo },[])

  
// Função de callback para manipular o elemento de vídeo
// `video.current` acessa a referência do elemento de vídeo associado
// `video.current.play` é uma referência ao método `play` do elemento de vídeo
// Este console.log vai exibir a função `play` no console, não a execução real do vídeo
function callBack(){

  console.log(video.current.play) // Chama o método `play` do elemento de vídeo

}
//!/////////////////////////////////////////////////////////////////////////////////////////////


// Adiciona um listener para o evento de scroll na janela
  // Sempre que a página for rolada, será exibida uma mensagem no console
  //?  window.addEventListener('scroll', () => console.log('evento no console'));

  
  // Retorna o JSX que define a estrutura da aplicação
  return (

    <div className="App" style={{height: '200vh'}}>
      {/* Renderiza o componente Header */}

      <Header />

                                                 {/* "Hooks" */}         

      {/* Renderiza um elemento condicionalmente com base no estado `carregando`
      Se `carregando` é `true`, exibe a mensagem "Carregando...."
      Caso contrário, exibe o componente `Button` com as propriedades `name='button 1'` e `active` */} 

      {/* {carregando ? <span>Carregando....</span> : <Button  name='button 1' active /> } */}

      {/* Renderiza um botão que alterna o estado `carregando` entre `true` e `false` quando clicado
      O texto do botão muda com base no estado `carregando`:
      - Se `carregando` é `true`, o texto do botão é "carregar site"
      - Se `carregando` é `false`, o texto do botão é "voltar para carregamento" */}
        {/*este botão fica no header */}
      <button onClick={() => setCarregando(!carregando)}>{carregando ? 'carrregar site': 'voltar para carregamento'}</button> 

       
      
    {/* // Elemento de vídeo com referência
    // O atributo `ref` é usado para associar o elemento de vídeo com a referência `video`
    // Isso permite que você acesse e manipule diretamente o DOM do elemento de vídeo usando `video.current` */}
      <video ref={video}/>

    {/* // Botão que aciona a função de callback
    // Quando o botão é clicado, a função `callBack` é chamada
    // A função `callBack` pode manipular o elemento de vídeo referenciado, como reproduzi-lo */}
      <button onClick={() => callBack()}>callback</button> 


      {/* Renderiza condicionalmente o conteúdo com base no estado `carregando`
      Se `carregando` é `true`, exibe a mensagem "carregando..."
      Caso contrário, exibe um bloco `div` contendo os seguintes elementos: */}
      {carregando ? <span>carregando...</span> : <div>

        {/* Botão para adicionar 1 ao valor do contador */}
        {/* Quando clicado, atualiza o estado `contador` incrementando-o em 1 */}
        <button onClick={()=> setContador(contador +1)}>adicionar</button>

        {/* Botão para subtrair 1 do valor do contador */}
        {/* Quando clicado, atualiza o estado `contador` decrementando-o em 1 */}
        <button onClick={()=> setContador(contador -1)}>subtrair</button>

        {/* Exibe o valor atual do contador */}
        <span>{contador}</span>  

      </div> } 

    

    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <header className="App-header">
        {/* Exibe o logo importado */}
        <img src={logo} className="App-logo" alt="logo" />
       
        {/* Renderiza três botões, cada um com propriedades diferentes */}
        <Button onClick={evento} name='button 1' active />
        <Button name='button 2' active={false} />
        <Button name='button 3' />
        
        {/* Texto explicativo */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
        {/* Link para a documentação do React */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Exporta o componente App para que possa ser utilizado em outras partes da aplicação
export default App;
