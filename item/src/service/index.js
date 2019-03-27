import { fetchData } from '../utils/fetch';
import { getCookie } from '../utils/cookies';
import axios from 'axios'
const host = process.env.API_HOST;
const token = getCookie('token');
// console.log(token,'token');
// const host = 'http://app.ethorus.com?';
// console.log(host, 'host');
const wechatConfig = params => fetchData(host, 'wechat/config', params, 'post');
// const sendCaptcha = params => fetchData(host, '/login/captcha', params, 'POST');
// const userLogin = params => fetchData(host, '/login', params, 'POST');
// const getList = params => fetchData(host, '/list', params, 'GET');
const login = params => fetchData(host, host + 'c=common&a=login', params, 'POST');
const register = params => fetchData(host, host + 'c=common&a=register', params, 'POST');
const index = params => fetchData(host, host + 'c=common&a=index', params, 'POST');
const addressquery = params => fetchData(host, host + 'c=wallet&a=address', params, 'POST');
const addressinput = params => fetchData(host, host + 'c=wallet&a=addAddr', params, 'POST');
const withdrawquery = params => fetchData(host, host + 'c=wallet&a=withdraw', params, 'POST');
const withdrawinput = params => fetchData(host, host + 'c=wallet&a=doWithdraw', params, 'POST');
const record = params => fetchData(host, host + 'c=wallet&a=record', params, 'POST');
const wallet = params => fetchData(host, host + 'c=wallet&a=index', params, 'POST');
const recharge = params => fetchData(host, host + 'c=wallet&a=recharge', params, 'POST');
const depositquery = params => fetchData(host, host + 'c=wallet&a=deposit', params, 'POST');
const depositinput = params => fetchData(host, host + 'c=wallet&a=timeDeposit', params, 'POST');
const feedback = params => fetchData(host, host + 'c=user&a=feedback', params, 'POST');
const messagequery = params => fetchData(host, host + 'c=chat&a=list', params, 'POST');
const messageinput = params => fetchData(host, host + 'c=chat&a=message', params, 'POST');
const chatquery = params => fetchData(host, host + 'c=chat&a=chat', params, 'POST');
const chatinput = params => fetchData(host, host + 'c=chat&a=send', params, 'POST');
const dealb = params => fetchData(host, host + 'c=deal&a=index', params, 'POST');
const deals = params => fetchData(host, host + 'c=deal&a=deal_sell', params, 'POST');
const entrustbuyquery = params => fetchData(host, host + 'c=deal&a=entrust_buy', params, 'POST');
const entrustbuyinput = params => fetchData(host, host + 'c=deal&a=order_buy', params, 'POST');
const entrustsellquery   = params => fetchData(host, host + 'c=deal&a=entrust_sell', params, 'POST');
const entrustsellinput   = params => fetchData(host, host + 'c=deal&a=order_sell', params, 'POST');
const dealentrustquery = params => fetchData(host, host + 'c=deal&a=deal_entrust', params, 'POST');
const dealentrustinput   = params => fetchData(host, host + 'c=deal&a=order_sell', params, 'POST');
const dealbuyquery = params => fetchData(host, host + 'c=deal&a=deal_buy_show', params, 'POST');
const dealbuyinput   = params => fetchData(host, host + 'c=deal&a=deal_buy_order', params, 'POST');
const dealsellquery = params => fetchData(host, host + 'c=deal&a=deal_sell_show', params, 'POST');
const dealsellinput = params => fetchData(host, host + 'c=deal&a=deal_sell_order', params, 'POST');
export {
  wechatConfig,
  login,
  register,
  index,
  wallet,
  recharge,
  depositquery,
  depositinput,
  addressquery,
  addressinput,
  withdrawquery,
  withdrawinput,
  record,
  messagequery,
  messageinput,
  chatquery,
  chatinput,
  feedback,
  dealb,
  deals,
  entrustbuyquery,
  entrustbuyinput,
  entrustsellquery,
  entrustsellinput,
  dealentrustquery,
  dealentrustinput,
  dealbuyquery,
  dealbuyinput,
  dealsellquery,
  dealsellinput,
};
