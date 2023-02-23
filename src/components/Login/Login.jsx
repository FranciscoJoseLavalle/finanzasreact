import './Login.css';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { Link } from 'react-router-dom';

function Login() {
    const { setIsLogged, isLogged, getUser, setUser, user } = useContext(ModalContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function formSubmit(e) {
        e.preventDefault();
        let params = {
            "email": email,
            "password": password
        }
        axios.post("http://localhost:8080/api/sessions/login", params)
            .then(res => {
                document.cookie = `token=${res.data.payload}; max-age=${60 * 5}; path=/; samesite=strict`
                setIsLogged(true);
                getUser();
            })
            .catch(console.log)
    }

    const probarDatos = (e) => {
        e.preventDefault();
        const token = document.cookie.replace('token=', '')
        axios.post("http://localhost:8080/pruebaDatos", { token })
            .then(res => {
                console.log(res);
            })
            .catch(console.log);
    }

    return (
        <form className="form" onSubmit={(e) => formSubmit(e)}>
            <h2>Iniciar sesión</h2>
            <div>
                <label htmlFor="email">Correo electrónico</label>
                <input type="text" placeholder='Email' id='email' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input type="text" placeholder='Contraseña' id='password' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button>Iniciar sesión</button>
            <p>¿No estás registrado? <Link to='/register' className='link'>¡Regístrate!</Link></p>
        </form>
    )
}

export default Login