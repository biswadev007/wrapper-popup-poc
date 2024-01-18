import { create } from 'zustand';

interface ExamModalOneProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useModalOne = create<ExamModalOneProps>((set)=> ({
  isOpen: false,
  onOpen: ()=> set({ isOpen: true }), 
  onClose: ()=> set({ isOpen: false }), 
}));

export default useModalOne;