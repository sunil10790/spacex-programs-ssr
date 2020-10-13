import axios from 'axios';

export const FETCH_LAUNCHES = 'fetch_launches';
export const fetchLaunches = (filters = {}) => async (dispatch) => {
  const limit = filters.limit || 100;
  let url = 'https://api.spaceXdata.com/v3/launches?limit=' + limit;

  if (filters.successfulLanding) {
    url = url + '&land_success=' + filters.successfulLanding;
  }
  if (filters.successfulLaunch) {
    url = url + '&launch_success=' + filters.successfulLaunch;
  }
  if (filters.year) {
    url = url + '&launch_year=' + filters.year;
  }

  const res = await axios.get(url);

  dispatch({
    type: FETCH_LAUNCHES,
    payload: res,
  });
};
