import * as types from './type';

export const decrementCounter = val => ({
	type: types.DECREMENT_COUNTER,
	payload: { val }
});
export const incrementCounter = val => ({
	type: types.INCREMENT_COUNTER,
	payload: { val }
});
