import React from 'react';
import LayoutComponent from './components/LayoutComponent';
class Helloword extends React.Component {
	render() {
		return (
			<React.Fragment>
				{/* <HeaderComponent title="HEHEE" />
				<h1>Hello word</h1>
				<SidebarComponent name="Sidebar ne" />
				<FooterComponent /> */}
				<LayoutComponent>
					<h1>Hello thang di</h1>
				</LayoutComponent>
			</React.Fragment>
		);
	}
}
export default Helloword;
