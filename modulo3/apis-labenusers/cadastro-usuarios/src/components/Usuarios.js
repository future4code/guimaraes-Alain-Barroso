import React from "react";
import styled from "styled-components";
import axios from "axios";
import DadosUsuarios from "./DadosUsuarios";

const iconeDeletar = styled.span`
  color: red;
  cursor: pointer;
`;

const axiosConfig = {
  headers: {
    Authorization: "severo"
  }
};

class Usuarios extends React.Component {
  state = {
    usuarios: [],
    pagina: "usuarios",
    userId: "",
    nome: ""
  };

  componentDidMount() {
    this.filtrarUser();
  }

  filtrarUser = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosConfig
      )
      .then(response => {
        this.setState({ usuarios: response.data });
      });
  };

  deletarUsuario = userId => {
    if (window.confirm("Tem certeza que deseja excluir?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
          axiosConfig
        )
        .then(() => {
          alert("Usuário excluido com sucesso!");
          this.filtrarUser();
        })
        .catch(e => {
          alert("Erro ao excluir o usuario.");
        });
    }
  };

  trocarPagina = userId => {
    if (this.state.pagina === "usuarios") {
      this.setState({ pagina: "DadosUsuarios", userId: userId });
    } else {
      this.setState({ pagina: "usuarios", userId: "" });
    }
  };

  editarNome = event => {
    const novoNome = event.target.value;

    this.setState({ nome: novoNome });
  };

  buscarUser = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.name
        }& email = ` , 
        axiosConfig
      )
      .then(response => {
        this.setState({ usuarios: response.data });
      })
      .catch(error => {
        alert("Erro ao criar o usuário");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.state.pagina === "usuarios" ? (
          <div>
            <ul>
              {this.state.usuarios.length === 0 && <div>Carregando...</div>}
              {this.state.usuarios.map(user => {
                return (
                  <li>
                    <span onClick={() => this.trocarPagina(user.id)}>
                      {user.nome}
                    </span>
                    <iconeDeletar
                      onClick={() => this.deletarUsuario(user.id)}
                    >
                      X
                    </iconeDeletar>
                  </li>
                );
              })}
            </ul>
            <hr />
            <h4>Procurar usuário</h4>
            <input
              placeholder="Nome que deseja procurar"
              type="text"
              value={this.state.nome}
              onChange={this.editarNome}
            />
            <button onClick={this.buscarUser}>Salvar</button>
          </div>
        ) : (
          <DadosUsuarios userId={this.state.userId} trocarPagina={this.trocarPagina} />
        )}
      </div>
    );
  }
}

export default Usuarios;
