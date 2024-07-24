import { memo } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Text } from '@chakra-ui/react';

// Icon component
import { ChevronDownIcon, LogoutIcon } from '../Icons';

interface LogoutProps {
  onLogout: () => void;
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
        <LogoutIcon />
        <Text>Logout</Text>
      </MenuItem>
    </MenuList>
  </Menu>
));

export default Logout;
