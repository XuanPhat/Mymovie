import jwt from 'jsonwebtoken';

function isEmptyObject(obj) {
	for (let prop in obj) {
		//hasOwnProperty: kiem tra trong object co ton key ko ???
		if (obj.hasOwnProperty(prop)) {
			return false;
		}
	}

	return JSON.stringify(obj) === JSON.stringify({});
	// return true : object rong
}
function saveTokenLocalStorage(token) {
	if (token !== null && token !== '') {
		window.localStorage.setItem('token_login', token);
	}
}

export const helper = {
	isEmptyObject,
	saveTokenLocalStorage
};
