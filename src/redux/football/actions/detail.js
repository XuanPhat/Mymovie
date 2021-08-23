import * as types from './type';

export const requestGetDetailData = ( id ) => ({
  type: types.REQUEST_DETAIL_MATCH,
  id
});

export const getDetailDataSuccess = (data) => ({
  type: types.GET_DATA_DETAIL_SUCCESSFUL,
  data
});

export const loadingDetailMatch = (loading) => ({
  type: types.LOADING_GET_DETAIL_DATA,
  loading
});

export const getDetailDataFail = (error) => ({
  type: types.GET_DATA_DETAIL_FAIL,
  error
});

export const getDetailDataEmpty = (message) => ({
  type: types.GET_DATA_DETAIL_EMPTY,
  message
})
