import React from "react";
import Cadastro from "./components/Cadastro";
import Usuarios from "./components/Usuarios";

export default class App extends React.Component {
  state = {
    pagina: "cadastro"
  }

  mudarPagina = () => {
    if (this.state.pagina === "cadastro") {
      this.setState({ pagina: "usuarios" })
    } else {
      this.setState({ pagina: "cadastro" })
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.mudarPagina}>Trocar de pagina</button>
        {this.state.pagina === "cadastro" ? <Cadastro /> : <Usuarios />}
      </div>
    )
  }
}