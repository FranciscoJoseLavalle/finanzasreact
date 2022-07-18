import './CiclosItem.css';
import { Link } from 'react-router-dom';

function CiclosItem({ ciclo }) {
    return (
        <Link className='ciclos__item' to={`/ciclos/${ciclo.id}`}>
            <h3>{ciclo.name}</h3>
            <small>{ciclo.fecha}</small>
        </Link>
    )
}

export default CiclosItem;