import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },

      {
        nomeUsuario: "alain",
        fotoUsuario: "https://picsum.photos/49/50",
        fotoPost: "https://picsum.photos/199/150"
      },

      {
        nomeUsuario: "christian",
        fotoUsuario: "https://picsum.photos/51/50",
        fotoPost: "https://picsum.photos/201/150"
      }
    
    ],

    valorInputUser: "",
    valorInputFotoPerfil: "",
    valorInputPost: ""
    
  };



  publicar = () => {
    const novaPubli = {
      usuario: this.state.valorInputUser,
      fotoPerfil: this.state.valorInputFotoPerfil,
      fotoPost: this.state.valorInputPost,
      };

    const novoPosts = [...this.state.posts, novaPubli];
    this.setState({ posts: novoPosts });
  };

  onChangeInputUser = (event) => {
    this.setState({ valorInputUser: event.target.value });
  };

  onChangeInputFotoPerfil = (event) => {
    this.setState({ valorInputFotoPerfil: event.target.value });
  };

  onChangeInputPost = (event) => {
    this.setState({ valorInputPost: event.target.value });
  };
  


  render() {
    const arrayPostagens = this.state.posts.map((postagem) => {
      return (
        <Post
          nomeUsuario={postagem.nomeUsuario}
          fotoUsuario={postagem.fotoUsuario}
          fotoPost={postagem.fotoPost}
        />
      );
    });

    

    return (
       <MainContainer>
        <div>{arrayPostagens}</div>

        <div>
          <input
            value={this.state.valorInputUser}
            onChange={this.onChangeInputUser}
            placeholder={"Usuario"}
          />
          <input
            value={this.state.valorInputFotoPerfil}
            onChange={this.onChangeInputFotoPerfil}
            placeholder={"Foto Perfil"}
          />

          <input
            value={this.state.valorInputPost}
            onChange={this.onChangeInputPost}
            placeholder={"Foto Post"}
          />
          <button onClick={this.publicar}>Adicionar</button>
        </div>

       </MainContainer>
    );
  }
}

export default App;