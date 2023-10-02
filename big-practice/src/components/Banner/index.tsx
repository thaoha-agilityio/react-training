import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Box, Breadcrumb, BreadcrumbItem, Text, BreadcrumbLink, VStack } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

// Images
import banner from '@assets/photos/banner.png';
import bannerWepb from '@assets/photos/banner.webp';

// Types
import { IMenuItem } from '@types';

// Constants
import { MENU } from '@constants';

type BannerProps = {
  title: string;
  breadcrumbItems: IMenuItem;
};

export const Banner = memo(({ title, breadcrumbItems }: BannerProps) => {
  return (
    <Box
      bgImage={[`url(${banner})`, `url(${bannerWepb})`]}
      bgSize='cover'
      w='100%'
      height='316px'
      bgPos='center'
      textAlign='center'
    >
      <VStack pt='100px'>
        <Text fontSize='4xl' fontWeight='medium' data-testid='title'>
          {title}
        </Text>
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to={MENU[0].path}>
              {MENU[0].title}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage data-testid='breadcrumb-item'>
            <BreadcrumbLink as={Link} to={breadcrumbItems.path}>
              {breadcrumbItems.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </VStack>
    </Box>
  );
});
