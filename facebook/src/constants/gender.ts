import { Option } from '@/types';

export enum GENDER {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export const GENDER_OPTION: Option[] = [
  {
    value: GENDER.FEMALE,
    label: GENDER.FEMALE,
  },
  {
    value: GENDER.MALE,
    label: GENDER.MALE,
  },
  {
    value: GENDER.OTHER,
    label: GENDER.OTHER,
  },
];
