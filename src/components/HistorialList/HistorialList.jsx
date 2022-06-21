import React from 'react'
import HistorialItem from '../HistorialItem/HistorialItem';

function HistorialList({ amounts, deleteItem }) {
    return (
        <div>
            {amounts.map(amount => (<HistorialItem key={amount.id} amount={amount} deleteItem={deleteItem}/>))}
        </div>
    )
}

export default HistorialList;