import { useToast, UseToastOptions } from '@chakra-ui/react';

// types
import { STATUS, TIME } from '@/constants';

type CustomToastHook = {
  showToast: (status: STATUS, message: string, options?: UseToastOptions) => void;
};

export const useCustomToast = (): CustomToastHook => {
  const toast = useToast();

  const showToast = (status: STATUS, message: string, options?: UseToastOptions) => {
    toast({
      position: 'top',
      status: status,
      title: message,
      duration: TIME.TOAST_AUTO_CLOSE,
      isClosable: true,
      ...options,
    });
  };

  return { showToast };
};
