import DaysPage from 'src/pages/days';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Routes } from 'src/routes/routes';
import WrapperRoute from 'src/routes/wrapperRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {Routes.map((route, i) => {
            return <WrapperRoute {...route} key={i} />;
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
