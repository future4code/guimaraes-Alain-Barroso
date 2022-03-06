import React from "react";
import styled from 'styled-components'

export default function CampoResposta(props) {
  return (
    <div>

      <p>{props.questao}</p>
      <input onChange={props.onChange} value={props.value} />
    
    </div>
  
  );

}