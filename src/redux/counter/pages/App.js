import React from 'react';
import CountResult from '../components/Count';
import Decrement from '../components/Decrement';
import Increment from '../components/Increment';

function CounterPage() {
	return (
		<>
			<CountResult />
			<Decrement />
			<Increment />
		</>
	);
}

export default CounterPage;
