import React from 'react';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
export default class LayoutComponent extends React.Component {
	render() {
		return (
			<>
				<Header title="Hello" />
				<Sidebar />
				{this.props.children}
				<Footer />
			</>
		);
	}
}
