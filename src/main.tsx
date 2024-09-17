import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router.tsx';
import { Provider } from 'react-redux';
import { parsiStore, store } from './redux/store.ts';
import { PersistGate } from 'redux-persist/es/integration/react';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <Provider store={store}>
         <PersistGate persistor={parsiStore}>
            <RouterProvider router={router} />
         </PersistGate>
      </Provider>
   </StrictMode>
);
