import { createContext, useState, useEffect } from 'react';

export const ModalContext = createContext([])

function ModalContextProvider({ children }) {
  const [modal, setModal] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [amounts, setAmounts] = useState([]);
  const [amountWithoutFilter, setAmountWithoutFilter] = useState([]);
  const [ingresos, setIngresos] = useState([]);
  const [egresos, setEgresos] = useState([]);
  const [id, setId] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);

  useEffect(() => {
    setIngresos(amounts.filter(el => el.type === 'Ingreso').map(element => parseFloat(element.amount)));
    setEgresos(amounts.filter(el => el.type === 'Egreso').map(element => parseFloat(element.amount)));
    setFinalAmount(ingresos.reduce((anterior, siguiente) => anterior + siguiente, 0) - egresos.reduce((anterior, siguiente) => anterior + siguiente, 0))
  },[amounts])
  useEffect(() => {
    setIngresos(amounts.filter(el => el.type === 'Ingreso').map(element => parseFloat(element.amount)));
    setEgresos(amounts.filter(el => el.type === 'Egreso').map(element => parseFloat(element.amount)));
    setFinalAmount(ingresos.reduce((anterior, siguiente) => anterior + siguiente, 0) - egresos.reduce((anterior, siguiente) => anterior + siguiente, 0))
  },[editItem])
  useEffect(() => {
    setFinalAmount(ingresos.reduce((anterior, siguiente) => anterior + siguiente, 0) - egresos.reduce((anterior, siguiente) => anterior + siguiente, 0))
  },[ingresos])
  useEffect(() => {
    setFinalAmount(ingresos.reduce((anterior, siguiente) => anterior + siguiente, 0) - egresos.reduce((anterior, siguiente) => anterior + siguiente, 0))
  },[egresos])
  
  function edit(id) {
    setId(id)
    setModal(true);
    setEditItem(true);
  }

  return (
    <ModalContext.Provider value={{ modal, setModal, amounts, setAmounts, finalAmount, editItem, setEditItem, edit, id, setId, setAmountWithoutFilter, amountWithoutFilter }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider;