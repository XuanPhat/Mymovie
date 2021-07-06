import React from 'react';
import CardTheme from './components/Card';
import SwitchTheme from './components/Switch';
import ContextProvider from './context/ThemeProvider';
import './theme.css';

class AppTheme extends React.Component {
	render() {
		return (
			<ContextProvider>
				<div className="App">
					<h1> React Context api</h1>
					<h2>Theme switch</h2>
					<CardTheme />
					<SwitchTheme />
				</div>
			</ContextProvider>
		);
	}
}
export default AppTheme;
