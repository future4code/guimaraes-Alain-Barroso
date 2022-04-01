import React  from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate()

    const goToListTripsPage = () => (
        navigate('/list')

    )
    
    return (
        <div>
            <h1>LabeX</h1>
                <button onClick={goToListTripsPage}>Ver Viagens</button>
                <button>Faz parte da tripulação? Faça o Login</button>
        </div>
    )
}

export default HomePage