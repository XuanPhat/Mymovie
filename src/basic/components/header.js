import React from 'react';
const HeaderComponent = props => {
	return (
		<React.Fragment>
			<h1>Header Component-{props.title}</h1>
			<p>Hello em</p>
		</React.Fragment>
	);
};
export default HeaderComponent;
