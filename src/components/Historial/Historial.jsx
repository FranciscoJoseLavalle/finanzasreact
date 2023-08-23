import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';

import OpenModal from '../OpenModal/OpenModal';
import AddForm from '../AddForm/AddForm';

import './Historial.css';
import HistorialList from '../HistorialList/HistorialList';
import HistorialSelect from '../HistorialSelect/HistorialSelect';
import Loader from '../Loader/Loader';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import useTitle from '../../customHooks/useTitle';

function Historial() {
    const { modal, amounts, finalAmount, setAmounts, showAmounts, setShowAmounts, guardarCiclo, setCicloNombre, nombreCiclo, setNombreCiclo, setMovimientos, movimientos, user, loading, setLoading, getFinalAmount, getMovements, API_URL } = useContext(ModalContext);

    useTitle("Historial")

    const [hi, setHi] = useState('')

    function deleteItem(id) {
        setLoading(true);
        const token = document.cookie.replace('token=', '')
        axios.delete(`${API_URL}/movements/${user.movimientos}`, { data: { token, id: id } }, {

        })
            .then(res => {
                if (res.data.status === 'success') {
                    getMovements(res.data.payload.movimiento)
                    setLoading(false);
                    // setMovimientos();
                }
                console.log(res);
            })
            .catch(console.log);
    }
    function filterAmounts(e) {
        setLoading(true);
        if (e.target.value !== 'nada') {
            console.log(e.target.value);
            axios.get(`${API_URL}/movements/${user.movimientos}/${e.target.value}`)
                .then(res => {
                    if (res.data.status === 'success') {
                        console.log(res.data.payload);
                        setLoading(false);
                        setMovimientos(res.data.payload);
                        getFinalAmount(res);
                    }
                    console.log(res);
                })
                .catch(console.log);
        } else {
            getMovements();
        }
    }

    useEffect(() => {
        let hour = moment().hours();
        if (hour >= 6 && hour <= 12) {
            setHi('Buenos días')
        } else if (hour > 20 || hour < 6) {
            setHi('Buenas noches')
        }
        if (hour >= 12 && hour <= 20) {
            setHi('Buenas tardes')
        }
        setLoading(true);
        const token = document.cookie.replace('token=', '')
        axios.post(`${API_URL}/pruebaDatos`, { token })
            .then(res => {
                if (res.data.status === 'success') {
                    getMovements2(res.data.payload.movimientos);
                    setLoading(false);
                }
                console.log(res);
            })
            .catch(console.log);
    }, [])

    const getMovements2 = (mid) => {
        axios.get(`${API_URL}/movements/${mid}`,)
            .then(res => {
                if (res.data.status === 'success') {
                    setLoading(false);
                    setMovimientos(res.data.payload);
                    getFinalAmount(res);
                }
                console.log(res);
            })
            .catch(console.log);
    }

    return (
        // <main className='main__provisorio'>
        <section className="main__historial">
            <div className='saludoContainer'>
                <p><b>¡{hi}</b>, {user.name}!</p>
            </div>
            <div className='simpleNavContainer'>
                <nav className='simpleNav'>
                    <Link to='/grafico'>
                        <img src="img/piechart.png" alt="Gráfico" />
                        <small>Gráfico</small>
                    </Link>
                    <Link to='/ciclos'>
                        <img src="img/cicle.png" alt="Ciclos" />
                        <small>Ciclos</small>
                    </Link>
                </nav>
            </div>
            <div className="historial-cont">
                <h2>Historial</h2>
                {/* <input type="text" placeholder='Buscar...' onChange={filterAmounts}/> */}
                <HistorialSelect filterAmounts={filterAmounts} type="type" />
                <HistorialSelect filterAmounts={filterAmounts} type="cathegory" />
                <button className='finalizarCiclo' onClick={() => setNombreCiclo(true)}>Finalizar ciclo</button>
                {nombreCiclo ?
                    <div className='nombreCiclo-cont'>
                        <div>
                            <label htmlFor="cicloNombre">Nombre del ciclo</label>
                            <input type='text' id='cicloNombre' onChange={(e) => setCicloNombre(e.target.value)} placeholder='Nombre del ciclo' />
                        </div>
                        <button onClick={guardarCiclo}>Guardar ciclo</button>
                    </div>
                    :
                    <></>}
                <h4 className="montoTotal">Monto final: $ {parseFloat(finalAmount).toLocaleString()}</h4>
                <div className="main__historial-cont">
                    {
                        loading
                            ? <Loader />
                            : <>{movimientos.length === 0
                                ? <p>Aún no agregaste nada...</p>
                                : <HistorialList showAmounts={movimientos} deleteItem={deleteItem} />}</>
                    }
                </div>
            </div>
            {modal ? <AddForm /> : <></>}
            <OpenModal />
        </section>
        // </main>
    )
}

export default Historial;