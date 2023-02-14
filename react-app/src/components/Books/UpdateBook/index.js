import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditBook from './EditBook';
// import LoginForm from './LoginForm';

function EditBookModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditBook setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditBookModal;