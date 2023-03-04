import './Register.css';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalContext } from '../../context/ModalContext';
import Loader from '../Loader/Loader';
import useTitle from '../../customHooks/useTitle';

function Register() {
    const { loading, setLoading } = useContext(ModalContext);

    useTitle('Registrarse')

    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [userExist, setUserExist] = useState(false);

    function formSubmit(e) {
        e.preventDefault();
        setUserExist(false);

        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        const firstNameInput = document.querySelector('#name');
        const lastNameInput = document.querySelector('#last_name');
        const emailInput = document.querySelector('#email');
        const passwordInput = document.querySelector('#password');

        // FIRST NAME VALIDATION
        if (/^\s/.test(first_name) || first_name === '') {
            firstNameInput.classList.add('inputWrong');
        } else {
            firstNameInput.classList.remove('inputWrong');
        }
        // FIRST NAME VALIDATION

        // LAST NAME VALIDATION
        if (/^\s/.test(last_name) || last_name === '') {
            lastNameInput.classList.add('inputWrong');
        } else {
            lastNameInput.classList.remove('inputWrong');
        }
        // LAST NAME VALIDATION

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

        if (first_name !== '' && !(/^\s/.test(first_name))
            && last_name !== '' && !(/^\s/.test(last_name))
            && email !== '' && !(/^\s/.test(email))
            && password !== '' && !(/^\s/.test(password))) {

            setLoading(true);
            let params = JSON.stringify({
                "first_name": first_name,
                "last_name": last_name,
                "email": email,
                "password": password
            })
            axios.post("http://localhost:8080/api/sessions/register", params, {
                "headers": {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    console.log(res);
                    setLoading(false);
                    if (res.data.status === "success") {
                        window.location.replace("/")
                    }
                })
                .catch(res => {
                    console.log(res);
                    if (res.response.data.status === 'error') {
                        setLoading(false);
                        setUserExist(true);
                        setFirst_name('')
                        setLast_name('')
                        setEmail('')
                        setPassword('')
                    }
                })
        }
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    }

    return (
        <>
            {
                loading
                    ? <Loader />
                    : <form className='form' onSubmit={(e) => formSubmit(e)}>
                        <h2>Registrarse</h2>
                        {userExist ? <p>El usuario ya existe, cambie el correo electrónico.</p> : null}
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" placeholder='Usuario' id='name' onChange={(e) => setFirst_name(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="last_name">Apellido</label>
                            <input type="text" placeholder='Apellido' id='last_name' onChange={(e) => setLast_name(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" placeholder='Email' id='email' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" placeholder='Contraseña' id='password' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button>Registrarse</button>
                        <p>¿Ya estás registrado? <Link to='/login' className='link'>¡Iniciá sesión!</Link></p>
                    </form>
            }
        </>

    )
}

export default Register