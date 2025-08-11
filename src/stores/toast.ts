import { create } from 'zustand';

interface ToastState {
  message: string | null;
  type: 'success' | 'error';
  showToast: (message: string, type?: 'success' | 'error') => void;
  hideToast: () => void;
}

const useToastStore = create<ToastState>((set) => ({
  message: null,
  type: 'success',
  showToast: (message, type = 'success') => set({ message, type }),
  hideToast: () => set({ message: null })
}));

export default useToastStore;