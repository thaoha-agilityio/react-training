import { Menu, MenuButton, MenuList, MenuItem, IconButton, Text } from '@chakra-ui/react';
import { memo } from 'react';

// Icon component
import { ChevronDownIcon, LogoutIcon } from '../Icons';

interface LogoutProps {
  onLogout?: () => void;
}

const Logout = memo(({ onLogout }: LogoutProps) => (
  <Menu>
    <MenuButton
      as={IconButton}
      icon={<ChevronDownIcon />}
      aria-label='chevron-down-icon'
      variant='icon'
    />
    <MenuList>
      <MenuItem gap='8px' onClick={onLogout}>
        <IconButton icon={<LogoutIcon />} aria-label='logout-icon' variant='icon' />
        <Text>Logout</Text>
      </MenuItem>
    </MenuList>
  </Menu>
));

export default Logout;
