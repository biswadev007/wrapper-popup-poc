import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  children,
  description,
  isOpen,
  onChange,
  title,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-neutral-900/90 backdrop-blur-sm fixed inset-0' />
        <Dialog.Content className='fixed drop-shadow-md border border-neutral-700 top-1/2 left-1/2 max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-neutral-800 p-6 focus:outline-none'>
          <Dialog.Title className='text-xl text-center font-bold mb-4'>
            {title}
          </Dialog.Title>
          <Dialog.Description className='mb-5 text-sm leading-normal text-center'>
            {description}
          </Dialog.Description>
          <div>{children}</div>
          <Dialog.Close>
            <button className='text-neutral-400 hover:text-white absolute top-[10px] right-[10px] inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full focus:outline-none'>
              Close
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;