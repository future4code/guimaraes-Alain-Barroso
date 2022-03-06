import React from 'react';
import styled from 'styled-components'
import CampoResposta from './CampoResposta';


export default class Etapa2 extends React.Component{
    render ()   {
        return (
            <div>
         
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
            <CampoResposta questao = {"5. Qual curso?"} />
            <CampoResposta questao = {"6. Qual a unidade de ensino?"} />
         
          </div>

        )
    }

}
