import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Box, Breadcrumb, BreadcrumbItem, Text, BreadcrumbLink, VStack } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

// Images
import banner from '@assets/photos/banner.png';
import bannerWepb from '@assets/photos/banner.webp';

// Types
import { IMenuItem } from '@types';

type BannerProps = {
  title: string;
  crumbs: IMenuItem[];
};

const Banner = ({ title, crumbs }: BannerProps) => {
  const renderBreadcrumbItem = useMemo(
    (): JSX.Element[] =>
      crumbs.map<JSX.Element>((crumb, index, { length }) => {
        const isLast = index === length - 1;

        return isLast ? (
          <BreadcrumbItem isCurrentPage data-testid='breadcrumb-item' key={crumb.title}>
            <BreadcrumbLink>{crumb.title}</BreadcrumbLink>
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem key={crumb.title}>
            <BreadcrumbLink as={Link} to={crumb.path}>
              {crumb.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      }),
    [crumbs],
  );

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
          {renderBreadcrumbItem}
        </Breadcrumb>
      </VStack>
    </Box>
  );
};

export default memo(Banner);
