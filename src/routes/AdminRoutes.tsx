

// ==============================|| AUTH ROUTES ||============================== //

const AdminRoutes = {
    path: '/admin',
    children: [
      {
        path: 'admin',
        element: (
          <></>
        ),
        children: [
          {
            path: 'test',
            element: <></>
          },
         
        ]
      }
    ]
  };
  
  export default AdminRoutes;
  