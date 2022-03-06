import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.ibb.co/xfpYvdz/IMG-5118-1.jpg" 
          nome="Alain Christian" 
          descricao="Olá, eu sou o Alain. Sou estudante de front e back-end pela Labenu. Souu apaixonado por comunicação, fotografia e tecnologia - aliás, amo animaizinhos também ;)"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="contato-email">
        <CardPequeno 
        imagem="https://i.pinimg.com/474x/d3/d3/bf/d3d3bfa56b7fed03b1c19501edc14292.jpg"
        nome="E-mail:"
        descricao="contato.alain@gmail.com"
        />

        <CardPequeno 
        imagem="https://www.pngmart.com/files/21/Alamat-PNG.png"
        nome="Endereço:"
        descricao="Rivne region, Klevan 33028"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Mixtel" 
          descricao="Analisando e organizando toda a papelada." 
        />
        
        <CardGrande 
          imagem="data:image/jpeg;base64,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" 
          nome="Studio Batel" 
          descricao="Mostrando o mundo através das lentes." 
        />

        <CardGrande 
          imagem="https://auroraboreal.com.br/wp-content/uploads/2019/03/cacador.png" 
          nome="MARCO BROTTO - Expedições" 
          descricao="Registrando e eternizando momentos." 
        />
      </div>

      

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" 
          texto="LinkedIn" 
        />        

        <ImagemButton 
          imagem="https://toppng.com/uploads/preview/black-instagram-logo-11549505060y8xxtph5nz.png" 
          texto="Instagram" 
        />        
      </div>
    </div>
  );
}

export default App;