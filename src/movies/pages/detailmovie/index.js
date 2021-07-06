import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Image } from 'antd';

import BreadcrumbMovies from '../../components/breadcrump';
import { helper } from '../../helpers/common';
import { api } from '../../services/api';

import { Col, Row, Card } from 'antd';
import '../../components/movies.css';
function Detailmovie() {
	const { id, slug } = useParams();
	console.log(id, slug);
	const [getdataMovies, setgetdataMovies] = useState({});
	useEffect(() => {
		getDataDetailMovies();
	}, [id]);
	const getDataDetailMovies = async () => {
		const Getdata = await api.getdataByIdMovies(id);
		if (!helper.isEmptyObject(Getdata)) {
			setgetdataMovies(Getdata);
		}
	};
	return (
		<>
			<BreadcrumbMovies item_lv1="App" item_lv2="Movies" item_lv3={slug} />

			<Row>
				<Col span={24}>
					{/* <h3 style={{ textAlign: 'center' }}>This is search movies page !</h3> */}

					<div className="site-layout-content">
						<Row>
							<Col>
								<Card
									hoverable
									style={{ marginLeft: '10px', marginTop: '10px' }}
									cover={
										// <img
										// 	alt={'error'}
										// 	src={`https://image.tmdb.org/t/p/w300${getdataMovies.backdrop_path}`}
										// />
										<Image
											src={`https://image.tmdb.org/t/p/w500${getdataMovies.backdrop_path}`}
											className="Imagedetail"
										/>
									}
								></Card>
							</Col>
						</Row>
					</div>
				</Col>
			</Row>
		</>
	);
}

export default Detailmovie;
