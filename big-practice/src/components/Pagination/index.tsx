import { memo } from 'react';
import { Button, Flex } from '@chakra-ui/react';

type PaginationProps = {
  isActivation?: boolean;
  pages: number;
  onPreviousPage?: () => void;
  onNextPage: () => void;
};

// TODO: update latter
export const Pagination = memo(
  ({ isActivation, pages, onPreviousPage, onNextPage }: PaginationProps) => {
    const pgArray = Array.from({ length: pages }, (_, id) => id + 1);
    return (
      <Flex justifyContent='center' gap='38px'>
        {pgArray.map((pg) => (
          <Button variant='pagination' isActive={isActivation} key={pg} onClick={onPreviousPage}>
            {pg}
          </Button>
        ))}

        <Button variant='pagination' borderRadius='md' w='98px' h='60px' onClick={onNextPage}>
          Next
        </Button>
      </Flex>
    );
  },
);
