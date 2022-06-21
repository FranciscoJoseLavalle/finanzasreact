import { useContext, useEffect } from 'react';
import './OpenModal.css';
import { ModalContext } from '../../context/ModalContext';

function OpenModal() {
  const { setModal, modal, setEditItem } = useContext(ModalContext);
  
  useEffect(() => {
    const modalBTN = document.querySelector('.openModal');
    modal ? modalBTN.classList.add('btnAnimate') : modalBTN.classList.remove('btnAnimate');
    !modal ? setEditItem(false) : <></>;
  }, [modal])
  
  function openForm() {
    modal ? setModal(false) : setModal(true);
  }

  return (
    <button className="openModal" onClick={openForm}>+</button>
  )
}

export default OpenModal;