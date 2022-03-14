import React from 'react'
import axios from 'axios'



import Biblioteca from './components/Biblioteca.js'
import CriarPlaylist from './components/CriarPlaylist.js'
import InsidePlaylist from './components/InsidePlaylist.js'
import Pesquisar from './components/Pesquisar.js'

import './SeletorPaginas.css'


export default class App extends React.Component {



  state = {
    telaAtual: "criar",
    playlistId: "",
  }


  trocarTela = () => {
    switch (this.state.telaAtual) {
      case "criar":
          return <CriarPlaylist />
      case "biblioteca":
          return <Biblioteca />
      case "playlist":
          return <InsidePlaylist />
      case "pesquisar":
          return <Pesquisar />
      default:
          return <CriarPlaylist />
          
          
    }
  }

  mudarTela = (nomeTela) => {
    this.setState({telaAtual: nomeTela})
  }


  render() {
    return <div>

      <button className='StyledButton' onClick={() => this.mudarTela("criar")}>Criar nova playlist</button>
      <button className='StyledButton' onClick={() => this.mudarTela("biblioteca")}>Suas playlists</button>
      <button className='StyledButton' onClick={() => this.mudarTela("pesquisar")}>Pesquisar</button>
      
      
      {this.trocarTela()}
      
      
      </div>

  }
}