import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React from 'react';

export default class index extends React.Component {
	render() {
		return (
			<Button type="primary" icon={<SearchOutlined />}>
				Search
			</Button>
		);
	}
}
