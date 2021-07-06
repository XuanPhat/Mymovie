import React, { useContext } from 'react';

import ContextTheme from '../context/ThemeContext';

const SwitchTheme = () => {
	return <button className="Switch" onClick={() => toggle()}></button>;
};
export default React.memo(SwitchTheme);
