import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;
const footer = () => {
	return <Footer style={{ textAlign: 'center' }}>My movie 2021</Footer>;
};

export default React.memo(footer);
