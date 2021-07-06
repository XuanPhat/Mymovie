import React from 'react';
import { Input, Row, Col } from 'antd';
import '../../../components/movies.css';
const { Search } = Input;
function Searchmovie(props) {
	return (
		<Row>
			<Col span={12} offset={6}>
				<Search
					placeholder="movies name ..."
					enterButton="Search"
					size="large"
					loading={props.loading}
					onSearch={val => props.searchMovie(val)}
				/>
			</Col>
		</Row>
	);
}

export default Searchmovie;
