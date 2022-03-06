import React from "react";

export default function RespostaSelecionar(props) {
  return (
    <div>
      <p>{props.questao}</p>

      <select>{props.selecionar.map(opcao => (
          <option value={opcao}>{opcao}</option>
        ))}
      </select>
    </div>
  );
}