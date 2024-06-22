

// ==============================|| AUTH ROUTES ||============================== //


import EndUserBase from "../end-user/EndUserBase";
import Landing from "../end-user/components/Landing";

const DefaultRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <EndUserBase/>,
      children:[
        {
          path:'/',
          element:<Landing/>
        },
        {
          path:'/landing',
          element:<Landing/>
        }
      ]
    },
    {
      path: '/admin',
      element: <EndUserBase/>
    }
  ]
};

export default DefaultRoutes;
