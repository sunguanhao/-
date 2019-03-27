<template>
<div class="mobile-wrap center">
		<header>
			<span class="retu" @click="$router.push({ name: 'Wallet' })"></span>
		</header>
		<main>
			<div class="logo">
				<img src="../assets/img/logo.png" alt="" />
			</div>
			<div class="regedit-form">
				<div class="regedit-box">
					<input type="text" placeholder="Please input Cell-phone number" v-model="phone" />
				</div>
				<div class="regedit-box">
					<input type="password" placeholder="Please enter password" v-model="password" />
				</div>
				<div class="regedit-box">
					<input type="password" placeholder="Please enter Payment password" v-model="repeatpassword" />
				</div>
      <!--   <div class="regedit-box">
					<input type="password" placeholder="Please input Invitation code" v-model="repeatpassword" />
				</div> -->
				<div class="regedit-sub">
					<input type="submit" name="" id="" value="OK" @click="Regdit"/>
				</div>
			</div>
		</main>
</div>
</template>

<script>
import {showLoading,showToast}  from  '../utils/notify';
import axios from 'axios';
import { getCookie, setCookie} from '../utils/cookies';
import {register} from '../service'
export default {
 name: 'Regdit',
 data() {
   return {
         phone: '',
         password: '',
         repeatpassword: '',
   }
 },
 methods: {
 //注册
    Regdit(){
      const params = {
           phone: this.phone,
           password: this.password,
           repeatpassword: this.repeatpassword,
      }
      if(!this.phone){
        showToast('please input username');
        return;
      }
      if(!this.password){
        showToast('please input password');
        return;
      }
      if(!this.repeatpassword){
        showToast('please input repeatpassword')
      }
      if(this.password != this.repeatpassword){
        showToast('两次密码不重复')
        return;
      }
      register (params).then(res => {
        if(res.code==0){
            showToast(res.msg)
            return;
          };
        if(res.code==1){
            this.$router.push({ path: '/Login' });
          }
      }).catch(err => {
      })
    },


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

.regedit-sub{
	width: 100%;
	display: table;
	padding-top: .9rem;
}
.regedit-sub input{
	width: 100%;
	height: .88rem;
	background-color: #00c4b1;
	border-radius: .1rem;
	color: #fff;
	font-size: .32rem;
	margin-bottom: .2rem;
}
.regedit-sub input.sign-up{
	background: none;
	color: #00c4b1;
}

.regedit-sub-mt{
	margin-top: .4rem;
}
</style>
