import './CiclosItem.css';
import { Link } from 'react-router-dom';

function CiclosItem({ ciclo }) {
    return (
        <Link className='ciclos__item' to={`/ciclos/${ciclo.date}`}>
            <h3>{ciclo.name}</h3>
            <small>{ciclo.date}</small>
        </Link>
    )
}

export default CiclosItem;