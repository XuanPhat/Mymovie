import React, { useState, useEffect, useRef } from 'react';

function App() {
	const onScreenData = useRef({});
	const [inputs, setInputs] = useState({});

	const onInputChange = e => {
		setInputs([...inputs, { data: e.target.value }]);
		// onScreenData.current = updatedInputs;
	};

	useEffect(
		() => () => {
			saveScreenData(onScreenData.current);
		},
		[]
	);
	console.log(inputs);
	return (
		<div>
			<h2>Use refs to get the latest inputs value</h2>
			<label>Title: </label>
			<input name="title" onChange={onInputChange} />
			<label>Note: </label>
			<input name="note" onChange={onInputChange} />
		</div>
	);
}

const saveScreenData = data => {
	console.log(data);
};
export default App;
