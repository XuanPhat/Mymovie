import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { api } from '../../services/api';
import { helper } from '../../helpers/common';
import { useHistory } from 'react-router-dom';
const LoginMovie = () => {
	const useHistory123 = useHistory();
	const [errorLogin, setErrorLogin] = useState('');
	const onFinish = values => {
		// console.log('Success:', values);
		const { username, password } = values;
		const token = api.CheckLoginUser(username, password);
		if (token !== null) {
			setErrorLogin('');
			helper.saveTokenLocalStorage(token);
			useHistory123.push('/search-movie');
			// quay vao trang tim kiem phim
		} else {
			setErrorLogin('account invalid');
		}

		// luu token vao local storage  cookie browser
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};
	return (
		<Row>
			<Col span={12} offset={6} style={{ textAlign: 'center' }}>
				<h1>Login</h1>
				{errorLogin !== null && <p style={{ color: 'red', textAlign: 'center' }}>{errorLogin}</p>}
				<Form
					name="basic"
					labelCol={{
						span: 8
					}}
					wrapperCol={{
						span: 16
					}}
					initialValues={{
						remember: true
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item
						label="Username"
						name="username"
						rules={[
							{
								required: true,
								message: 'Please input your username!'
							}
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[
							{
								required: true,
								message: 'Please input your password!'
							}
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						name="remember"
						valuePropName="checked"
						wrapperCol={{
							offset: 8,
							span: 16
						}}
					>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<Form.Item
						wrapperCol={{
							offset: 8,
							span: 16
						}}
					>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</Col>
		</Row>
	);
};

export default React.memo(LoginMovie);
