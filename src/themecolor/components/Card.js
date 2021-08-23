import React from 'react';
import ThemeContext from '../context/ThemeContext';

const CardTheme = () => {
	const { dark } = React.useContext(ThemeContext);
	console.log(dark);
	return (
		<div className="Card">
			<div className="img" />
			<h2>The gioi cua bon Ngao</h2>
			<p> Dua voi dai ca a ? lao ca cho !!!!</p>
			<button> Dark </button>
		</div>
	);
};
export default CardTheme;
