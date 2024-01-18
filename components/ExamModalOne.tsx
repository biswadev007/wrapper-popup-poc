'use Client';
import React from 'react';
import Modal from './Modal';
import useModalOne from '@/hooks/useModalOne';

const ExamModalOne = () => {
  const { isOpen, onClose } = useModalOne();

  return (
    <Modal
      title='Welcome back'
      description='Login to your account!'
      isOpen={isOpen}
      onChange={onClose}
    >
      This is Example Modal One
    </Modal>
  );
};

export default ExamModalOne;