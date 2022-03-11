import React from 'react'
import CriarPlaylist from "./components/CriarPlaylist.js"
import Biblioteca from "./components/Biblioteca.js"
import ListaPlaylist from "./components/ListaPlaylist.js"
import Pesquisar from './components/Pesquisar.js'

export default class App extends React.Component {

  state = {
    telaAtual: "criar"

  }



  trocarTela = () => {
    switch (this.state.telaAtual) {
      case "criar":
          return <CriarPlaylist />
      case "biblioteca":
          return <Biblioteca />
      case "lista":
          return <ListaPlaylist />
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
      
      {this.trocarTela()}
      
      <button onClick={() => this.mudarTela("criar")}>Criar nova playlist</button>
      <button onClick={() => this.mudarTela("biblioteca")}>Suas playlists</button>
      <button onClick={() => this.mudarTela("pesquisar")}>Pesquisar</button>

      </div>

  }
}