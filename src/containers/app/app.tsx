import * as React from 'react';
import { Route } from 'react-router-dom';
import './app.scss';
import LayoutDefault from "../../shared/layouts/layout-default";
import Home from "../home/home";


class App extends React.Component {
	render() {
		return (
			<LayoutDefault>
				<Route path="/" component={Home} />
			</LayoutDefault>
		);
	}
}

export default App;