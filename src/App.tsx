import { useLoaderData } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';

function App() {
   const location = useLoaderData();
   console.log({ location });

   return <MainLayout />;
}

export default App;
