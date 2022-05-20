import './App.css';
import { Route, Switch } from 'react-router-dom';
import NewPage from './component/pages/News';
import Contact from './component/pages/Contact';

function App() {
	return (
		<main>
			<Switch>
				<Route path="/" exact component={NewPage} />
				<Route path="/contact" exact component={Contact} />
			</Switch>
		</main>
	);
}

export default App;
