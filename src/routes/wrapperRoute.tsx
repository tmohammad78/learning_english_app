import { Route, RouteProps } from 'react-router-dom';
import { IRoutes } from 'src/types/route';

const WrapperRoute = (route: IRoutes) => {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};
export default WrapperRoute;
