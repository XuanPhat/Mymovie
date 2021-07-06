import React from 'react';
import ButtonCounter from './components/counter/button';
import ResultCounter from './components/counter/result';
export default class counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	increamentCounter = val => {
		this.setState({ count: this.state.count + val });
	};
	decreamentCounter = val => {
		this.setState({ count: this.state.count - val });
	};
	render() {
		return (
			<>
				<ResultCounter count={this.state.count} />
				<ButtonCounter type="button" name="increment" click={this.increamentCounter} val={this.state.count}>
					+
				</ButtonCounter>
				<ButtonCounter type="button" name="decrement" click={this.decreamentCounter} val={this.state.count}>
					-
				</ButtonCounter>
			</>
		);
	}
}
