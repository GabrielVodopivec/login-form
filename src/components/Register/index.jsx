import { useState } from "react";
import Form from "../Form";
import Swal from 'sweetalert2';

const Register = () => {

    const [userInfo, setUserInfo] = useState({
        nombre: "",
        email: "",
        password: "",
        password2: ""
    })


    const handleChange = (event) => {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if (userInfo.nombre === "" || userInfo.password === "") {
            return alert("Email o Contraseña están vacios");
        }

        if (userInfo.email !== "" && !emailRegex.test(userInfo.email)) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No es un email válido'
              })
        }

        if (userInfo.password !== userInfo.password2) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Las contraseñas no coinciden'
              })
        }

        Swal.fire({
            title: 'Usuario registrado exitosamente',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    };


    return (
        <div className="login">
            <Form 
                handleSubmit={handleSubmit} 
                onChange={handleChange}
                title={"Formulario de Registro"}
                inputs = {[{
                        id: "nameInputRegister",
                        name: "nombre",
                        value: userInfo.nombre,
                        type: "text",
                        label: "Nombre",
                        placeholder: "Ingrese su nombre"
                    }, {
                        id: "emailInputRegister",
                        name: "email",
                        value: userInfo.email,
                        type: "text",
                        label: "Email",
                        placeholder: "Ingrese su email"
                    }, {
                        id: "passwordInputRegister",
                        name: "password",
                        value: userInfo.password,
                        type: "password",
                        label: "Contraseña",
                        placeholder: "Ingrese su contraseña"
                    }, {
                        id: "checkPasswordInputRegister",
                        name: "password2",
                        value: userInfo.password2,
                        type: "password",
                        placeholder: "Vuelva a ingresar su contraseña"
                    }, {
                        id: "submit",
                        type: "submit",
                        text: "registrarse"
                    }
                ]}    
            />
        </div>
    );
}

export default Register;