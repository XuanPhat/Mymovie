import PopularmoviesPage from '../pages/popularMovies/index';
import SearchmoviesPage from '../pages/searchMovies/index';
import Detailmovie from '../pages/detailmovie/index';
import Login from '../pages/login/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
const RouteMovie = () => {
	return (
		<Router>
			<Switch>
				{/* Duong dan mac dinh */}
				<Route path="/" exact>
					<PopularmoviesPage />
				</Route>
				<Route path="/popular-movie">
					<PopularmoviesPage />
				</Route>
				<Route path="/search-movie">
					<SearchmoviesPage />
				</Route>
				<Route path="/movies/:slug~:id">
					<Detailmovie />
				</Route>
				<Route path="/movie/login">
					<Login />
				</Route>
			</Switch>
		</Router>
	);
};
export default React.memo(RouteMovie);
