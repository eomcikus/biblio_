import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
// import { FEBookForm } from './bookform';
import DeleteBook from './deletebook';
// import LoginForm from './LoginForm';

function DeleteBookModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Delete Book</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteBook setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteBookModal;