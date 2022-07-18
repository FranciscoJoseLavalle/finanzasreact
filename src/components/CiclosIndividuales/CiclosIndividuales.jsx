import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

import { useParams, Link } from 'react-router-dom';

import './CiclosIndividuales.css';

function CiclosIndividuales() {
    let { showCiclo } = useParams();
    const { ciclos } = useContext(ModalContext);
    return (
        <>
            <Link to='/ciclos' className='volver'>Volver a ciclos</Link>
            <h3 className='cicloName'>{ciclos.map(ciclo => {
                if (ciclo.id == showCiclo) {
                    return ciclo.name;
                }
            })}</h3>
            <ul className='ciclosContainer'>{ciclos.filter(ciclo => ciclo.id == showCiclo)[0].elementos.map(elemento => <li key={showCiclo}>
                <p>{elemento.detail} - {elemento.type}</p>
                <p>${elemento.amount}</p>
                <small>{elemento.date}</small></li>)}</ul>
        </>
    )
}

export default CiclosIndividuales;