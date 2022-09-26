import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Listado = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userToken = localStorage.getItem('token')

        if (!userToken) {
            navigate('/')
        }
    })

    const handleClick = () => {
        localStorage.removeItem('token');
        navigate('/')
    }

    return (
        <>
            <h2>Hola, Soy el listado</h2>
            <button onClick={handleClick} >Cerrar Sesión</button>
        </>
    )
}

export default Listado;