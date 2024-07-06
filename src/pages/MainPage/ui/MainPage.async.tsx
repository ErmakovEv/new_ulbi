import React from 'react';

export const MainPageAsync = React.lazy(
  () =>
    new Promise<{ default: React.ComponentType }>((resolve) => {
      setTimeout(() => {
        resolve(import('./MainPage'));
      }, 1500);
    })
);
