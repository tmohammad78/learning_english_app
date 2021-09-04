import { IRoutes } from 'src/types/route';
import GeneralDay from 'src/components/generalDay';
import NotFound from 'src/pages/notFound';
import Home from 'src/components/pages/home';
import Steps from 'src/pages/steps';

export const Routes: IRoutes[] = [
  {
    path: '/7th',
    component: Steps,
  },
  {
    path: '/6th',
    component: Steps,
  },
  {
    path: '/5th',
    component: Steps,
  },
  {
    path: '/4th',
    component: Steps,
  },
  {
    path: '/3th',
    component: Steps,
  },
  {
    path: '/2th',
    component: Steps,
  },
  {
    path: '/1th',
    component: Steps,
  },
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    component: NotFound,
  },
];
