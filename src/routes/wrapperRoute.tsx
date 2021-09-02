import { Redirect, Route } from 'react-router-dom';
import { IRoutes } from 'src/types/route';
import { isHisTurn } from 'src/utils/checkDate';
import { readLocalStorage } from 'src/utils/localStorage';

const WrapperRoute = (route: IRoutes) => {
  const lastSeen = readLocalStorage('lastSeen');
  // !isHisTurn(lastSeen)
  return (
    <Route
      path={route.path}
      render={(props) => {
        if (false) {
          return <route.component {...props} routes={route.routes} />;
        } else {
          <Redirect to="/7th" />;
        }
      }}
    />
  );
};
export default WrapperRoute;
