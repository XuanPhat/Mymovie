import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
const Switch = () => {
	const { dark, toggle } = useContext(ThemeContext);

	return (
		<button style={{ marginTop: 10 }} onClick={() => toggle()}>
			{dark ? 'dark mode' : 'light mode'}
		</button>
	);
};
export default React.memo(Switch);
