import React from 'react';
import styled from 'styled-components'
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

export default class App extends React.Component {
  
state = {
  etapa: 1,
}  
  
randerizaEtapa = () => {
  switch (this.state.etapa) {
    case 1:
      return <Etapa1 />;
    case 2:
      return <Etapa2 />;
    case 3:
      return <Etapa3 />;
    case 4:
      return <Final />;
    default:
      return <Final />;
  }
};

irParaProximaEtapa  = () => {
  this.setState({ etapa: this.state.etapa + 1 });
};
  
  render () {
    
    // let paginaPergunta = <h1>Pagina Erro</h1>
    // if (this.state.etapa = 1){
    //   pagina = <Etapa1 />
    // } else {

    // }
    
    
    
    return (
      <div>
        {this.randerizaEtapa()}
        <br />
        {this.state.etapa !== 4 && (
          <button onClick={this.irParaProximaEtapa }>Próxima Etapa</button>

        )}
      </div>
    );

  }
}
