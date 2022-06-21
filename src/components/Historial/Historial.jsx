import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';

import OpenModal from '../OpenModal/OpenModal';
import AddForm from '../AddForm/AddForm';

import './Historial.css';
import HistorialList from '../HistorialList/HistorialList';

function Historial() {
    const { modal, setModal, amounts, finalAmount, setAmounts, setEditItem, editItem } = useContext(ModalContext);

    function deleteItem(id) {
        setAmounts(amounts.filter(el => el.id !== id))
    }
    // function edit(id) {
    //     setModal(true);
    //     setEditItem(true);
    //     console.log(id)
    // }

    return (
        <section className="main__historial">
            <div className="historial-cont">
                <h3>Historial</h3>
                <select className="main__historial-select">
                    <option value="nada">Ver por todos</option>
                    <option value="ingresos">Ingresos</option>
                    <option value="egresos">Egresos</option>
                </select>
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