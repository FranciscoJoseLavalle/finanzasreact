import React from 'react'
import HistorialItem from '../HistorialItem/HistorialItem';

function HistorialList({ amounts }) {
    return (
        <div>
            {amounts.map(amount => (<HistorialItem key={amount.id} amount={amount}/>))}
        </div>
    )
}

export default HistorialList;