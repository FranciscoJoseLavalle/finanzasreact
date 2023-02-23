import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { ModalContext } from '../../context/ModalContext';
import SelectCategoria from '../SelectCategoria/SelectCategoria';

import './AddForm.css';

function AddForm() {
    const { setAmounts, amounts, setModal, editItem, id, amountWithoutFilter, setAmountWithoutFilter, user, getMovements, setLoading, movimientos } = useContext(ModalContext);

    const [detail, setDetail] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('nada');
    const [categoria, setCategoria] = useState('-');

    function closeModal() {
        setModal(false);
    }

    function add(e) {
        e.preventDefault();

        const montoInput = document.querySelector('.inputMonto');
        const detalleInput = document.querySelector('.inputDetalle');
        const select = document.querySelector('.main__form-select');
        const form = document.querySelector('.main__form');

        amount < 0.01 || amount === '' ? montoInput.classList.add('inputWrong') : montoInput.classList.remove('inputWrong');

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
            setLoading(true);
            let movement = {
                detail,
                amount,
                type,
                date: Date.now(),
                categoria
            }
            const token = document.cookie.replace('token=', '')
            axios.post(`http://localhost:8080/movements/${user.movimientos}`, { token, movement })
                .then(res => {
                    console.log(res)
                    setLoading(false);
                    getMovements();
                })
            form.reset();
            setDetail('');
            setAmount('');
            setType('nada');
        }
    }

    function updateEdit(e) {
        e.preventDefault();

        const montoInput = document.querySelector('.inputMonto');
        const detalleInput = document.querySelector('.inputDetalle');
        const select = document.querySelector('.main__form-select');
        const form = document.querySelector('.main__form');

        if (amount < 0.01 || amount === '') {
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
            setLoading(true);
            movimientos.forEach(el => {
                if (el.date === id) {
                    let movement = {
                        detail: detail,
                        amount: amount,
                        type: type,
                        date: el.date,
                        categoria: el.categoria
                    }

                    const token = document.cookie.replace('token=', '')
                    axios.put(`http://localhost:8080/movements/${user.movimientos}`, { token, movement })
                        .then(res => {
                            console.log(res)
                            setLoading(false);
                            getMovements();
                        })
                    el.detail = detail;
                    el.amount = amount;
                    el.type = type;
                }
            })
            setModal(false);
            form.reset();
        }
    }

    useEffect(() => {
        if (type == 'nada' || type == 'Ingreso') {
            setCategoria('-');
        }
    }, [type])

    useEffect(() => {
        const detalleInput = document.querySelector('.inputDetalle');
        const montoInput = document.querySelector('.inputMonto');
        const select = document.querySelector('.main__form-select');

        if (editItem) {
            movimientos.forEach(el => {
                if (el.date === id) {
                    detalleInput.value = el.detail
                    montoInput.value = el.amount
                    select.value = el.type
                    setDetail(detalleInput.value)
                    setAmount(montoInput.value)
                    setType(select.value)
                }
            })
        } else {
            detalleInput.value = '';
            montoInput.value = '';
            select.value = 'nada';
        }
    }, [editItem])

    return (
        <main className="main display">
            <div className="main-cont">
                <button className="closeModal" onClick={closeModal}>x</button>
                <form className="main__form">
                    <div className="main__form-inputCont main__form-cont">
                        <label htmlFor="monto">Ingresa un detalle</label>
                        <input type="text" placeholder="Detalle" className="inputDetalle input" maxLength="15" onChange={(e) => setDetail(e.target.value)} />
                    </div>
                    <div className="main__form-inputCont main__form-cont">
                        <label htmlFor="monto">Ingresa un monto</label>
                        <input type="number" placeholder="Monto" className="inputMonto input" onChange={(e) => setAmount(e.target.value)} />
                    </div>
                    <div className="main__form-selectCont main__form-cont main__form-inputCont">
                        <label htmlFor="type">Seleccione el tipo</label>
                        <select className="main__form-select" id='type' onChange={(e) => setType(e.target.value)} >
                            <option value="nada">Ingresa un tipo</option>
                            <option value="Ingreso">Ingreso</option>
                            <option value="Egreso">Egreso</option>
                        </select>
                    </div>
                    {
                        type == 'Egreso' ?
                            <SelectCategoria setCategoria={setCategoria} /> :
                            <></>
                    }
                    {
                        editItem
                            ?
                            <button className="main__form-buttonEdit" onClick={updateEdit}>Editar</button>
                            :
                            <button className="main__form-button" onClick={add}>Agregar</button>
                    }
                </form>
            </div>
        </main>
    )
}

export default AddForm;