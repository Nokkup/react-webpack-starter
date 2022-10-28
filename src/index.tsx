import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <div>
      <p>Hello World!</p>
    </div>
  </React.StrictMode>
);
