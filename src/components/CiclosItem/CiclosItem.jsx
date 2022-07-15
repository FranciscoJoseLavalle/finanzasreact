import './CiclosItem.css';
import { Link } from 'react-router-dom';

function CiclosItem({ ciclo }) {
    return (
        <Link className='ciclos__item' to={`/ciclos/${ciclo.id}`}>
            <h3>Nombre del ciclo</h3>
            <small>Fecha del ciclo</small>
        </Link>
    )
}

export default CiclosItem;