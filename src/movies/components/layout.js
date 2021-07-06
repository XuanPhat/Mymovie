import HeaderMovies from './partials/Header';
import FooterMovies from './partials/Footer';
import { Layout } from 'antd';
import './movies.css';
import React from 'react';
import Proptypes from 'prop-types';
const { Content } = Layout;
function LayoutMovies(props) {
	return (
		<Layout className="layout">
			<HeaderMovies />
			<Content style={{ padding: '0 50px' }}>{props.children}</Content>
			<FooterMovies />
		</Layout>
	);
}
LayoutMovies.propTypes = {
	children: Proptypes.node.isRequired
};
export default React.memo(LayoutMovies);
