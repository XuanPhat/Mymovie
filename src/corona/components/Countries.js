import React from 'react';
import './style.css';
import { helper } from '../helpers/common';
const CountriesCorona = ({ data, error }) => {
	if (!helper.getPropsId(error) || helper.getPropsId(data)) {
		return (
			<div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
				<h3>{error.mess}</h3>;<h3>{error.cod}</h3>;
			</div>
		);
	}
	console.log(data.Countries);
	return (
		<table>
			<thead>
				<tr>
					<th>Country</th>
					<th>NewConfirmed</th>
					<th>TotalConfirmed</th>
					<th>NewDeaths</th>
					<th>TotalDeaths</th>
					<th>NewRecovered</th>
					<th>TotalRecovered</th>
				</tr>
				{data.Countries.map(item => (
					<tr key={item.ID}>
						<th>{item.Country}</th>
						<th>{item.NewConfirmed}</th>
						<th>{item.TotalConfirmed}</th>
						<th>{item.NewDeaths}</th>
						<th>{item.TotalDeaths}</th>
						<th>{item.NewRecovered}</th>
						<th>{item.TotalRecovered}</th>
					</tr>
				))}
			</thead>
		</table>
	);
};
export default React.memo(CountriesCorona);
