import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './app.scss';
import App from "./containers/app/app";

ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
), document.getElementById('root'));
//
//
// render(
// 	<Provider store={store}>
// 		<Router history={hashHistory} routes={routes}/>
// 	</Provider>,
// 	document.getElementById('app')
// );