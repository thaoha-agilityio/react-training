import '../src/assets/styles/all.css';
// import { addDecorator } from '@storybook/[framework]';
// import { withContexts } from '@storybook/addon-contexts/[framework]';
// import { contexts } from './configs/contexts';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// addDecorator(withContexts(contexts));
