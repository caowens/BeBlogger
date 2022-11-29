import { AppShell } from '@mantine/core';
import { RouterProvider, BrowserRouter } from 'react-router-dom';
import NavBar from './components/Navbar';
import router from './config/AppRouter';

function App() {
  return <RouterProvider router={router} />;
}

export default App;