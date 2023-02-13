import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import ReviewForm from './ReviewForm';
// import LoginForm from './LoginForm';

function AddReviewModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Add Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default AddReviewModal;