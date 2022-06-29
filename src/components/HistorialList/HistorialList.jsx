import React from 'react'
import HistorialItem from '../HistorialItem/HistorialItem';
import './HistorialList.css';

function HistorialList({ amounts, deleteItem }) {
    return (
        <div className='historialList'>
            {amounts.map(amount => (<HistorialItem key={amount.id} amount={amount} deleteItem={deleteItem}/>))}
        </div>
    )
}

export default HistorialList;