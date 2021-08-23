import React from 'react';
import { decrementCounter } from '../actions';
import { connect } from 'react-redux';
const Decrement = props => {
	return (
		<button type="text" onClick={() => props.clkDecrement(props.count)}>
			-
		</button>
	);
};
const mapStateToProps = state => ({
	count: state.counter.count
});
const mapDispatchToProps = dispatch => ({
	clkDecrement: val => dispatch(decrementCounter(val))
});
const ConnectDecrementCounter = connect(mapStateToProps, mapDispatchToProps)(Decrement);
export default React.memo(ConnectDecrementCounter);
