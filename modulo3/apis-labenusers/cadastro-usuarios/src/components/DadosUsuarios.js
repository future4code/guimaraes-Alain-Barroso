import React from "react";
import styled from "styled-components";
import axios from "axios";

const axiosConfig = {
  headers: {
    Authorization: "severo"
  }
};

class DadosUsuarios extends React.Component {
  state = {
    dadosCadastrados: {},
    editar: "botaoEditar",
    nome: "",
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
        axiosConfig
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

    this.setState({ nome: novoNome });
  };

  editarEmail = event => {
    const novoEmail = event.target.value;

    this.setState({ email: novoEmail });
  };

  cadastrarUsuario = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email
    };

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${
          this.props.userId
        }`,
        body,
        axiosConfig
      )
      .then(() => {
        this.setState({ nome: "", email: "" });
        this.getDadosCadastrados();
        this.editarInformacoes();
        alert(`Usuário ${this.state.nome} editado com sucesso!`);
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
            value={this.state.nome}
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
          <p>{this.state.dadosCadastrados.nome}</p>
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
