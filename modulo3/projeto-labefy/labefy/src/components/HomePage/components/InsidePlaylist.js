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

export default class InsidePlaylist extends React.Component {
    
    state = {
        playlistId: "",
    }
    
    componentDidMount() {
        this.getPlaylistTracks();
      }
    
    getPlaylistTracks = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistId}/tracks`
        const headers = {
          headers: {
            Authorization: "alain-christian-guimaraes"
          }
        };
        const body = {
          tracks: this.state.musicas
        };
    
        axios.get(url, headers, body)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        } )

      };
 

      
    render() {

        return <div>
            <h4>InsidePlaylist</h4>
        </div>
  
    }
  }
