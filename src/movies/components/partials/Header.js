import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import { helper } from '../../helpers/common';
const { Header } = Layout;

const Headerfilm = () => {
	const { pathname } = useLocation();
	console.log(pathname);
	const emailUser = helper.saveTokenLocalStorage(pathname);
	return (
		<Header>
			<div className="logo" />
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
				<Menu.Item key="/popular-movie">
					<NavLink to="popular-movie">Popular movies</NavLink>
				</Menu.Item>
				<Menu.Item key="/search-movie">
					<NavLink to="search-movie">Search movies</NavLink>
				</Menu.Item>
				<Menu.Item key="/movie/login">
					<NavLink to="/movie/login">Login</NavLink>
				</Menu.Item>
				{emailUser === null && (
					<Menu.Item key="/movie/login">
						<NavLink to="/movie/login">Login</NavLink>
					</Menu.Item>
				)}

				{emailUser !== null && <Menu.Item>Hi:{emailUser}</Menu.Item>}
			</Menu>
		</Header>
	);
};

export default React.memo(Headerfilm);
