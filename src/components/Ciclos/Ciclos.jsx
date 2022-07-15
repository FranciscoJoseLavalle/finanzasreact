import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

import CiclosList from '../CiclosList/CiclosList';
import './Ciclos.css';

function Ciclos() {
    const { ciclos } = useContext(ModalContext);
    
    return (
        <>
            <h2 className='ciclos__title'>Ciclos</h2>
            <CiclosList ciclos={ciclos}/>
        </>
    )
}

export default Ciclos;