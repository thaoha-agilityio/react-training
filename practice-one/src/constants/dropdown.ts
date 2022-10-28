import { IDropdown } from '../types/IDropdown ';

const OPTIONS_ROLE: IDropdown[] = [
  { value: '', text: 'Select Role' },
  { value: 'developer', text: 'Developer' },
  { value: 'designer', text: 'Designer' },
  { value: 'manager', text: 'Manager' },
];

const OPTIONS_PROJECT: IDropdown[] = [
  { value: '', text: 'Select Project' },
  { value: 'nike_sneaker', text: 'Nike sneaker' },
  { value: 'netflix', text: 'Netflix' },
  { value: 'libra', text: 'Libra' },
];

export { OPTIONS_ROLE, OPTIONS_PROJECT };
