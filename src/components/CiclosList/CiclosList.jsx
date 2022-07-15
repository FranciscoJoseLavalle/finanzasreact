import Ciclos from '../Ciclos/Ciclos';
import CiclosItem from '../CiclosItem/CiclosItem';
import './CiclosList.css';

function CiclosList({ciclos}) {
    return (
        <>
            <div className='ciclos'>
                { ciclos.map(ciclo => <CiclosItem ciclo={ciclo}/>) }
            </div>
        </>
    )
}

export default CiclosList;