import { createContext, useState, useEffect } from 'react';

export const ModalContext = createContext([])

function ModalContextProvider({ children }) {
  const [modal, setModal] = useState(false);
  const [amounts, setAmounts] = useState([]);
  const [ingresos, setIngresos] = useState([]);
  const [egresos, setEgresos] = useState([]);
  const [finalAmount, setFinalAmount] = useState(0);

  console.log(amounts);
  useEffect(() => {
    console.log(amounts);
    setIngresos(amounts.filter(el => el.type === 'Ingreso').map(element => parseFloat(element.amount)));
    setEgresos(amounts.filter(el => el.type === 'Egreso').map(element => parseFloat(element.amount)));
    setFinalAmount(ingresos.reduce((anterior, siguiente) => anterior + siguiente, 0) - egresos.reduce((anterior, siguiente) => anterior + siguiente, 0))
    console.log(finalAmount);
  },[amounts])
  useEffect(() => {
    console.log(amounts);
    setFinalAmount(ingresos.reduce((anterior, siguiente) => anterior + siguiente, 0) - egresos.reduce((anterior, siguiente) => anterior + siguiente, 0))
    console.log(finalAmount);
  },[ingresos])
  useEffect(() => {
    console.log(amounts);
    setFinalAmount(ingresos.reduce((anterior, siguiente) => anterior + siguiente, 0) - egresos.reduce((anterior, siguiente) => anterior + siguiente, 0))
    console.log(finalAmount);
  },[egresos])
  return (
    <ModalContext.Provider value={{ modal, setModal, amounts, setAmounts, finalAmount }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider;