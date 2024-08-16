export interface Option {
  value: string;
  label: string;
}

export interface RadioOptions extends Option {
  color: string;
}

export interface MutateOptions {
  onSuccess: () => void;
  onError: (error: unknown) => void;
}
