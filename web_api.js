const axios = require('axios');
const config = require('config');

//http://localhost:3000/pointvalues/100?start=2020-12-01 07:00:00&end=2022-12-31 09:00:00
exports.getOaskGtpCurrPointValue = (point_id, str_time) => {
  const url = config.get('web_api.oask-gtp-uri')
  return axios.get(`${url}/pointvalue/${point_id}?current_time=${str_time}`);
}
  
exports.PostToOaskGtp = async (data) => {
  const url = config.get('web_api.oask-gtp-uri')
  let res = await axios.post(url+"/formvalues", data);
  console.log(`Status code: ${res.status}`);
  return res;
}

