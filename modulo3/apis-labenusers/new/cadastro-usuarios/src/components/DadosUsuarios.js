import React from "react";
import styled from "styled-components";
import axios from "axios";

const headers = {
  headers: {
    Authorization: "alain-christian-guimaraes"
  }
};

class DadosUsuarios extends React.Component {
  state = {
    dadosCadastrados: {},
    editar: "botaoEditar",
    name: "",
    email: ""
  };

  componentDidMount() {
    this.getDadosCadastrados();
  }

  getDadosCadastrados = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${
          this.props.userId
        }`,
        headers
      )
      .then(response => {
        this.setState({ dadosCadastrados: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  editarInformacoes = () => {
    if (this.state.editar === "botaoEditar") {
      this.setState({ editar: "editarUsuario" });
    } else {
      this.setState({ editar: "botaoEditar" });
    }
  };

  editarNome = event => {
    const novoNome = event.target.value;

    this.setState({ name: novoNome });
  };

  editarEmail = event => {
    const novoEmail = event.target.value;

    this.setState({ email: novoEmail });
  };

  cadastrarUsuario = () => {
    const body = {
      name: this.state.name,
      email: this.state.email
    };

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${
          this.props.userId
        }`,
        body,
        headers
      )
      .then(() => {
        this.setState({ name: "", email: "" });
        this.getDadosCadastrados();
        this.editarInformacoes();
        alert(`Usuário ${this.state.name} editado com sucesso!`);
      })
      .catch(error => {
        alert("Erro ao criar o usuário");
        console.log(error);
      });
  };

  render() {
    const editar =
      this.state.editar === "botaoEditar" ? (
        <button onClick={this.editarInformacoes}>Editar usuário</button>
      ) : (
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
          <button onClick={this.cadastrarUsuario}>Salvar edição</button>
        </div>
      );

    return (
      <div>
        <div>
          <p>{this.state.dadosCadastrados.name}</p>
          <p>{this.state.dadosCadastrados.email}</p>
        </div>
        <div>{editar}</div>
        <hr />
        <button onClick={this.props.mudarPagina}>
          Voltar para lista de usuários
        </button>
      </div>
    );
  }
}

export default DadosUsuarios;
