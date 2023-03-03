import Ciclos from '../Ciclos/Ciclos';
import CiclosItem from '../CiclosItem/CiclosItem';
import './CiclosList.css';

function CiclosList({ciclos}) {
    return (
        <>
            <div className='ciclos'>
                { ciclos.map(ciclo => <CiclosItem ciclo={ciclo} key={ciclo.date}/>) }
            </div>
        </>
    )
}

export default CiclosList;