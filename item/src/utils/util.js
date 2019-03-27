// 联通手机号验证
const phoneValid = phone => (/^1(30|31|32|45|55|56|66|75|76|85|86)\d{8}$/).test(phone);
// 三网手机号码验证
const anyPhoneValid = phone => (/^1[3|4|5|6|7|8|9][0-9]\d{8}$/).test(phone);
// 身份证号码验证
const idCodeValid = code => (/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/ || /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$/).test(code);
// 数字和字母输入正则
const NumAndLetter = code => (/^[A-Za-z0-9]/).test(code);
// 中英文名称输入正则
const nameValid = name => (/^[\u4E00-\u9FA5A-Za-z·s]{2,20}$/).test(name);
// 邮箱验证
const emailValid = email => (/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/).test(email);

export {
  phoneValid,
  anyPhoneValid,
  idCodeValid,
  NumAndLetter,
  nameValid,
  emailValid,
};
