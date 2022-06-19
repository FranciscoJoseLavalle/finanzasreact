import React from 'react'

function HistorialItem({amount}) {
  return (
    <div>
        <div>
            <p>{amount.detail} - {amount.type}</p>
            <p>${amount.amount}</p>
        </div>
    </div>
  )
}

export default HistorialItem;