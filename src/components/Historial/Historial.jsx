import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';

import OpenModal from '../OpenModal/OpenModal';
import AddForm from '../AddForm/AddForm';

import './Historial.css';
import HistorialList from '../HistorialList/HistorialList';
import HistorialSelect from '../HistorialSelect/HistorialSelect';

function Historial() {
    const { modal, amounts, finalAmount, setAmounts, showAmounts, setShowAmounts, guardarCiclo, setCicloNombre, nombreCiclo, setNombreCiclo } = useContext(ModalContext);


    function deleteItem(id) {
        setAmounts(amounts.filter(el => el.id !== id))
    }
    function filterAmounts(e) {
        if (e.target.value !== 'nada') {
            setShowAmounts(amounts.filter(element => element.type === e.target.value))
        } else {
            setShowAmounts(amounts)
        }
    }

    return (
        <section className="main__historial">
            <div className="historial-cont">
                <h2>Historial</h2>
                <HistorialSelect filterAmounts={filterAmounts} />
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
                <h4 className="montoTotal">Monto final: ${finalAmount}</h4>
                <div className="main__historial-cont">
                    {finalAmount === 0 ? <p>Aún no agregaste nada...</p> : <></>}
                    <HistorialList showAmounts={showAmounts} deleteItem={deleteItem} />
                </div>
            </div>
            {modal ? <AddForm /> : <></>}
            <OpenModal />
        </section>
    )
}

export default Historial;