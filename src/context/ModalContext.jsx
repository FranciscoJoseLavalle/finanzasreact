import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const ModalContext = createContext([])

function ModalContextProvider({ children }) {
  const [modal, setModal] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [amounts, setAmounts] = useState(JSON.parse(localStorage.getItem('amounts')) || []);
  const [amountWithoutFilter, setAmountWithoutFilter] = useState([]);
  const [ingresos, setIngresos] = useState([]);
  const [egresos, setEgresos] = useState([]);
  const [id, setId] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [showAmounts, setShowAmounts] = useState([]);
  const [ciclos, setCiclos] = useState(JSON.parse(localStorage.getItem('ciclos')) || []);
  const [cicloNombre, setCicloNombre] = useState('');
  const [nombreCiclo, setNombreCiclo] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});
  const [movimientos, setMovimientos] = useState([])
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   setIngresos(amounts.filter(el => el.type === 'Ingreso').map(element => parseFloat(element.amount)));
  //   setEgresos(amounts.filter(el => el.type === 'Egreso').map(element => parseFloat(element.amount)));
  //   setFinalAmount(ingresos.reduce((anterior, siguiente) => anterior + siguiente, 0) - egresos.reduce((anterior, siguiente) => anterior + siguiente, 0))
  //   setShowAmounts(amounts);
  //   localStorage.setItem('ciclos', JSON.stringify(ciclos));
  //   localStorage.setItem('amounts', JSON.stringify(amounts));
  // }, [amounts])
  // useEffect(() => {
  //   setIngresos(amounts.filter(el => el.type === 'Ingreso').map(element => parseFloat(element.amount)));
  //   setEgresos(amounts.filter(el => el.type === 'Egreso').map(element => parseFloat(element.amount)));
  //   setFinalAmount(ingresos.reduce((anterior, siguiente) => anterior + siguiente, 0) - egresos.reduce((anterior, siguiente) => anterior + siguiente, 0))
  // }, [editItem])
  // useEffect(() => {
  //   setFinalAmount(ingresos.reduce((anterior, siguiente) => anterior + siguiente, 0) - egresos.reduce((anterior, siguiente) => anterior + siguiente, 0))
  // }, [ingresos])
  // useEffect(() => {
  //   setFinalAmount(ingresos.reduce((anterior, siguiente) => anterior + siguiente, 0) - egresos.reduce((anterior, siguiente) => anterior + siguiente, 0))
  // }, [egresos])


  function edit(id) {
    setId(id)
    setModal(true);
    setEditItem(true);
  }

  function getUser() {
    const token = document.cookie.replace('token=', '')
    axios.post("http://localhost:8080/pruebaDatos", { token })
      .then(res => {
        if (res.data.status === 'error') {
          return null
        } else {
          setUser(res.data.payload);
          return res.data.payload
        }
      })
      .catch(console.log);
  }

  function getMovements() {
    axios.get(`http://localhost:8080/movements/${user.movimientos}`,)
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

  function getFinalAmount(res) {
    let ingreso = 0;
    let egreso = 0;
    console.log(res.data.payload);
    res.data.payload.forEach(movimiento => {
      if (movimiento.type === "Ingreso") {
        ingreso += parseFloat(movimiento.amount);
      } else if (movimiento.type === "Egreso") {
        egreso += parseFloat(movimiento.amount);
      }
    })
    setFinalAmount(ingreso - egreso);
  }

  function guardarCiclo() {
    let fecha = new Date();
    let day = fecha.getDate();
    let month = fecha.getMonth();
    let year = fecha.getFullYear();
    let hour = fecha.getHours();
    let minute = fecha.getMinutes();
    let second = fecha.getSeconds();

    let textFecha = `${day}/${month + 1}/${year} a las ${hour}:${minute}:${second}`;
    setCiclos([...ciclos, { id: Date.now(), name: cicloNombre, fecha: textFecha, elementos: amounts }]);
    console.log(ciclos);
    setAmounts([]);
    setNombreCiclo(false);
    localStorage.setItem('ciclos', JSON.stringify(ciclos));
  }

  return (
    <ModalContext.Provider value={{ modal, setModal, amounts, setAmounts, finalAmount, editItem, setEditItem, edit, id, setId, setAmountWithoutFilter, amountWithoutFilter, showAmounts, setShowAmounts, guardarCiclo, ciclos, setCicloNombre, nombreCiclo, setNombreCiclo, setIsLogged, isLogged, user, setUser, getUser, getMovements, movimientos, setMovimientos, loading, setLoading, getFinalAmount }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider;