import React from 'react';
import './style.css';
import { helper } from '../helpers/common';
const GlobalCorona = ({ data, error }) => {
	if (!helper.getPropsId(error) || helper.getPropsId(data)) {
		return (
			<div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
				<h3>{error.mess}</h3>;
			</div>
		);
	}

	return (
		<section className="global__corona">
			<div className="global__item">
				<p>-Moi nhiem: {data.Global.NewConfirmed}</p>
				<p>-Tong ca nhiem: {data.Global.TotalConfirmed} </p>
			</div>
			<div className="global__item">
				<p>-Moi tu vong: {data.Global.NewDeaths} </p>
				<p>-Tong ca tu vong: {data.Global.TotalDeaths} </p>
			</div>
			<div className="global__item">
				<p>-Moi khoi benh: {data.Global.NewRecovered} </p>
				<p>-Tong ca khoi benh: {data.Global.TotalRecovered} </p>
			</div>
		</section>
	);
};
export default React.memo(GlobalCorona);
