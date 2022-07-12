import Ciclos from '../Ciclos/Ciclos';
import CiclosItem from '../CiclosItem/CiclosItem';
import './CiclosList.css';

function CiclosList({ciclos}) {
    return (
        <>
            <div className='ciclos'>
                { ciclos.map(ciclo => <CiclosItem nombre={ciclo.nombre} fecha={ciclo.fecha}/>) }
            </div>
        </>
    )
}

export default CiclosList;