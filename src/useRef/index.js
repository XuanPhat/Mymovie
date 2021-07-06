import React, { useRef, useEffect } from 'react';

const Index = () => {
	const Emailref = useRef(null);
	const Passwordref = useRef(null);
	const Submitref = useRef(null);
	useEffect(() => {
		Emailref.current.focus();
	}, []);

	const Emaildown = e => {
		if (e.key === 'Enter') {
			Passwordref.current.focus();
		}
	};
	const Passworddown = e => {
		if (e.key === 'Enter') {
			Submitref.current.focus();
		}
	};

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '100vh',
				flexDirection: 'column'
			}}
		>
			<input placeholder="Email" ref={Emailref} onKeyDown={Emaildown}></input>
			<input
				placeholder="Password"
				style={{ marginTop: '10px' }}
				ref={Passwordref}
				onKeyDown={Passworddown}
			></input>
			<button style={{ marginTop: '10px' }} onClick={() => alert('Xin chao')} ref={Submitref}>
				Submit
			</button>
		</div>
	);
};

export default Index;
