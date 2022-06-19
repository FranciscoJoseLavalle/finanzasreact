import { useState, useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

import './AddForm.css';

function AddForm() {
    const { setAmounts, amounts } = useContext(ModalContext);

    const [detail, setDetail] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('nada');

    class Montos {
        constructor(detail, amount, type) {
            this.detail = detail;
            this.amount = amount;
            this.type = type;
            this.id = Date.now();
        }
    }

    function add(e) {
        e.preventDefault();

        const montoInput = document.querySelector('.inputMonto');
        const detalleInput = document.querySelector('.inputDetalle');
        const select = document.querySelector('.main__form-select');
        const form = document.querySelector('.main__form');

        if (amount < 0.01 || amount === '' ) {
            montoInput.classList.add('inputWrong');
        } else {
            montoInput.classList.remove('inputWrong');
        }
        if (/^\s/.test(detail) || detail === '') {
            detalleInput.classList.add('inputWrong');
        } else {
            detalleInput.classList.remove('inputWrong');
        }
        if (type === 'nada') {
            select.classList.add('inputWrong');
        } else {
            select.classList.remove('inputWrong');
        }
        if (amount > 0.01 && amount !== '' && detail !== '' && !(/^\s/.test(detail)) && type !== 'nada') {
            let monto = new Montos(detail, amount, type);
            setAmounts([
                ...amounts,
                monto
            ]);
            form.reset();
        }
    }

    return (
        <main className="main display">
            <div className="main-cont">
                <button className="closeModal">x</button>
                <form className="main__form">
                    <div className="main__form-inputCont main__form-cont">
                        <label htmlFor="monto">Ingresa un detalle</label>
                        <input type="text" placeholder="Detalle" className="inputDetalle input" maxLength="15" onChange={(e) => setDetail(e.target.value)}/>
                    </div>
                    <div className="main__form-inputCont main__form-cont">
                        <label htmlFor="monto">Ingresa un monto</label>
                        <input type="number" placeholder="Monto" className="inputMonto input" onChange={(e) => setAmount(e.target.value)} />
                    </div>
                    <div className="main__form-selectCont main__form-cont">
                        <select className="main__form-select"onChange={(e) => setType(e.target.value)} >
                            <option value="nada">Ingresa un tipo</option>
                            <option value="Ingreso">Ingreso</option>
                            <option value="Egreso">Egreso</option>
                        </select>
                    </div>
                    <button className="main__form-button" onClick={add}>Agregar</button>
                    <button className="main__form-buttonEdit">Editar</button>
                </form>
            </div>
        </main>
    )
}

export default AddForm;