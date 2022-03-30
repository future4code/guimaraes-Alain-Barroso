import React from 'react'

const ApplicationFormPage = () => {
    return (
        <div>
                <h1>Formulário para inscrição de viagem</h1>
                <h3>TÍTULO DA VIAGEM SELECIONADA</h3>
                <p>INFORMAÇÕES RÁPIDAS SOBRE A VIAGEM</p>
                <input
                    placeholder={"Nome"}
                />
                <input
                    placeholder={"Idade"}
                />
                <input
                    placeholder={"Texto de Candidatura"}
                />
                <input
                    placeholder={"Profissão"}
                />
                <select
                    placeholder={"País"}>
                </select>
                
                    <button>Abortar inscrição</button>
                    <button>Enviar</button>
            </div>
    )
}

export default ApplicationFormPage
