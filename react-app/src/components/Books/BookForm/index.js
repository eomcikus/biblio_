import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import { FEBookForm } from './bookform';
// import LoginForm from './LoginForm';

function AddBookModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Add A Book</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <FEBookForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default AddBookModal;