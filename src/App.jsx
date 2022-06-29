import './App.css';
import Historial from './components/Historial/Historial';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ModalContextProvider from './context/ModalContext';

function App() {
  return (
    <BrowserRouter>
      <ModalContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Historial />} />
          <Route path='/:type' element={<Historial />} />

          <Route path='/*' element={<Navigate to='/' replace />} />
        </Routes>
      </ModalContextProvider>
    </BrowserRouter>
  );
}

export default App;