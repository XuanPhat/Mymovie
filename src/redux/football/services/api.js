import axios from 'axios';

const getMainData = ( data, id = 403 ) => {
  if(data.hasOwnProperty('data')){
    if(data['data'].hasOwnProperty(id)){
      if(data['data'][`${id}`].hasOwnProperty('data')){
        return data['data'][`${id}`]['data'];
      }
    }
  }
  return {};
}

const getDataResultFootball = async () => {
  const url = `https://gw.vnexpress.net/football/fixture?league_id=403`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  const data = getMainData(result, 403);
  return data;
}

const getDetailMatchFootball = async (id) => {
  const url = `https://gw.vnexpress.net/football/fixture/event?fixture_id=${id}`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  const data = getMainData(result, id)
  return data;
}

export const api = {
  getDataResultFootball,
  getDetailMatchFootball
}