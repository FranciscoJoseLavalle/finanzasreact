import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';

import CiclosList from '../CiclosList/CiclosList';
import './Ciclos.css';

function Ciclos() {
    const { user, setCiclos, ciclos } = useContext(ModalContext);
    // const [ciclos, setCiclos] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/ciclos/${user.ciclos}`)
            .then(res => {
                console.log(res);
                if (res.data.status === "success") {
                    setCiclos(res.data.payload.ciclos)
                }
            })
            .catch(console.log);

    }, [])


    return (
        <>
            <h2 className='ciclos__title'>Ciclos</h2>
            <CiclosList ciclos={ciclos} />
        </>
    )
}

export default Ciclos;