import "./App.css";
import { Route, Switch} from 'react-router-dom';
import NewPage from "./component/pages/News";

function App() {

  return (
    <main>
        <Switch>
          <Route path='/' exact component={NewPage} />
        </Switch>
    </main>
  );
}

export default App;
