import React from 'react'
import "./HomePage.css";
import SeletorPaginas from './SeletorPaginas.js'

export default class HomePage extends React.Component {


    render() {
        return <div className='HomePage'>
            <h1>Eai, o que vamos ouvir?</h1>
            <p>Selecione um menu para começar.</p>

            <SeletorPaginas />

        </div>
    }
  }