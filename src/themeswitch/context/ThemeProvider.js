import React, { Component } from 'react';
import ThemeContext from './ThemeContext';
import PropTypes from 'prop-types';
const themelight = ['--background: white'];
const themedark = ['--background: black'];
class ThemeProvider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dark: false
		};
	}

	applyTheme = theme => {
		const root = document.getElementsByTagName('html')[0];
		root.style.cssText = theme.join(';');
		console.log(root);
	};

	toggle = () => {
		this.setState(state => ({ ...this.state, dark: !state.dark }));
		console.log(this.state.dark);
		window.localStorage.setItem('Darktheme', !this.state.dark);
	};
	componentDidMount() {
		const lasttheme = window.localStorage.getItem('Darktheme');

		if (lasttheme === 'false') {
			this.setState({ ...this.state, dark: false });
		} else {
			this.setState({ ...this.state, dark: true });
		}
	}

	componentDidUpdate() {
		const theme = window.localStorage.getItem('Darktheme');

		if (theme === 'false') {
			this.applyTheme(themelight);
		} else {
			this.applyTheme(themedark);
		}
		console.log(theme);
	}

	render() {
		return (
			<ThemeContext.Provider value={{ dark: this.state.dark, toggle: this.toggle }}>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}
ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired
};

export default ThemeProvider;
