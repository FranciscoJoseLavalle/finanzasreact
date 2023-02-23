import './Register.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function formSubmit(e) {
        e.preventDefault();
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
            .then(res => console.log(res))
            .catch(console.log)
            .finally(res => console.log(res))
    }

    return (
        <form className='form' onSubmit={(e) => formSubmit(e)}>
            <h2>Registrarse</h2>
            <div>
                <label htmlFor="name">Nombre de usuario</label>
                <input type="text" placeholder='Usuario' id='name' onChange={(e) => setFirst_name(e.target.value)} />
            </div>
            <div>
                <label htmlFor="name">Apellido del usuario</label>
                <input type="text" placeholder='Apellido' id='name' onChange={(e) => setLast_name(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Correo electrónico</label>
                <input type="text" placeholder='Email' id='email' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Nombre de usuario</label>
                <input type="text" placeholder='Contraseña' id='password' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button>Registrarse</button>
            <p>¿Ya estás registrado? <Link to='/login' className='link'>¡Iniciá sesión!</Link></p>
        </form>
    )
}

export default Register