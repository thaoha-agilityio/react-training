import { Avatar, Flex, Text } from '@chakra-ui/react';
import { memo } from 'react';

interface UserProfileProps {
  userName: string;
}

const UserProfile = memo(({ userName }: UserProfileProps) => (
  <Flex gap='10px' alignItems='center'>
    <Avatar />
    <Text>{userName}</Text>
  </Flex>
));

export default UserProfile;
