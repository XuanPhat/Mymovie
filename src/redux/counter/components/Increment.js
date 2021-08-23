import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter } from '../actions/index';
const Increment = () => {
	const count = useSelector(state => state.counter.count);
	const dispatch = useDispatch();
	const dispatchIncrement = () => {
		dispatch(incrementCounter(count));
	};
	return (
		<button type="text" onClick={dispatchIncrement}>
			+
		</button>
	);
};

export default React.memo(Increment);
