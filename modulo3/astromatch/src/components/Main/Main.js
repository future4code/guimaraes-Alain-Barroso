import React from 'react';
import axios from 'axios'
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {DivInicio, DivPerfil, FotoPerfil, DivDados, NomePerfil, IdadePerfil, Descricao, DivEscolhas, Botao, Coracao, keyframesCoracao, AnimacaoCoracao} from "./styled.js"

const Inicio = (props) => {

  const onClickCurtida = (curtiu) => {
    const body={
      id: props.perfil.id,
      choice: curtiu
    }

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daniel/choose-person", 
        body
      )
      .then(resposta=>{
        return props.recarrega();
      })
      .catch(error=>{
        return alert("Erro ao curtir, tente novamente.")
      })
  }

  if(props.perfil){
    return (
        <DivInicio>
          <DivPerfil>
              <FotoPerfil src={props.perfil.photo} alt={props.perfil.name} />
          
              <DivDados>
                <NomePerfil>{props.perfil.name},</NomePerfil>
                <IdadePerfil>{props.perfil.age}</IdadePerfil>
                <Descricao>{props.perfil.bio}</Descricao>
              </DivDados>
          
          </DivPerfil>
          <DivEscolhas>
            <Botao onClick={()=>onClickCurtida(false)}><CloseIcon /></Botao>
            <Botao onClick={()=>onClickCurtida(true)}><FavoriteIcon /></Botao>
          </DivEscolhas>
        </DivInicio>
    );
  }
  return(
    <DivInicio>
      <DivPerfil>
        {props.perfil===null 
          ? <h3>Fim da linha :(</h3> 
          : <Coracao><AnimacaoCoracao /></Coracao>
        }
      </DivPerfil>
    </DivInicio>
  )
}

export default Inicio;