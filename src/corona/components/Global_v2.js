import React from 'react';
import { Row, Col, Card, Skeleton } from 'antd';
import CoronaContext from '../context/index';
import { helper } from '../helpers/common';
import NumberFormat from 'react-number-format';

const GlobalVirus = () => {
	// context: hook of context api
	const { loading, virus } = React.useContext(CoronaContext);
	if (loading === true || helper.isEmptyObject(virus)) {
		return <Skeleton />;
	}

	console.log(virus);
	return (
		<Row>
			<Col span={8}>
				<Card title={'Nhiem benh'}>
					<p>
						-Moi nhiem:{' '}
						<NumberFormat value={virus.Global.NewConfirmed} displayType={'text'} thousandSeparator={true} />
					</p>
					<p>
						-Tong ca nhiem:{' '}
						<NumberFormat
							value={virus.Global.TotalConfirmed}
							displayType={'text'}
							thousandSeparator={true}
						/>{' '}
					</p>
				</Card>
			</Col>
			<Col span={8}>
				<Card title={'Tu vong'}>
					<p>
						-Moi tu vong:{' '}
						<NumberFormat value={virus.Global.NewDeaths} displayType={'text'} thousandSeparator={true} />{' '}
					</p>
					<p>
						-Tong ca tu vong:{' '}
						<NumberFormat value={virus.Global.TotalDeaths} displayType={'text'} thousandSeparator={true} />
					</p>
				</Card>
			</Col>
			<Col span={8}>
				<Card title={'Tong so ca khoi benh'}>
					<p>
						-Moi khoi benh:{' '}
						<NumberFormat value={virus.Global.NewRecovered} displayType={'text'} thousandSeparator={true} />{' '}
					</p>
					<p>
						-Tong ca khoi benh:{' '}
						<NumberFormat
							value={virus.Global.TotalRecovered}
							displayType={'text'}
							thousandSeparator={true}
						/>
					</p>
				</Card>
			</Col>
		</Row>
	);
};
export default React.memo(GlobalVirus);
