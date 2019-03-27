import axios from 'axios';
import md5 from './md5';
import store from '../store';
import router from '../router';
// import { autoLogin, updateToken } from './auth';
import { getCookie } from '../utils/cookies';


const cleanParams = (p = {}) => {
  Object.keys(p).forEach(k => {
    if (p[k] === undefined || p[k] === null) {
      delete p[k];
    }
  });
};

const goLogin = (config) => {
  if (store.state.wxAppid) {
    autoLogin(config);
  } else {
    router.replace(config.tokenType.url);
  }
};

const sign = config => {
  const isGet = ['GET', 'DELETE'].indexOf(config.method) >= 0;
  const params = isGet ? config.params : config.data;
  const timestamp = Math.floor(Date.now() / 1000);
  const account = config.tokenType ? config.tokenType.jwtInfo.jti : '';
  const delegate = store.state.delegate;
  let arr = pushAll.call([], account, delegate, config.method, config.url, timestamp);
  const ps = params ? Object.entries(params).sort().map(e => `${e[0]}=${e[1]}`).join('&') : '';
  if (isGet) {
    arr = pushAll.call(arr, ps, '', '');
  } else {
    arr = pushAll.call(arr, '', ps, '');
  }
  const str = `|${arr.join('|')}|`;
  config.headers['X-Signature'] = md5(str);
  config.headers['X-Timestamp'] = timestamp;
};

const genPromiseWithErrorMessage = message => new Promise((resovle, reject) => reject({ message }));
const genPromiseWithOutErrorMessage = () => new Promise((resovle, reject) => reject({ break: true }));

/**
 *
 * @param {*} url
 * @param {*} params
 * @param {*} method
 */

const fetch = (host, url, params = {}, method) => {
  const config = {
    url,
    // baseURL: host,
    method: method.toLocaleUpperCase() || 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
  };
  const token = getCookie('token');
  config.url = config.url + '&token=' + encodeURIComponent(token);
  if (method === 'GET' || method === 'DELETE') {
    config.params = params;
  } else {
    config.data = params;
  }
  if (!config.url) {
    return genPromiseWithErrorMessage('no url');
  }
  config.data = config.data || {};

  cleanParams(config.params);
  // sign(config);
  //encodeParames(params);
  return new Promise((resovle, reject) => {
    /* console.log(config, 'config') */
    axios(config)
      .then(res => {
        const data = res.data;
        resovle(data);
      })
      .catch(err => {
        let error = { message: '服务器错误' };
        if (err && err.response && err.response.data) {
          const d = err.response.data;
          error = {
            message: d.displayedMsg,
            httpstatus: err.response.status,
          };
        }
        reject(error);
      });
  });
};

export const fetchData = (host, url, params, method) => fetch(host, url, params, method);
