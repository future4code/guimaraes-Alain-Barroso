import axios from 'axios';
import React from 'react'

import styled from 'styled-components'

const CardPlaylist = styled.div`
    justify-self: center;
    color: white;
    padding: 5px;
    margin: 5px;
    width: 300px;
    &:hover{
        color: #00eeff;
        cursor: pointer;
    }
`

export default class Biblioteca extends React.Component {
    
    state = {
        lista: [],
    }
    
    componentDidMount (){
        this.pegarPlaylist()
    }
    
    pegarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const headers = {
          headers: {
            Authorization: "alain-christian-guimaraes"
          }
        };
        const body = {
          list: this.state.lista
        };
    
        axios.get(url, headers, body)
        .then((res)=>{
            this.setState({lista: res.data.result.list})
        })
        .catch((err)=>{
            console.log(err)
        } )

      };
 

      
    render() {

        const todasPlaylists = this.state.lista.map((playlist) => {
            return <CardPlaylist id={playlist.id}>{playlist.name}</CardPlaylist>
        })
        return <div>
            <h4>Biblioteca</h4>
            {todasPlaylists}
        </div>
  
    }
  }
