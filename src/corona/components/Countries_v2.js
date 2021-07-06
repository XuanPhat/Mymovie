import React from 'react';
import { Row, Col, Table, Skeleton } from 'antd';
import CoronaContext from '../context/index';
import { helper } from '../helpers/common';
import NumberFormat from 'react-number-format';
const columns = [
	{
		title: 'Country',
		dataIndex: 'Country',
		key: 'Country'
	},

	{
		title: 'New Confirmed',
		dataIndex: 'NewConfirmed',
		key: 'NewConfirmed',
		render: text => <NumberFormat value={text} displayType={'text'} thousandSeparator={true} />
	},
	{
		title: 'Total confirmed',
		dataIndex: 'TotalConfirmed',
		key: 'TotalConfirmed',
		render: text => <NumberFormat value={text} displayType={'text'} thousandSeparator={true} />
	},
	{
		title: 'New Deaths',
		dataIndex: 'NewDeaths',
		key: 'NewDeaths',
		render: text => <NumberFormat value={text} displayType={'text'} thousandSeparator={true} />
	},
	{
		title: 'Total Deaths',
		dataIndex: 'TotalDeaths',
		key: 'TotalDeaths',
		render: text => <NumberFormat value={text} displayType={'text'} thousandSeparator={true} />
	},
	{
		title: 'New Recovered',
		dataIndex: 'NewRecovered',
		key: 'NewRecovered',
		render: text => <NumberFormat value={text} displayType={'text'} thousandSeparator={true} />
	},
	{
		title: 'Total Recovered',
		dataIndex: 'TotalRecovered',
		key: 'TotalRecovered',
		render: text => <NumberFormat value={text} displayType={'text'} thousandSeparator={true} />
	}
];
const CountriesVirus = () => {
	const { loading, virus } = React.useContext(CoronaContext);
	if (loading === true || helper.isEmptyObject(virus)) {
		return <Skeleton />;
	}
	return (
		<Row>
			<Col span={24}>
				<Table dataSource={virus.Countries} columns={columns} rowKey="ID" />
			</Col>
		</Row>
	);
};
export default React.memo(CountriesVirus);
