
import React from "react"; // Importa o React, necessário para criar componentes.
import './style.css'; // Importa o arquivo de estilo CSS para estilizar o componente.

// Define um componente funcional chamado "Button" que recebe "luid" como argumento.
function Button(props) { 
    // function Button(props,onClick)
    return (
        <>
            {/* Renderiza um botão cujo className depende da propriedade 'active' de 'luid'.
                Se 'luid.active' for verdadeiro, a classe CSS aplicada será 'button'.
                Se 'luid.active' for falso, a classe CSS aplicada será 'disabladButton' (deve ser 'disabledButton').
                O texto do botão é definido pela propriedade 'name' de 'luid'. */}
            <button  onClick={props.onClick} className={props.active ? 'button' : 'disabladButton'}>{props.name}</button><br/>

           
            <br/>

            {/* Renderiza uma mensagem simples após o botão. */}
            <span>seus dados estão salvo com nosco</span>
        </>
    );
}

export default Button;
