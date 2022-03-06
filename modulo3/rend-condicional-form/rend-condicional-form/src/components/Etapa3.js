import React from 'react';
import styled from 'styled-components'
import CampoResposta from './CampoResposta';
import RespostaSelecionar from './RespostaSelecionar';


export default class Etapa3 extends React.Component{
    render ()   {
        return (
            <div>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <CampoResposta
              questao = {"5. Por que você não terminou um curso de graduação?"}
            />


            <RespostaSelecionar
              questao = {"6. Você fez algum curso complementar?"}
              selecionar = {[
                  "Nenhum", "Curso técnico", "Curso de inglês"
                ]}

            />


          </div>
        )
    
    }

}
