<template>
<div class="mobile-wrap center">
		<header>
			<span class="retu" @click="$router.push({path: 'Deal'})"></span>
			<h2>
				Buy
			</h2>
		</header>
		<main>
			<div class="deal">
				<div class="deal-inform">
					<div class="deal-inform-box deal-inform-name fl">
						<b>
							{{BuyData.phone}}
						</b>
						<em>Account name</em>
					</div>
					<div class="deal-inform-box deal-inform-level fl">
						<b>
							{{BuyData.type}}
						</b>
						<em>Authentication level</em>
					</div>
					<div class="deal-inform-box deal-inform-pay fl">

						<em>Payment method:
              <b v-html="BuyData.pay_type">

						</b>
            </em>
					</div>
				</div>
				<div class="deal-price">
					<div class="deal-price-title">
						<span>
							Price(USDT)
						</span>
						<em>
							{{BuyData.price}}
						</em>
					</div>
					<div class="deal-price-col">
						<div class="deal-price-box">
							<span>
								Amount
							</span>
							<input type="text" name="" id="" value=""  placeholder="Please input" v-model="number"/>
							<i class="all">
								全部
							</i>
						</div>
						<div class="deal-price-box">
							<span>
								Amount of money
							</span>
							<input type="text" name="" id="" value=""  placeholder="Quota 400～4592" />
							<i class="all">
								全部
							</i>
						</div>
						<div class="deal-price-box">
							<span>
								Payment password
							</span>
							<input type="text" name="" id="" value=""  placeholder="Please input" class="pass" v-model="passward" />
							<i class="look">
							</i>
						</div>
					</div>
				</div>
				<div class="deal-submit">
					<input type="submit" name="" id="" value="Place an orde"  @click="InputBuy"/>
				</div>
			</div>
		</main>
     <img src="../../assets/img/ZFB.png"/> |
                  <img src="../../assets/img/VISA.png"/> |
                  <img src="../../assets/img/PPP.png"/> |
                  <img src="../../assets/img/MC.png"/> |
                  <img src="../../assets/img/UNION.png"/>
   </div>
</template>
<script>
import { showLoading, hideLoading, showToast } from '../../utils/notify';
import {  dealbuyquery, dealbuyinput} from '../../service';
export default {
  name: 'Buy',
  data(){
    return{
      number: '',
      password: '',
      BuyData:{},
    }
  },
  mounted() {
    this.getBuy();
  },
  methods: {
    getBuy(){
      const params = {
        id:this.$route.query.id,
      };
      showLoading();
      dealbuyquery(params).then(res => {
        /*  console.log(res); */
        hideLoading();
        this.BuyData = res.data;
      }).catch(err => {
        hideLoading();
        console.log(err);
      });
    },
    InputBuy(){
      const params = {
        id: this.$route.query.id,
        type: this.BuyData.type,
        num: this.number,
        pwd: this.password,
      };
      showLoading();
      dealbuyinput(params).then(res => {
        /*  console.log(res); */
        hideLoading();
      }).catch(err => {
        console.log(err);
        hideLoading();
      });
    }
  },

}
</script>

<style>

</style>
