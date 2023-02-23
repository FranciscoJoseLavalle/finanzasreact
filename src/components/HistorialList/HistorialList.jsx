import React from 'react'
import HistorialItem from '../HistorialItem/HistorialItem';
import './HistorialList.css';

function HistorialList({ showAmounts, deleteItem }) {
    return (
        <div className='historialList'>
            {showAmounts.map(amount => (<HistorialItem key={amount.date} amount={amount} deleteItem={deleteItem} />))}
        </div>
    )
}

export default HistorialList;