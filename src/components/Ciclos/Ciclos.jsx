import CiclosList from '../CiclosList/CiclosList';
import './Ciclos.css';

function Ciclos() {
    let ciclos = [
        {nombre: "ciclo", fecha: "marzo"},
        {nombre: "ciclo", fecha: "marzo"},
        {nombre: "ciclo", fecha: "marzo"},
        {nombre: "ciclo", fecha: "marzo"},
        {nombre: "ciclo", fecha: "marzo"}
    ]
    return (
        <>
            <h2 className='ciclos__title'>Ciclos</h2>
            <CiclosList ciclos={ciclos}/>
        </>
    )
}

export default Ciclos;