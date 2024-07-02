import React, { useState } from 'react';
import * as cls from './Counter.module.scss';

export const Counter = () => {
  const [cnt, setCnt] = useState(0);
  console.log('cl', cls);
  return (
    <div className={cls.btn}>
      <h2>{cnt}</h2>
      <button onClick={() => setCnt((c) => c + 1)}>Click</button>
    </div>
  );
};
