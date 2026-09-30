import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <App />
  </HashRouter>,
);

// http://mesuperapp.com/#users

// BrowserRouter redirect to index. html for *

// http://mesuperapp.com/#users.html ==>  // http://mesuperapp.com/index/html
