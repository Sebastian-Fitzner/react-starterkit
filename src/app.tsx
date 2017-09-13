import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './app.scss';
import App from './containers/app/app';
import store from './store';

ReactDOM.render((
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
), document.getElementById('root'));
//
//
// render(
// 	<Provider store={store}>
// 		<Router history={hashHistory} routes={routes}/>
// 	</Provider>,
// 	document.getElementById('app')
// );