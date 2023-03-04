import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';
import useTitle from '../../customHooks/useTitle';

import CiclosList from '../CiclosList/CiclosList';
import Loader from '../Loader/Loader';
import './Ciclos.css';

function Ciclos() {
    const { user, setCiclos, ciclos, setLoading, loading } = useContext(ModalContext);
    useTitle('Ciclos')

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:8080/ciclos/${user.ciclos}`)
            .then(res => {
                if (res.data.status === "success") {
                    setCiclos(res.data.payload.ciclos)
                    setLoading(false);
                }
            })
            .catch(console.log);

    }, [])

    function deleteCiclo(date) {
        setLoading(true);
        const token = document.cookie.replace('token=', '')
        axios.delete(`http://localhost:8080/ciclos/${user.ciclos}`, { data: { token, date: date } }, {

        })
            .then(res => {
                if (res.data.status === 'success') {
                    setCiclos(res.data.payload.ciclos);
                    setLoading(false);
                    // setMovimientos();
                }
            })
            .catch(console.log);
    }


    return (
        <main className='main__ciclos'>
            <section>
                <h2 className='ciclos__title'>Ciclos</h2>
                {loading
                    ? <Loader />
                    : <CiclosList ciclos={ciclos} deleteCiclo={deleteCiclo} />
                }
            </section>
        </main>
    )
}

export default Ciclos;