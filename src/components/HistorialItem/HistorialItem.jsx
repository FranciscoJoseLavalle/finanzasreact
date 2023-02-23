import { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext';
import editIMG from '../../assets/img/lapiz.png'
import delIMG from '../../assets/img/borrar.png'
import './HistorialItem.css'

function HistorialItem({ amount, deleteItem }) {
  const { edit } = useContext(ModalContext);

  return (
    <div className='item'>
      <div className='itemText'>
        <p>{amount.detail} - {amount.type}</p>
        <p>{amount.categoria}</p>
        <p>${amount.amount}</p>
        <small>{amount.date}</small>
      </div>
      <div className='itemImg'>
        <img src={editIMG} alt="" onClick={() => edit(amount.date)} />
        <img src={delIMG} alt="" onClick={() => deleteItem(amount.date)} />
      </div>
    </div>
  )
}

export default HistorialItem;