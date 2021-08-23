import * as types from './type';

// neu ko co tham so gi gui len thi ko can payload
export const requestGetDataToServer = () => ({
  type: types.REQUEST_SERVER_FOOTBALL
});


// hanh dong cua saga
export const loadingGetData = (loading) => ({
  type: types.LOADING_GET_DATA,
  loading
});
export const getDataSuccessful = (data) => ({
  type: types.GET_DATA_SUCCESSFUL,
  data
});
export const getDataEmpty = (message) => ({
  type: types.GET_DATA_EMPTY,
  message
});
export const getDataFail = (error) => ({
  type: types.GET_DATA_FAIL,
  error
})