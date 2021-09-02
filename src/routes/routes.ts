import { IRoutes } from 'src/types/route';
import GeneralDay from 'src/components/generalDay';
import NotFound from 'src/pages/notFound';
import Home from 'src/components/pages/home';

export const Routes: IRoutes[] = [
  {
    path: '/7th',
    component: GeneralDay,
  },
  {
    path: '/6th',
    component: GeneralDay,
  },
  {
    path: '/',
    component: Home,
  },
  {
    component: NotFound,
  },
];
