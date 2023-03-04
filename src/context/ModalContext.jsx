import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const ModalContext = createContext([])

function ModalContextProvider({ children }) {
  const [modal, setModal] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [amounts, setAmounts] = useState(JSON.parse(localStorage.getItem('amounts')) || []);
  const [amountWithoutFilter, setAmountWithoutFilter] = useState([]);
  const [id, setId] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [showAmounts, setShowAmounts] = useState([]);
  const [ciclos, setCiclos] = useState([]);
  const [cicloNombre, setCicloNombre] = useState('');
  const [nombreCiclo, setNombreCiclo] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});
  const [movimientos, setMovimientos] = useState([])
  const [loading, setLoading] = useState(false)

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
      })
      .catch(console.log);
  }

  function getFinalAmount(res) {
    let ingreso = 0;
    let egreso = 0;
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
    setLoading(true);
    let ciclo = {
      name: cicloNombre,
      date: Date.now(),
      movimientos: movimientos,
      adjustment: finalAmount
    }
    console.log(user.ciclos);
    const token = document.cookie.replace('token=', '')
    axios.post(`http://localhost:8080/ciclos/${user.ciclos}/${user.movimientos}`, { token, ciclo })
      .then(res => {
        console.log(res)
        setLoading(false);
        getMovements();
      })
    setNombreCiclo(false);
  }

  function logout() {
    axios.post("http://localhost:8080/api/sessions/logout")
      .then(res => {
        if (res.data.status === "success") {
          document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
          setIsLogged(false);
        }
      })
      .catch(console.log)
  }

  return (
    <ModalContext.Provider value={{ modal, setModal, amounts, setAmounts, finalAmount, editItem, setEditItem, edit, id, setId, setAmountWithoutFilter, amountWithoutFilter, showAmounts, setShowAmounts, guardarCiclo, ciclos, setCiclos, setCicloNombre, nombreCiclo, setNombreCiclo, setIsLogged, isLogged, user, setUser, getUser, getMovements, movimientos, setMovimientos, loading, setLoading, getFinalAmount, logout }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider;