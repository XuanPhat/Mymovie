import React, { useEffect, useState, useRef } from 'react';

function Timer() {
	const [timeString, setTimeString] = useState(null);
	const intervalRef = useRef(null);
	useEffect(() => {
		intervalRef.current = setInterval(() => {
			const now = new Date();
			const hours = `0${now.getHours()}`.slice(-2);
			const minutes = `0${now.getMinutes()}`.slice(-2);
			const seconds = `0${now.getSeconds()}`.slice(-2);
			const currentTimeString = `${hours}:${minutes}:${seconds}`;
			setTimeString(currentTimeString);
		}, 1000);
		return () => {
			// toi biet component bi xoa
			// hanh dong setinterval chua bi mat
			// can huy hanh dong setinterval truoc khi component bi xoa
			clearInterval(intervalRef.current);
		};
	}, []); // chay nhu comnentwillunmount
	return <div style={{ fontSize: '48px' }}>{timeString}</div>;
}

export default React.memo(Timer);
