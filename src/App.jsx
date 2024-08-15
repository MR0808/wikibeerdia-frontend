import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, Landing, Login, Register } from './pages/index';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Landing />
            }
        ]
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    }
]);

const App = () => {
    return <RouterProvider router={router} />;
};
export default App;
