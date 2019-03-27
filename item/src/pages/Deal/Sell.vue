<template>
<div class="mobile-wrap center">
		<header>
			<span class="retu" @click="$router.push({name: 'Deal'})"></span>
			<h2>
				Sell
			</h2>
		</header>
		<main>
			<div class="deal">
				<div class="deal-inform">
					<div class="deal-inform-box deal-inform-name fl">
						<b>
              {{SellData.phone}}
						</b>
						<em>Account name</em>
					</div>
					<div class="deal-inform-box deal-inform-level fl">
						<b>
							{{SellData.type}}
						</b>
						<em>Authentication level</em>
					</div>
					<div class="deal-inform-box deal-inform-pay fl">

						<em>Payment method:
               <b v-html="SellData.pay_type"></b>
            </em>
					</div>
				</div>
				<div class="deal-price">
					<div class="deal-price-title">
						<span>
							Price(USDT)
						</span>
						<em>
							{{SellData.price}}
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
							<input type="text" name="" id="" value=""  placeholder="Please input" v-model="passward" />
							<i class="look">
							</i>
						</div>
					</div>
				</div>
				<div class="deal-submit">
					<input type="submit" name="" id="" value="Place an orde" @click="InputBuy"/>
				</div>
			</div>
		</main>
   </div>
</template>
<script>
import { showLoading, hideLoading, showToast } from '../../utils/notify';
import {  dealsellquery, dealsellinput} from '../../service';
export default {
name: 'Sell',
data(){
  return{
    passward: '',
    number: '',
    SellData:{},
  }
},
mounted() {
  this.getSell();
},
methods: {
  getSell(){
      const params = {
        id:this.$route.query.id,
      };
      //showLoading();
      setTimeout(() => {
        dealsellquery(params).then(res => {
          this.SellData = res.data;
          /* console.log(res); */
        }).catch(err => {
          console.log(err);
        });
      //hideLoading();
      }, 2000)
  },
  InputSell(){
     const params = {
        id:this.$route.query.id,
        type: this.BuyData.type,
        num: this.number,
        pwd: this.password,
      };
      //showLoading();
      setTimeout(() => {
        dealsellquery(params).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        });
      //hideLoading();
      }, 2000)
  }
},
}
</script>

<style>

</style>
