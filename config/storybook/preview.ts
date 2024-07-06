import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'grey',
      values: [
        {
          name: 'grey',
          value: 'grey',
        },
        {
          name: 'red',
          value: 'red',
        },
      ],
    },
  },
};

export default preview;
