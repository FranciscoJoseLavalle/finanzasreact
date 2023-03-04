import './CiclosItem.css';
import { Link } from 'react-router-dom';
import delIMG from '../../assets/img/borrar.png'
import moment from 'moment';

function CiclosItem({ ciclo, deleteCiclo }) {
    return (
        <div className='ciclos__item'>
            <Link to={`/ciclos/${ciclo.date}`}>
                <h3>{ciclo.name}</h3>
                <p style={{
                    color: ciclo.adjustment > 0 ? "green" : "#222",
                    fontWeight: 600
                }}>$ {parseFloat(ciclo.adjustment).toLocaleString()}</p>
                <small>{moment(ciclo.date).format('DD/MM/YYYY H:mm:ss')}</small>
            </Link>
            <img src={delIMG} alt="Delete" onClick={() => deleteCiclo(ciclo.date)} />
        </div>
    )
}

export default CiclosItem;