import axios from 'axios';
import jwt from 'jsonwebtoken';

const SECRET_KEY_TOKEN = 'React-js2105';
// key nay ben back end quy dinh
// ho se cung cap ben phia frontend
// key nay can phai bao mat
const GetdataSearchMovies = async (keyword, page = 1) => {
	const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}`;
	const response = await axios.get(url);
	const result = response.status === 200 ? response.data : {};
	return result;
};
const getdataByIdMovies = async (id = 1) => {
	const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&append_to_response=videos,images&include_image_language=en,null`;
	const response = await axios.get(url);
	const result = response.status === 200 ? response.data : {};
	return result;
};
const CheckLoginUser = (user, pass) => {
	// khi ma user gui username va password len server(backend api)
	// backend api se kiem tra xem account co ton tai khong
	// backend se tra ve thong tin cua user do duoi dang ma hoa token
	// client front-end se nhan duoc token do - giai ma ra de de duoc cac thong tin nguoi dung
	// giua backend va frontend can co de ma hoa va giai ma chung
	// su dung demo test web token
	let token = null;
	if (user === 'admin' && pass == '123') {
		token = jwt.sign(
			{
				id: 1,
				user: user,
				fullname: 'Nguyen Xuan Phat',
				email: 'phatnx2000@gmail.com',
				phone: '0937001189',
				address: 'Nguyen Van Linh'
			},
			SECRET_KEY_TOKEN
		);
	}
	return token;
};

function getTokenStorage() {
	let token = window.localStorage.get('token_login');
	return token;
}
function decryptToken() {
	let encrypToken = getTokenStorage();
	let decoded = jwt.verify(encrypToken, SECRET_KEY_TOKEN);
	return decoded;
}
function getEmailUser() {
	const infoUser = decryptToken();
	if (infoUser.hasOwnProperty('email')) {
		return infoUser.email;
	} else return null;
}
export const api = {
	GetdataSearchMovies,
	getdataByIdMovies,
	CheckLoginUser,
	getEmailUser
};
