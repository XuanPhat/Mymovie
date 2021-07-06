import React from 'react';
import GlobalCorona from './components/Global_v2';

import Layoutv2 from './components/Layout_v2';
import CountryCorona from './components/Countries_v2';
import CoronaProvider from './context/CoronaProviderV2';
export default class App extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		data: {},
	// 		loading: false,
	// 		error: {}
	// 	};
	// }

	// async componentDidMount() {
	// 	this.setState({ ...this.state, loading: true });
	// 	const result = await api.getDataVirusCorona();
	// 	if (!helper.getPropsId(result)) {
	// 		this.setState({ ...this.state, loading: false, data: result, error: {} });
	// 	} else {
	// 		this.setState({ ...this.state, data: {}, loading: false, error: { cod: 404, mess: 'Error data' } });
	// 	}
	// }
	render() {
		// console.log(this.state.data, this.state.loading);
		// if (this.state.loading) {
		// 	return (
		// 		<div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
		// 			<h3>Loading...</h3>;
		// 		</div>
		// 	);
		// }
		return (
			<>
				<CoronaProvider>
					<Layoutv2>
						<GlobalCorona />
						<CountryCorona />
					</Layoutv2>
				</CoronaProvider>
			</>
		);
	}
}
