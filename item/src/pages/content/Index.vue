<template>
  <div class="mobile-wrap center">
		<main>
      <div class="personal"  >
          <div class="personal-fl fl">
            <h4 @click="$router.push({ name: 'EssentialInformation' })">
              <img src="../../assets/img/ic1.png" alt="" />
            </h4>
            <h5 @click="$router.push({ name: 'Login' })">
              <b>
              {{userInfo.phone}}
              </b>
              <em>
                {{'ID:'+userInfo.id}}
              </em>
            </h5>
          </div>
          <div class="personal-market fr">
            <p>
              market place
            </p>
          </div>
      </div>
      <div class="banner">
        <mt-swipe :auto="2000" class="slider">
          <mt-swipe-item>
            <img src="../../assets/img/img2.jpg">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../../assets/img/img2.jpg">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../../assets/img/img2.jpg">
          </mt-swipe-item>
          </mt-swipe>
      </div>
      <div class="index-notic">
        <h5 @click="$router.push({ name: 'Notice' })">
          <span>
            Ethorus News
          </span>
          <em>
            App under development! Woot!
          </em>
        </h5>
        <div class="index-notic-list">
          <div class="index-notic-box" @click="$router.push({ name: 'Wallet' })">
            <p>
              Wallet
            </p>
          </div>
          <div class="index-notic-box index-notic-box-item2" @click="$router.push({ name: 'AppStore' })">
            <p>
              app store
            </p>
          </div>
        </div>
          <div class="index-notic-trade">
            <p @click="$router.push({ name: 'Deal' })">
              <b>trade</b>
              <em>
                This is the place for trading.
              </em>
            </p>
          </div>
      </div>
			<div class="index-type">
				<ul>
					<li @click="$router.push({ name: 'Candy' })">
						<h4>
							<img src="@/assets/img/ico2.png" alt="" />
						</h4>
						<p>
							Candy
						</p>
					</li>
					<li @click="$router.push({ name: 'Referral' })">
						<h4>
							<img src="@/assets/img/ico3.png" alt="" />
						</h4>
						<p>
							Referral
						</p>
					</li>
					<li @click="$router.push({ name: 'Mail' })">
						<h4>
							<img src="@/assets/img/ico4.png" alt="" />
						</h4>
						<p>
							Mail
						</p>
					</li>
					<li>
						<h4>
							<img src="@/assets/img/ico5.png" alt="" />
						</h4>
						<p>
							Sweep code
						</p>
					</li>
          <li @click="$router.push({ name: 'Quotation' })">
						<h4>
							<img src="@/assets/img/Quotation.png" alt="" />
						</h4>
						<p>
							Quotation
						</p>
					</li>
				</ul>
			</div>
			<div class="null"></div>
		</main>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
import { showLoading, hideLoading, showToast } from '../../utils/notify';
import { getCookie, setCookie } from '../../utils/cookies';
import { index } from '../../service';
export default {
  name: 'Index',
  components: {
     mtSwipe: Swipe,
     mtSwipeItem: SwipeItem,
  },
  data() {
    return {
      userInfo: {
        phone: 'Login/Sign',
        id: '*******',
      },
      //token: '',
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      const params = {
           phone: this.phone,
           id: this.id,
      };
      showLoading();
      index(params).then(res => {
        this.userInfo = res.data.user;
        hideLoading();
      }).catch(err => {
        console.log(err);
        hideLoading();
      });
    },
  },
}
</script>
<style scoped>
.personal{
	width: 100%;
	padding:.3rem;
	display: table;
}
.personal-fl{
	width: 3.5rem;
	float: left;
	height: .88rem;
	overflow: hidden;
}
.personal-fl h4{
	width: .88rem;
	height: .88rem;
	border-radius: 50%;
	float: left;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
.personal-fl h4 img{
	width: 100%;
	height: 100%;
}
.personal-fl h5{
	float: left;
	padding-left: .2rem;
}
.personal-fl h5 b{
	display: block;
	line-height: .48rem;
	font-size: .3rem;
	font-weight: normal;
	color: #333;
}
.personal-fl h5 em{
	display: block;
	font-weight: normal;
	font-size: .24rem;
	line-height: .4rem;
}

.personal-market{
	width: 3.4rem;
	height: .88rem;
	background: url(../../assets/img/bg1.png) center no-repeat;
	-webkit-background-size: 100% 100%;
	background-size: 100% 100%;
	border-radius: .05rem;
}
.personal-market p{
	text-align: right;
	color: #fff;
	line-height: .88rem;
	text-transform: uppercase;
	font-size: .28rem;
	padding: 0 .2rem;
}
.banner{
  width: 100%;
  padding-left: .3rem;
  padding-right: .3rem;
  height: 1.82rem;
}
.banner .slider{
  width: 100%;
  border-radius: .06rem;
}
.banner img{
  display: block;
  width: 100%;
  height: 100%;
}
.index-notic{
	width: 100%;
	padding: 0 .3rem;
}
.index-notic h5{
	line-height: .48rem;
	padding: .25rem 0;
}
.index-notic h5 span{
	color: #10768b;
	font-size: .3rem;
	font-weight: normal;
	position: relative;
}
.index-notic h5 em{
	float: right;
	font-weight: normal;
	font-size: .28rem;
}
.index-notic h5 span:after{
	content: '';
	position: absolute;
	right: -.32rem;
	top: 50%;
	width: .04rem;
	height: .22rem;
	background-color: #156383;
	margin-top: -.11rem;
}

.index-notic-list{
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.index-notic-box{
	width: 2.86rem;
	height: 1.32rem;
	background-color: #f00;
	border-radius: .1rem;
	background: url(../../assets/img/bg2.png)center no-repeat;
	-webkit-background-size: 100% 100%;
	background-size: 100% 100%;
	margin: 0;
}
.index-notic-box p{
	text-align: right;
	color: #fff;
	font-size: .36rem;
	text-transform: uppercase;
	height: .6rem;
	float: right;
	margin: .36rem 0;
	line-height: .6rem;
	padding: 0 .2rem;
}
.index-notic-box.index-notic-box-item2{
	width: 3.74rem;
	background: url(../../assets/img/bg3.png)center no-repeat;
	-webkit-background-size: 100% 100%;
	background-size: 100% 100%;
}
.index-notic-trade{
	width: 100%;
	height: 1.92rem;
	background: url(../../assets/img/bg4.png)center no-repeat;
	-webkit-background-size: 100% 100%;
	background-size: 100% 100%;
	margin-top: .16rem;
	border-radius: .1rem;
}
.index-notic-trade p{
	color: #fff;
	padding-top: .5rem;
	padding-left: 3.3rem;
}
.index-notic-trade p b{
	display: block;
	text-transform: uppercase;
	line-height: .76rem;
	font-size: .48rem;
}
.index-notic-trade p em{
	color: #79b6ff;
	font-size: .24rem;
}
.index-type{
	width: 100%;
	display: table;
	padding: 0 .3rem;
}
.index-type ul{
	width: 100%;
	padding: .3rem 0;
}
.index-type ul li{
	width: 33.33%;
	height: 1.68rem;
}
.index-type ul li h4{
	width: 100%;
	height: .74rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
.index-type ul li h4 img{
	height: .74rem;
}
.index-type ul li p{
	text-align: center;
	line-height: .42rem;
	font-size: .3rem;
	color: #434444;
}
.null{
	width: 100%;
	height: 1rem;
}
</style>
