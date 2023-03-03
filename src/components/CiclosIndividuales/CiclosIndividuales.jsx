import { useContext, useEffect } from 'react';
import { ModalContext } from '../../context/ModalContext';

import { useParams, Link } from 'react-router-dom';

import './CiclosIndividuales.css';
import axios from 'axios';
import Loader from '../Loader/Loader';

function CiclosIndividuales() {
    let { showCiclo } = useParams();
    const { ciclos, setCiclos, user, loading, setLoading } = useContext(ModalContext);
    useEffect(() => {
        setLoading(true);
        if (user.ciclos) {
            axios.get(`http://localhost:8080/ciclos/${user.ciclos}`)
                .then(res => {
                    console.log(res);
                    if (res.data.status === "success") {
                        setCiclos(res.data.payload.ciclos)
                        setLoading(false);
                    }
                })
                .catch(console.log);
        }
    }, [user])
    console.log(ciclos);
    return (
        <>
            {loading
                ? <Loader />
                : <main>
                    <Link to='/ciclos' className='volver'>Volver a ciclos</Link>
                    <h3 className='cicloName'>{ciclos.map(ciclo => {
                        if (ciclo.date == showCiclo) {
                            return ciclo.name;
                        }
                    })}</h3>
                    <ul className='ciclosContainer'>
                        {
                            ciclos.find(ciclo => ciclo.date == showCiclo)
                                ? <>
                                    {ciclos.find(ciclo => ciclo.date == showCiclo).movimientos.map(elemento =>
                                        <li key={elemento.date}>
                                            <p>{elemento.detail} - {elemento.type}</p>
                                            <p>${elemento.amount}</p>
                                            <small>{elemento.date}</small>
                                        </li>
                                    )}
                                </>
                                : null
                        }
                    </ul>
                </main>}

        </>
    )
}

export default CiclosIndividuales;