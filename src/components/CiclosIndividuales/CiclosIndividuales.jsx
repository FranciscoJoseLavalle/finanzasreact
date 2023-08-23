import { useContext, useEffect } from 'react';
import { ModalContext } from '../../context/ModalContext';

import { useParams, Link } from 'react-router-dom';

import './CiclosIndividuales.css';
import axios from 'axios';
import Loader from '../Loader/Loader';
import moment from 'moment';

function CiclosIndividuales() {
    let { showCiclo } = useParams();
    const { ciclos, setCiclos, user, loading, setLoading, API_URL } = useContext(ModalContext);
    useEffect(() => {
        setLoading(true);
        if (user.ciclos) {
            axios.get(`${API_URL}/ciclos/${user.ciclos}`)
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
                    <h3 className='cicloName'>
                        {ciclos.map(ciclo => {
                            if (ciclo.date == showCiclo) {
                                return ciclo.name;
                            }
                        })}
                    </h3>
                    <ul className='ciclosContainer'>
                        {
                            ciclos.find(ciclo => ciclo.date == showCiclo)
                                ? <>
                                    {ciclos.find(ciclo => ciclo.date == showCiclo).movimientos.map(elemento =>
                                        <li key={elemento.date}>
                                            <p><b>{elemento.detail}</b> - {elemento.type}</p>
                                            <p style={{
                                                color: elemento.type === "Ingreso" ? "green" : "#222",
                                                fontWeight: 600
                                            }}>$ {parseFloat(elemento.amount).toLocaleString()}</p>
                                            <small>{moment(elemento.date).format('DD/MM/YYYY H:mm:ss')}</small>
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