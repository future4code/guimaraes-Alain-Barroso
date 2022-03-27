
import React from 'react';
import {DivDetalhes, DivPerfil, FotoPerfil, DivDados, NomePerfil, IdadePerfil, Descricao} from './styled.js'

const Detalhes = (props) => {
  return (
    <DivDetalhes>
        <DivPerfil>
            <div img={props.perfil.photo} />
            <FotoPerfil src={props.perfil.photo} />
        </DivPerfil>
        <DivDados>
            <NomePerfil>{props.perfil.name},</NomePerfil>
            <IdadePerfil>{props.perfil.age}</IdadePerfil>
            <br></br>
            <Descricao>{props.perfil.bio}</Descricao>
        </DivDados>
    </DivDetalhes>
  );
}

export default Detalhes;