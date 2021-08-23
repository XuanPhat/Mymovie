// hanh dong cua he thong - khi nguoi vao trang web cua mh, lap tuc call data tu api backend ve
// co 2 loai hanh dong
// 1 - action gui len
// 2 - action dc middle no xu ly

// hanh dong cua he thong web gui di
export const REQUEST_SERVER_FOOTBALL = Symbol('REQUEST_SERVER_FOOTBALL');

// hanh dong ma middle redux saga no nhan dc action tu he thong web gui len .
export const LOADING_GET_DATA = Symbol('LOADING_GET_DATA');
export const GET_DATA_SUCCESSFUL = Symbol('GET_DATA_SUCCESSFUL');
export const GET_DATA_EMPTY = Symbol('GET_DATA_EMPTY');
export const GET_DATA_FAIL = Symbol('GET_DATA_FAIL');
// chi co nhung hanh dong tren duoc dispatch vao reducer


export const REQUEST_DETAIL_MATCH = Symbol('REQUEST_DETAIL_MATCH');
export const LOADING_GET_DETAIL_DATA = Symbol('LOADING_GET_DETAIL_DATA');
export const GET_DATA_DETAIL_SUCCESSFUL = Symbol('GET_DATA_DETAIL_SUCCESSFUL');
export const GET_DATA_DETAIL_EMPTY = Symbol('GET_DATA_DETAIL_EMPTY');
export const GET_DATA_DETAIL_FAIL = Symbol('GET_DATA_DETAIL_FAIL');





