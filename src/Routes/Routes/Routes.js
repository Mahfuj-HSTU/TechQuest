import { createBrowserRouter } from 'react-router-dom';
import LifeEasier from '../../Pages/Home/Home/LifeEasier/LifeEasier';
const router = createBrowserRouter( [
    {
        path: '/',
        element: <LifeEasier></LifeEasier>
    }
] )

export default router
