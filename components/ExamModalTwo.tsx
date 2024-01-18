'use Client';
import React from 'react';
import Modal from './Modal';
import useModalTwo from '@/hooks/useModalTwo';

const ExamModalTwo = () => {
  const { isOpen, onClose } = useModalTwo();

  return (
    <Modal
      title='Second Modal'
      description='This is modal two'
      isOpen={isOpen}
      onChange={onClose}
    >
      This is Example Modal Two
    </Modal>
  );
};

export default ExamModalTwo;