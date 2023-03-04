import './Login.css';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import useTitle from '../../customHooks/useTitle';

function Login({ connected }) {
    const { setIsLogged, isLogged, getUser, setUser, user, setLoading, loading } = useContext(ModalContext);
    useTitle('Iniciar sesión')

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [wrongUser, setWrongUser] = useState(false);

    useEffect(() => {
        const emailInput = document.querySelector('#email');
        if (emailInput) {
            emailInput.value = email;
        }
    }, [wrongUser])


    function formSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setWrongUser(false);
        const emailInput = document.querySelector('#email');
        const passwordInput = document.querySelector('#password');

        // EMAIL VALIDATION
        if (/^\s/.test(email) || email === '') {
            emailInput.classList.add('inputWrong');
        } else {
            emailInput.classList.remove('inputWrong');
        }
        // EMAIL VALIDATION

        // PASSWORD VALIDATION
        if (/^\s/.test(password) || password === '') {
            passwordInput.classList.add('inputWrong');
        } else {
            passwordInput.classList.remove('inputWrong');
        }
        // PASSWORD VALIDATION

        if (email !== '' && !(/^\s/.test(email)) && password !== '' && !(/^\s/.test(password))) {

            setLoading(true);
            let params = {
                "email": email,
                "password": password
            }
            axios.post("http://localhost:8080/api/sessions/login", params)
                .then(res => {
                    console.log(res.response);
                    if (res.data.status === "success") {
                        document.cookie = `token=${res.data.payload}; max-age=${60 * 24}; path=/; samesite=strict`
                        setIsLogged(true);
                        getUser();
                    }
                    setLoading(false);
                })
                .catch(res => {
                    console.log(res);
                    if (res.response.data.status === 'error') {
                        setLoading(false);
                        setWrongUser(true);
                        // setEmail('')
                        setPassword('')
                    }
                })
        } else {
            setLoading(false);
        }
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
        <>
            {loading
                ? <Loader />
                : <form className="form" onSubmit={(e) => formSubmit(e)}>
                    <h2>Iniciar sesión</h2>
                    {wrongUser ? <p>Algún dato ingresado es incorrecto. Vuelva a intentarlo.</p> : null}
                    <div>
                        <label htmlFor="email">Correo electrónico</label>
                        <input type="email" placeholder='Email' id='email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" placeholder='Contraseña' id='password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button>Iniciar sesión</button>
                    <p>¿No estás registrado? <Link to='/register' className='link'>¡Regístrate!</Link></p>
                </form>
            }
        </>
    )
}

export default Login