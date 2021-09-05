import { RouteProps } from 'react-router-dom';

export interface IRoutes extends RouteProps {
  routes?: IRoutes[];
  component: React.ComponentType<any>;
}
