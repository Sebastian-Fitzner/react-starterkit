import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {composeWithDevTools} from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
	// Specify here name, actionsBlacklist, actionsCreators and other options if needed
});

const rootReducers = combineReducers({});
const initialState = {
	data: {},
	ui: {}
};

const store = createStore(
	rootReducers,
	initialState,
	composeEnhancers(
		applyMiddleware(
			reduxImmutableStateInvariant(),
		)
	)
);

export default store;