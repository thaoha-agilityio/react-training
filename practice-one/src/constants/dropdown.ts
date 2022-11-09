import { IDropdown } from '../types/IDropdown';
import { PROJECT, ROLE } from './user';

const OPTIONS_ROLE: IDropdown[] = [
  { value: '', text: 'Select Role' },
  { value: ROLE.DEVELOPER, text: 'Developer' },
  { value: ROLE.DESIGNER, text: 'Designer' },
  { value: ROLE.MANAGER, text: 'Manager' },
];

const OPTIONS_PROJECT: IDropdown[] = [
  { value: '', text: 'Select Project' },
  { value: PROJECT.NIKE_SNEAKER, text: 'Nike sneaker' },
  { value: PROJECT.NETFLIX, text: 'Netflix' },
  { value: PROJECT.LIBRA, text: 'Libra' },
];

export { OPTIONS_ROLE, OPTIONS_PROJECT };
