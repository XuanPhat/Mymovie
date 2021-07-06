import React, { Component } from 'react';
import Card from './components/Card';
import Switch from './components/Switch';
import './theme.css';
import ThemeProvider from './context/ThemeProvider';
export default class App extends Component {
	render() {
		return (
			<ThemeProvider>
				<div className="Circle">
					<Card />
					<Switch />
				</div>
			</ThemeProvider>
		);
	}
}
