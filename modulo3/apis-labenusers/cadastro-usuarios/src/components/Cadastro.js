import React from "react";
import axios from "axios";


class Cadastro extends React.Component {
  state = {
    nome: "",
    email: ""
  };

  editarNome = event => {
    const novoNome = event.target.value;

    this.setState({ nome: novoNome });
  };

  editarEmail = event => {
    const novoEmail = event.target.value;

    this.setState({ email: novoEmail });
  };

  cadastrar = () => {
    const axiosConfig = {
      headers: {
        Authorization: "severo"
      }
    };

    const body = {
        nome: this.state.nome,
      email: this.state.email
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        axiosConfig
      )
      .then(() => {
        alert(`Usuário ${this.state.nome} cadastrado no sistema.`);
        this.setState({ nome: "", email: "" });
      })
      .catch(error => {
        alert("Erro ao criar cadastro.");
        console.log(error);
      });
  };

  render() {
    return (
        <div>
            <input
            placeholder="Nome"
            type="text"
            value={this.state.nome}
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
