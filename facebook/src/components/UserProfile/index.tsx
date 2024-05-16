import { memo } from 'react';
import { Avatar, Flex, Text } from '@chakra-ui/react';

// Constants
import { DEFAULT_IMAGE } from '@/constants';
interface UserProfileProps {
  userName: string;
}

const UserProfile = memo(({ userName }: UserProfileProps) => (
  <Flex gap='10px' alignItems='center'>
    <Avatar src={DEFAULT_IMAGE} name='avatar' />
    <Text>{userName}</Text>
  </Flex>
));

export default UserProfile;
