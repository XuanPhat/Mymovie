import React, { useEffect } from 'react';
import ListMovies from './components/ListMovies';
import { api } from './services/api';
import { helper } from './helpers/common';
import { Skeleton, Pagination, Row, Col } from 'antd';

const App = () => {
	const [loading, setLoading] = React.useState(false);
	const [movies, setListMovies] = React.useState({});
	const [page, setPage] = React.useState(1);
	const [totalresult, setTotalResult] = React.useState(0);
	const [totalPage, setTotalPage] = React.useState(0);
	// trong class component,minh call api trong componentdidmount
	// trong function thi dung useeffect
	useEffect(() => {
		const getDataApi = async () => {
			// setstate
			setLoading(true);
			const data = await api.getDataMovies(page);
			if (!helper.isEmptyObject(data)) {
				if (data.hasOwnProperty('results')) {
					setListMovies(data.results);
				}
				// cap nhap state total page
				if (data.hasOwnProperty('total_results')) {
					setTotalResult(data.total_results);
				}
				// cap nhap total page
				if (data.hasOwnProperty('total_pages')) {
					setTotalPage(data.total_pages);
				}
			}

			setLoading(false);
		};
		getDataApi();
	}, [page]); //  mang rong

	const getDataByPage = p => {
		if (p >= 1 && p <= totalPage) {
			setPage(p);
		}
	};
	return (
		<>
			{loading || helper.isEmptyObject(movies) ? (
				<Skeleton active />
			) : (
				<Row>
					<Col>
						<ListMovies movies={movies} />
						<Pagination
							style={{ marginBottom: '30px', textAlign: 'center' }}
							current={page}
							total={totalresult}
							pageSize={20}
							showSizeChanger={false} // de ko hien thi dau trangs
							onChange={
								p => getDataByPage(p) // bam chuyen trang
							}
						/>
					</Col>
				</Row>
			)}
		</>
	);
};

export default React.memo(App);
