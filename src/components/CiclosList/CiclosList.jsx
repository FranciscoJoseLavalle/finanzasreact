import Ciclos from '../Ciclos/Ciclos';
import CiclosItem from '../CiclosItem/CiclosItem';
import './CiclosList.css';

function CiclosList({ciclos, deleteCiclo}) {
    return (
        <>
            <div className='ciclos'>
                { ciclos.map(ciclo => <CiclosItem ciclo={ciclo} key={ciclo.date} deleteCiclo={deleteCiclo}/>) }
            </div>
        </>
    )
}

export default CiclosList;