import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';

import OpenModal from '../OpenModal/OpenModal';
import AddForm from '../AddForm/AddForm';

import './Historial.css';
import HistorialList from '../HistorialList/HistorialList';

function Historial() {
    const { modal, amounts, finalAmount } = useContext(ModalContext);

    // useEffect(() => {<
    //     setIngresos(amounts.filter(el => el.type === 'Ingreso').map(element => parseFloat(element.amount)));
    //     setEgresos(amounts.filter(el => el.type === 'Egreso').map(element => parseFloat(element.amount)));
    //     setFinalAmount(ingresos.reduce((anterior, siguiente) => anterior + siguiente, 0) - egresos.reduce((anterior, siguiente) => anterior + siguiente, 0))
    //     console.log(finalAmount);
    // }, [amounts])>
    
    console.log(amounts);


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
                    <HistorialList amounts={amounts} />
                </div>
            </div>
            {modal ? <AddForm /> : <></>}
            <OpenModal />
        </section>
    )
}

export default Historial;
// setPrecioTotal(cartList.map(element => element.cantidad * element.precio).reduce((anterior, siguiente) => anterior + siguiente, 0))