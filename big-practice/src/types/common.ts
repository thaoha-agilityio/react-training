export interface IMenuItem {
  title: string;
  path: string;
}

export enum STATUSES {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  LOADING = 'loading',
}
