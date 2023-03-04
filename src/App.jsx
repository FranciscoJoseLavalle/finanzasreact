import './App.css';
import Historial from './components/Historial/Historial';
import Presupuesto from './components/Presupuesto/Presupuesto';
import Categorias from './components/Categorias/Categorias';
import Ciclos from './components/Ciclos/Ciclos';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ModalContextProvider, { ModalContext } from './context/ModalContext';
import CiclosIndividuales from './components/CiclosIndividuales/CiclosIndividuales';
import Grafico from './components/Grafico/Grafico';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Loader from './components/Loader/Loader';

function App() {
  const { setUser, setIsLogged, isLogged } = useContext(ModalContext);
  const [loading, setLoading] = useState(false)
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    setLoading(true);
    const token = document.cookie.replace('token=', '')
    axios.post("http://localhost:8080/pruebaDatos", { token })
      .then(res => {
        if (res.data.status === 'error') {
          setLoading(false);
          setIsLogged(false);
        } else {
          setConnected(true);
          setLoading(false);
          setIsLogged(true);
          setUser(res.data.payload)
        }
      })
      .catch(console.log);
  }, [])

  return (
    <BrowserRouter>
      <NavBar />
      {loading
        ? <>
          {connected
            ? null
            : <p style={{
              textAlign: 'center',
              padding: '2rem 0',
              paddingBottom: '1rem'
            }}>
              Aguarde unos instantes, el servidor es gratuito y demora en iniciar...
            </p>}
          <Loader />
        </>
        : <>
          <Routes>
            <Route path='/' element={isLogged ? <Historial /> : <Login connected={connected} />} />
            <Route path='/register' element={<Register />} />
            <Route path='/ciclos' element={isLogged ? <Ciclos /> : <Login connected={connected} />} />
            <Route path='/ciclos/:showCiclo' element={<CiclosIndividuales />} />
            <Route path='/categorias' element={<Categorias />} />
            <Route path='/grafico' element={isLogged ? <Grafico /> : <Login connected={connected} />} />
            <Route path='/presupuesto' element={<Presupuesto />} />

            <Route path='/*' element={<Navigate to='/' replace />} />

          </Routes>
        </>}
    </BrowserRouter>
  );
}

export default App;