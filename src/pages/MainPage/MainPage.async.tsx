import React from 'react';

const MainPageAsync = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        //@ts-ignore
        resolve(import('./MainPage'));
      }, 1500);
    })
);
export default MainPageAsync;
