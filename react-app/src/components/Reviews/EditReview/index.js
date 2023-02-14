import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditReview from './EditReview';
import '../editreview.css'
// import LoginForm from './LoginForm';

function EditReviewModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} id='editbutton'>Edit Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditReview setShowModal={setShowModal}  />
        </Modal>
      )}
    </>
  );
}

export default EditReviewModal;