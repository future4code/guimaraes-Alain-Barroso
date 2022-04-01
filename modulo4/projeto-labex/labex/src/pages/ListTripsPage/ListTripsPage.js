import React from 'react'
import { useNavigate } from 'react-router-dom'

const ListTripsPage = () => {
    const navigate = useNavigate()

    const goToHomePage = () => (
        navigate('/')

    )
    return (
        <div>
            <button onClick={goToHomePage}>Início</button>
            <button>Faz parte da tripulação? Faça o Login</button>
            {/* <button>Criar conta</button> */}
                
            <h3>PRÓXIMOS DESTINOS</h3>
            <p>*CARD VIAGEM*</p>
            <p>TÍTULO DA VIAGEM</p>
            <button>Inscrever-se nesta viagem</button>
        </div>
    )
}

export default ListTripsPage