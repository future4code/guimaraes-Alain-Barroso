import React from "react";
import axios from "axios";

import "../SeletorPaginas.css"


class CriarPlaylist extends React.Component {
  state = {
    name: "",
  };

  onChangeNome = event => {
    const novoNome = event.target.value;

    this.setState({ name: novoNome });
  };

  criar = () => {
    const headers = {
      headers: {
        Authorization: "alain-christian-guimaraes"
      }
    };

    const body = {
      name: this.state.name,
    };

    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        headers
      )
      .then(() => {
        alert(`Playlist ${this.state.name} já disponível na sua biblioteca.`);
        this.setState({ name: ""});
      })
      .catch(err => {
        alert("Erro ao criar a playlist :(");
        console.log(err);
      });
  };

  render() {
    return (
        <div>
            <input className="TextBox"
            placeholder="Nome da playlist"
            type="text"
            value={this.state.name}
            onChange={this.onChangeNome}
            />
            <button className="CreateButton" onClick={this.criar}>Criar</button>
      </div>
    );
  }
}

export default CriarPlaylist;