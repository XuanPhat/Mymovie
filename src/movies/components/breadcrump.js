import React from 'react';
import { Breadcrumb } from 'antd';
const BreadCrumMovies = props => {
	return (
		<Breadcrumb>
			<Breadcrumb.Item>{props.item_lv1}</Breadcrumb.Item>
			<Breadcrumb.Item>{props.item_lv2}</Breadcrumb.Item>
			<Breadcrumb.Item>{props.item_lv3}</Breadcrumb.Item>
		</Breadcrumb>
	);
};

export default React.memo(BreadCrumMovies);
