import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

import { useParams, Link } from 'react-router-dom';

import './CiclosIndividuales.css';

function CiclosIndividuales() {
    let { showCiclo } = useParams();
    const { ciclos } = useContext(ModalContext);
    return (
        <>
            <Link to='/ciclos'>Volver a ciclos</Link>
            <ul className='ciclosContainer'>{ciclos.filter(ciclo => ciclo.id == showCiclo)[0].elementos.map(elemento => <li>
                <p>{elemento.detail} - {elemento.type}</p>
                <p>${elemento.amount}</p>
                <small>{elemento.date}</small></li>)}</ul>
        </>
    )
}

export default CiclosIndividuales

// ciclo.elementos.map(elemento => <li>{elemento.detail} {elemento.type} <small>{elemento.amount}</small></li>)