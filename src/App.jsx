import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Login from './pages/login';
import Error from './pages/Error';
import Library from './pages/Library';
import User from './pages/User';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Library />,
      },
      {
        path: '/login',
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: '/user',
        element: <User />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
