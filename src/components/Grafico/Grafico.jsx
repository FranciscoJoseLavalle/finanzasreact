import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

import './Grafico.css';

function Grafico() {
    const { amounts } = useContext(ModalContext);
    console.log(amounts);
    let estilos = {
        backgroundImage: `conic-gradient(green 10%, red 10%, grey 10%)`,
        width: '10rem',
        height: '10rem',
        borderRadius: '50%'
    }
    return (
        <>
            <h2>Gráfico</h2>
            <div className='grafico-cont' style={estilos}>
            </div>
        </>
    )
}

export default Grafico;