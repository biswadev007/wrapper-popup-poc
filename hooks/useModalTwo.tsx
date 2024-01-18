import { create } from 'zustand';

interface ExamModalTwoProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useModalTwo = create<ExamModalTwoProps>((set)=> ({
  isOpen: false,
  onOpen: ()=> set({ isOpen: true }), 
  onClose: ()=> set({ isOpen: false }), 
}));

export default useModalTwo;