import './App.css';
import Historial from './components/Historial/Historial';
import Presupuesto from './components/Presupuesto/Presupuesto';
import Categorias from './components/Categorias/Categorias';
import Ciclos from './components/Ciclos/Ciclos';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ModalContextProvider from './context/ModalContext';
import CiclosIndividuales from './components/CiclosIndividuales/CiclosIndividuales';
import Grafico from './components/Grafico/Grafico';

function App() {
  return (
    <BrowserRouter>
      <ModalContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Historial />} />
          <Route path='/ciclos' element={<Ciclos />} />
          <Route path='/ciclos/:showCiclo' element={<CiclosIndividuales />} />
          <Route path='/categorias' element={<Categorias />} />
          <Route path='/grafico' element={<Grafico />} />
          <Route path='/presupuesto' element={<Presupuesto />} />

          <Route path='/*' element={<Navigate to='/' replace />} />
        </Routes>
      </ModalContextProvider>
    </BrowserRouter>
  );
}

export default App;