import React from 'react';
import ContextTheme from '../context/ThemeContext';

const SwitchTheme = () => {
	const { toggle } = React.useContext(ContextTheme);
	return <button className="Switch" onClick={() => toggle()}></button>;
};
export default SwitchTheme;
