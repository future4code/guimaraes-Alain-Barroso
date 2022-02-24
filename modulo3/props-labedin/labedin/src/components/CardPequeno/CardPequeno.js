import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <p>{ props.nome } {props.descricao}</p>
            </div>
        </div>
    )
}

export default CardPequeno;