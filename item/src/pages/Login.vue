<template>
<div class="mobile-wrap center">
		<header>
			<span class="retu" @click="$router.push({ name: 'Index' })"></span>
		</header>
		<main>
			<div class="logo">
				<img src="../assets/img/logo.png" alt="" />
			</div>
			<div class="regedit-form">
				<div class="regedit-box">
					<input type="text" placeholder="Please input Cell-phone number" v-model="phone"/>
				</div>
				<div class="regedit-box">
					<input type="password" placeholder="Please input Password" v-model="password"/>
				</div>
				<div class="btn">
          <div class="login"  @click="Login">Login</div>
          <div class="regdit"  @click="$router.push({ name: 'Regdit' })">Sign Up</div>
				</div>
			</div>
		</main>
    </div>
</template>

<script>
import { showLoading, hideLoading, showToast } from '../utils/notify';
import { getCookie, setCookie} from '../utils/cookies';
import { login } from '../service';
import axios from 'axios';
export default {
  name: 'Login',
  data() {
    return {
      phone: '',
      password: '',
    }
  },
  methods: {
    // 登录
    Login() {
      const params = {
        phone: this.phone,
        password: this.password,
      };
      showLoading();
      if (!this.phone) {
        showToast('请填写用户名');
        return;
        }
      if (!this.password) {
        showToast('请填写密码');
        return;
        }
      login (params).then(res => {
          //发送请求成功
        //console.log(res);
        if(res.code==0){
            showToast(res.msg)
            return;
        };
          //登录成功
        if(res.code==1){
            this.$router.push({ path: '/' });
            setCookie('token', res.token, 1/24*2);
          }
        }).catch(err => {
          console.log(err);
        })
        /*  axios({
          //baseURL: "http://app.ethorus.com?c=common&a=login&token=",
          url: 'http://app.ethorus.com?c=common&a=login&token=',
          method: 'POST',
          data: params,
          }).then(res => {
            console.log(res)
            if(res.data.code==0){
              showToast(res.data.msg)
            };
            //登录成功
            if(res.data.code==1){
              this.$router.push({ path: '/' });
            }
          }).catch(err => {
            console.log(err);
          }) */
      },
    },

  mounted() {

    // this.logins()
    // this.walletIndex();
  },
}
</script>
<style scoped>
.logo{
	width: 100%;
	padding: 1.04rem 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.logo img{
	height: 1.15rem;
}

.regedit-form{
	width: 100%;
	padding:.3rem;
	display: table;
}

.regedit-box{
	width: 100%;
	height: 1.12rem;
	border-bottom: .02rem solid #93a4ab;
	padding-top: .22rem;
}

.regedit-box input{
	width: 100%;
	height: .6rem;
	line-height: .6rem;
	margin: .15rem 0;
	font-size: .28rem;
	color: #95a4aa;
}
.btn{
  width: 6.9rem;
  padding-top: .9rem;
}
.btn .login{
  width: 6.9rem;
  height: 0.88rem;
  line-height: 0.88rem;
  text-align: center;
  background:#00C4B1;
  border-radius: 0.06rem;
  color: #ffffff;
}
.btn .regdit{
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  text-align: center;
  color:#00C4B1;
  border-radius: 0.06rem;

}
.regedit-sub-mt{
	margin-top: .4rem;
}
</style>
