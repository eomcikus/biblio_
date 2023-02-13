import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import DeleteBFromShelf from './DeleteShelf';
// import LoginForm from './LoginForm';

function DeleteBookModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Remove Book</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteBFromShelf setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteBookModal;