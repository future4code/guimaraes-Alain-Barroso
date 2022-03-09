import React from 'react';
import CampoResposta from './CampoResposta';
import RespostaSelecionar from './RespostaSelecionar';
import styled from 'styled-components'


export default class Etapa1 extends React.Component{
    render ()   {
        return (
            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <CampoResposta questao = {"1. Qual o seu nome?"} />
                <CampoResposta questao = {"2. Qual sua idade?"} />
                <CampoResposta questao = {"3. Qual seu email?"} />
                <RespostaSelecionar
                questao = {"4. Qual a sua escolaridade?"}
                selecionar = {[ "Ensino médio incompleto",
                                "Ensino médio completo",
                                "Ensino superior incompleto",
                                "Ensino superior completo"
]}
                />
                

            </div> 
        )
    
    }

}
