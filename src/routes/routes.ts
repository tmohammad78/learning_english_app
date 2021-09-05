import { IRoutes } from 'src/types/route';
import NotFound from 'src/pages/notFound';
import Home from 'src/components/pages/home';
import StepsPage from 'src/pages/steps';
import PreviewPage from 'src/pages/preview';

export const Routes: IRoutes[] = [
  {
    path: '/7th',
    exact: true,
    component: StepsPage,
    routes: [
      {
        path: '/7th/test',
        component: PreviewPage,
      },
    ],
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
    path: '/',
    exact: true,
    component: Home,
  },
  {
    component: NotFound,
  },
];
