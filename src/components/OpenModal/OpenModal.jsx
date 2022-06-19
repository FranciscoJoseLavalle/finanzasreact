import { useContext } from 'react';
import './OpenModal.css';
import { ModalContext } from '../../context/ModalContext';

function OpenModal() {
  const { setModal, modal } = useContext(ModalContext);
  
  function openForm() {
    modal ? setModal(false) : setModal(true);
  }

  return (
    <button className="openModal" onClick={openForm}>+</button>
  )
}

export default OpenModal;