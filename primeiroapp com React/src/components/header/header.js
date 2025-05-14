
import React from "react"; // Importa o React, necessário para criar componentes.
import './header.css';
// Define um componente funcional chamado "Header".
function Header() {

    return (
        <div className='header'>
            {/* Cria um elemento de navegação (<nav>) para abrigar os links de navegação. */}
            <nav>
                {/* Cria uma lista não ordenada (<ul>) que contém itens de navegação. */}
                <ul>
                    {/* Cada <li> representa um item na lista de navegação. */}
                    <li>Nome</li>
                    <li>Fotos</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </div>
    );
}

// Exporta o componente "Header" para que ele possa ser usado em outros arquivos.
export default Header;
