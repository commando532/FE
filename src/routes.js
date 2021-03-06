import App from './components/App/App';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import EditService from './pages/EditService/EditService';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Login,
      },
      // {
      //   path: '/about',
      //   exact: true,
      //   component: About,
      // },
      {
        path: '/dashboard',
        component: Dashboard,
        // routes: [
        //   {
        //     path: '/child/:id/grand-child',
        //     // component: GrandChild,
        //   },
        // ],
      },
      {
        path: '/edit',
        component: EditService,
      },
    ],
  },
];

export default routes;
