import { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext';
import editIMG from '../../assets/img/lapiz.png'
import delIMG from '../../assets/img/borrar.png'
import './HistorialItem.css'
import moment from 'moment';

function HistorialItem({ amount, deleteItem }) {
  const { edit } = useContext(ModalContext);

  return (
    <div className='item'>
      <div className='itemText'>
        <p><b>{amount.detail}</b> - {amount.type}</p>
        <p>{amount.categoria}</p>
        <p style={{
          color: amount.type === "Ingreso" ? "green" : "#222",
          fontWeight: 600
        }}>$ {parseFloat(amount.amount).toLocaleString()}</p>
        <small>{moment(amount.date).format('DD/MM/YYYY h:mm:ss')}</small>
      </div>
      <div className='itemImg'>
        <img src={editIMG} alt="" onClick={() => edit(amount.date)} />
        <img src={delIMG} alt="" onClick={() => deleteItem(amount.date)} />
      </div>
    </div>
  )
}

export default HistorialItem;