import React, { useEffect, useState } from 'react';
import LayoutMovies from '../../components/layout';
import BreadcrumbMovies from '../../components/breadcrump';
import Search from './components/search';
import { api } from '../../services/api';
import { helper } from '../../helpers/common';
import CardMovies from '../../components/CardMovies';
import { Col, Row, Pagination } from 'antd';
import '../../components/movies.css';
function SearchMovies() {
	const [getMovies, setGetMovies] = useState({});
	const [keyword, setKeyword] = useState('');
	const [totalpage, setTotalPage] = useState(0);
	const [totalResult, setTotalResult] = useState(0);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);

	// useEffect(() => {
	// 	const GetdataSearchMovies = async () => {
	// 		const dataMovies = await api.GetdataSearchMovies();
	// 		if (!helper.isEmptyObject(dataMovies)) {
	// 			if (dataMovies.hasOwnProperty('results')) {
	// 				setGetMovies(dataMovies.results);
	// 			}
	// 		}
	// 	};
	// 	GetdataSearchMovies();
	// }, []);
	const onvaluechangeSearchMovies = async keyword => {
		setKeyword(keyword);
		setLoading(true);
		const dataMovies = await api.GetdataSearchMovies(keyword, page);
		if (!helper.isEmptyObject(dataMovies)) {
			if (dataMovies.hasOwnProperty('results')) {
				if (keyword !== '') {
					setGetMovies(dataMovies.results);
				}
			}
			if (dataMovies.hasOwnProperty('total_pages')) {
				setTotalPage(dataMovies.total_pages);
			}
			if (dataMovies.hasOwnProperty('total_results')) {
				setTotalResult(dataMovies.total_results);
			}
		}
		setLoading(false);
		console.log(loading);
		console.log(dataMovies);
	};
	useEffect(() => {
		if (keyword !== '') {
			onvaluechangeSearchMovies(keyword);
		}
	}, [page, keyword]);

	const onchangePagination = e => {
		if (e >= 1 && e <= totalpage) {
			setPage(e);
		}
	};
	return (
		<LayoutMovies>
			<BreadcrumbMovies item_lv1="App" item_lv2="Movies" item_lv3="Search" />
			<Pagination
				current={page}
				total={totalResult}
				onChange={onchangePagination}
				pageSize={20}
				showSizeChanger={false}
			/>
			<Row>
				<Col span={24}>
					<h3 style={{ textAlign: 'center' }}>This is search movies page !</h3>
					<Search searchMovie={onvaluechangeSearchMovies} loading={loading} />

					<div className="site-layout-content">
						{!helper.isEmptyObject(getMovies) && !loading && (
							<Row>
								<Col span={6}>
									{getMovies.map((e, index) => {
										return <CardMovies key={index} item={e} />;
									})}
								</Col>
							</Row>
						)}
					</div>
				</Col>
			</Row>
		</LayoutMovies>
	);
}

export default React.memo(SearchMovies);
