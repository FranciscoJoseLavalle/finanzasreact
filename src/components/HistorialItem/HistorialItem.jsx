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
        <p>${amount.amount}</p>
        <p>{amount.date}</p>
      </div>
      <div className='itemImg'>
        <img src={editIMG} alt="" onClick={() => edit(amount.id)}/>
        <img src={delIMG} alt="" onClick={() => deleteItem(amount.id)}/>
      </div>
    </div>
  )
}

export default HistorialItem;