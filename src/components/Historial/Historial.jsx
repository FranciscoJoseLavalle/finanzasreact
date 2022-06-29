import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';

import OpenModal from '../OpenModal/OpenModal';
import AddForm from '../AddForm/AddForm';

import './Historial.css';
import HistorialList from '../HistorialList/HistorialList';
import HistorialSelect from '../HistorialSelect/HistorialSelect';

function Historial() {
    const { modal, amounts, finalAmount, setAmounts } = useContext(ModalContext);

    function deleteItem(id) {
        setAmounts(amounts.filter(el => el.id !== id))
    }
    function filterAmounts(e) {
        console.log(e.target.value);
        let amountsNow = amounts;
        setAmounts(amountsNow.filter(el => el.type === e.target.value))
    }

    return (
        <section className="main__historial">
            <div className="historial-cont">
                <h3>Historial</h3>
                <HistorialSelect filterAmounts={filterAmounts}/>
                <h4 className="montoTotal">Monto final: ${finalAmount}</h4>
                <div className="main__historial-cont">
                    { finalAmount === 0 ? <p>Aún no agregaste nada...</p> : <></> }
                    <HistorialList amounts={amounts} deleteItem={deleteItem}/>
                </div>
            </div>
            {modal ? <AddForm /> : <></>}
            <OpenModal />
        </section>
    )
}

export default Historial;