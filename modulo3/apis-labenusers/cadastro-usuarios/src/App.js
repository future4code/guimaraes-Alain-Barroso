import React from "react";
import Cadastro from "./components/Cadastro";
import Usuarios from "./components/Usuarios";

export default class App extends React.Component {
  state = {
    pagina: "paginaCadastro"
  };

  mudarPagina = () => {
    if (this.state.pagina === "paginaCadastro") {
      this.setState({ pagina: "usuariosCadastrados" });
    } else {
      this.setState({ pagina: "paginaCadastro" });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.mudarPagina}>Trocar de pagina</button>
        {this.state.pagina === "paginaCadastro" ? <Cadastro /> : <Usuarios />}
      </div>
    );
  }
}