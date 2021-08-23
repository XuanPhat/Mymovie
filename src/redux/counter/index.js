import React from 'react';
import CounterPage from './pages/App';
import { Provider } from 'react-redux';
import store from './store';
const Storereducer = () => {
	return (
		<Provider store={store}>
			<CounterPage />
		</Provider>
	);
};

export default React.memo(Storereducer);
