import React from "react";
import axios from "axios";


class Cadastro extends React.Component {
  state = {
    name: "",
    email: ""
  };

  editarNome = event => {
    const novoNome = event.target.value;

    this.setState({ name: novoNome });
  };

  editarEmail = event => {
    const novoEmail = event.target.value;

    this.setState({ email: novoEmail });
  };

  cadastrar = () => {
    const headers = {
      headers: {
        Authorization: "alain-christian-guimaraes"
      }
    };

    const body = {
      name: this.state.name,
      email: this.state.email
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        headers
      )
      .then(() => {
        alert(`Usuário ${this.state.name} cadastrado no sistema.`);
        this.setState({ name: "", email: "" });
      })
      .catch(err => {
        alert("Erro ao criar cadastro.");
        console.log(err);
      });
  };

  render() {
    return (
        <div>
            <input
            placeholder="Nome"
            type="text"
            value={this.state.name}
            onChange={this.editarNome}
            />


            <input
            placeholder="E-mail"
            type="email"
            value={this.state.email}
            onChange={this.editarEmail}
            />


            <button onClick={this.cadastrar}>Cadastrar usuário</button>
      </div>
    );
  }
}

export default Cadastro;
