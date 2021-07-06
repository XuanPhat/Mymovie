import React from 'react';
class SidebarComponent extends React.Component {
	render() {
		return (
			<>
				<h1>This is name: {this.props.name}</h1>
			</>
		);
	}
}
export default SidebarComponent;
