import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../services";
import Swal from "sweetalert2";
import Form from "../Form";

function Login() {

    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const {email, password} = userInfo;
        const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if (email === "" || password === "") {
            return alert("Email o Contraseña están vacios");
        }

        if (email !== "" && !emailRegex.test(email)) {
            return alert("No es un email valido");
        }

        // challenge@alkemy.org
        // react

        getToken(email, password)
        .then(() => {
            const token = localStorage.getItem('token');
            if (token) {
                navigate('/listado')
            }
        })
        .catch((error) => {
            console.log(error)
            Swal.fire({
                title: error.response.data.error
            })
        })
    };

    const inputs = [{
        id: "emailInput",
        name: "email",
        value: userInfo.email,
        type: "text",
        label: "Email",
        placeholder: "Ingrese su email"
    }, {
        id: "passwordInput",
        name: "password",
        value: userInfo.password,
        type: "password",
        label: "Contraseña",
        placeholder: "Ingrese su contraseña"
    }, {
        id: "submit",
        type: "submit",
        text: "Ingresar"
    }, {
        id: "button",
        type: "button",
        text: "Registrarse"
    }
]


    return (
        <div className="login">
            <Form 
                handleSubmit={handleSubmit}
                onChange={handleChange}
                title = {"Formulario de Login"}
                inputs = {inputs} />
        </div>
    );
}

export default Login;
