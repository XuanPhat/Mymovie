import React from 'react';
export default class button extends React.Component {
	render() {
		return (
			<button type={this.props.type} name={this.props.name} onClick={() => this.props.click(1)}>
				{this.props.children}
			</button>
		);
	}
}
