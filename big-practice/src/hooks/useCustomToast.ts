import { useToast, UseToastOptions } from '@chakra-ui/react';

// types
import { STATUSES } from '@types';

type CustomToastHook = {
  showToast: (status: STATUSES, message: string, options?: UseToastOptions) => void;
};

export const useCustomToast = (): CustomToastHook => {
  const toast = useToast();

  const showToast = (status: STATUSES, message: string, options?: UseToastOptions) => {
    toast({
      position: 'top',
      status: status,
      title: message,
      duration: 3000,
      isClosable: true,
      ...options,
    });
  };

  return { showToast };
};
