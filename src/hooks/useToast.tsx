/* eslint-disable no-unused-vars */
import toast from 'react-hot-toast';

interface UseToastHook {
  success: (message: string) => void;
  error: (message: string) => void;
}

export function useToast(): UseToastHook {
  function success(message: string) {
    toast.success(message);
  }

  function error(message: string) {
    toast.error(message);
  }

  return { success, error };
}
