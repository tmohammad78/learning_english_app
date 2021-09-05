import { Redirect, Route } from 'react-router-dom';
import { IRoutes } from 'src/types/route';
import { isHisTurn } from 'src/utils/checkDate';
import { readLocalStorage } from 'src/utils/localStorage';

const WrapperRoute = (route: any) => {
  const lastSeen = readLocalStorage('lastSeen');
  // !isHisTurn(lastSeen)
  return (
    <Route
      path={route.path}
      render={(props) => {
        if (true) {
          return (
            <route.component
              {...props}
              routes={route.routes}
              step={route.computedMatch.path.split(/th|\//)[1]}
            />
          );
        } else {
          <Redirect to="/sdsldf" />;
        }
      }}
    />
  );
};
export default WrapperRoute;
