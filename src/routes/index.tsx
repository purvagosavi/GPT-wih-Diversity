import { useRoutes } from 'react-router-dom';
import DefaultRoutes from './DefaultRoutes';
// import AdminRoutes from './AdminRoutes';



// ==============================|| ROUTES RENDER ||============================== //

export default function EnmaRoutes() {
  return useRoutes([DefaultRoutes]);
}
