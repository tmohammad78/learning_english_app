import { IRoutes } from 'src/types/route';
import NotFound from 'src/pages/notFound';
import Home from 'src/pages/home';
import StepsPage from 'src/pages/steps';
import PreviewPage from 'src/pages/preview';

export const Routes: IRoutes[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/7th/:word',
    exact: true,
    component: PreviewPage,
  },
  {
    path: '/7th',
    exact: true,
    component: StepsPage,
  },
  {
    path: '/6th',
    exact: true,
    component: StepsPage,
  },
  {
    path: '/5th',
    exact: true,
    component: StepsPage,
  },
  {
    path: '/4th',
    exact: true,
    component: StepsPage,
  },
  {
    path: '/3th',
    exact: true,
    component: StepsPage,
  },
  {
    path: '/2th',
    component: StepsPage,
  },
  {
    path: '/1th',
    exact: true,
    component: StepsPage,
  },
  {
    component: NotFound,
  },
];
