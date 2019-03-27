<template>
<div class="mobile-wrap center">
		<header>
			<span class="map" @click="$router.push({ name: 'Addmag' })"></span>
			<h2>
				My wallet
			</h2>
			<span class="order" @click="$router.push({ name: 'Asset' })"></span>
		</header>
		<main>
			<div class="wallet">
				<div class="wallet-price fl">
					<h5>
						<img src="../../assets/img/ic13.png" alt="" />
						<b>STOP PRICE</b>
					</h5>
					<ul>
						<li>
							<span>
								BTC
							</span>
							<b>${{BTC.exchange_rate}}</b>
						</li>
						<li>
							<span>
								ETH
							</span>
							<b>${{ETH.exchange_rate}}</b>
						</li>
						<li>
							<span>
								EOS
							</span>
							<b>${{EOS.exchange_rate}}</b>
						</li>
						<li>
							<span>
								USDT
							</span>
							<b>${{USDT.exchange_rate}}</b>
						</li>
					</ul>
				</div>
				<div class="wallet-money fr">
					<div class="wallet-money-calculate">
						<p>
							TOTAL VALUE OF<br />ALL FUNDS($)
						</p>
						<h4>
							<i>≈</i>
							<b>
								{{SUM}}
							</b>
						</h4>
					</div>
					<div class="wallet-money-link">
						<a href="#" class="acti" @click="$router.push({ name: 'Witdhraw' })">Withdraw</a>
						<a href="#" @click="$router.push({ name: 'Deposit' })">Deposit</a>
						<a href="#" @click="$router.push({ name: 'TimeDeposit' })">Time deposit</a>
					</div>
				</div>
			</div>
			<div class="wallet-list">
				<ul>
					<li>
						<h4>
							<img src="@/assets/img/ic14.png" alt="" />
						</h4>
						<div class="wallet-list-data fr">
 							<span>
								<b>BTC</b>
								<i>{{BTC.data}}</i>
							</span>
							<span>
								<em>Value</em>
								<i>{{BTC.available}}</i>
							</span>
							<span>
								<em>Lock Position</em>
								<i>{{BTC.lock}}</i>
							</span>
						</div>
					</li>
					<li>
						<h4>
							<img src="../../assets/img/ic15.png" alt="" />
						</h4>
						<div class="wallet-list-data fr">
 							<span>
								<b>ETH</b>
								<i>{{ETH.data}}</i>
							</span>
							<span>
								<em>Value</em>
								<i>{{ETH.available}}</i>
							</span>
							<span>
								<em>Lock Position</em>
								<i>{{ETH.lock}}</i>
							</span>
						</div>
					</li>
					<li>
						<h4>
							<img src="@/assets/img/ic16.png" alt="" />
						</h4>
						<div class="wallet-list-data fr">
 							<span>
								<b>EOS</b>
								<i>{{EOS.data}}</i>
							</span>
							<span>
								<em>Value</em>
								<i>{{EOS.available}}</i>
							</span>
							<span>
								<em>Lock Position</em>
								<i>{{EOS.lock}}</i>
							</span>
						</div>
					</li>
					<li>
						<h4>
							<img src="@/assets/img/ic17.png" alt="" />
						</h4>
						<div class="wallet-list-data fr usdt">
 							<span>
								<b>USDT</b>
							  <i>{{USDT.data}}</i>
							</span>
							<span>
								<em>Value</em>
								<i>{{USDT.available}}</i>
							</span>
							<span>
								<em>Lock Position</em>
								<i>{{USDT.lock}}</i>
							</span>
						</div>
					</li>
				</ul>
			</div>
			<div class="null"></div>
		</main>
   </div>
</template>

<script>
import { wallet,} from '../../service';
import { showLoading,hideLoading } from '../../utils/notify';
export default {
  name: 'Wallet',
  data(){
    return {
      SUM:'',
      BTC:{
        exchange_rate: '',
        data: '',
        available: '',
        lock: '',
      },
      ETH:{
        exchange_rate: '',
        data: '',
        available: '',
        lock: '',
      },
      EOS:{
        exchange_rate: '',
        data: '',
        available: '',
        lock: '',
      },
      USDT:{
        exchange_rate: '',
        data: '',
        available: '',
        lock: '',
      },
    }
  },
  components:{
  },
  methods: {
    getWallet(){
      const params= {
      };
      //showLoading();
      wallet(params).then(res => {
        hideLoading();
        //console.log(res);
        //console.log(res.list)
        this.SUM = res.sum;
        this.BTC = res.list.BTC;
        this.ETH = res.list.ETH;
        this.EOS = res.list.EOS;
        this.USDT = res.list.USDT;
      }).catch(err => {
        hideLoading();
      });
    }
 },
 mounted() {
   this.getWallet()
 },
 }
</script>

<style scoped>
.wallet{
	width: 100%;
	padding: 0 .3rem;
}

.wallet-price{
	width: 3.42rem;
	height: 4.36rem;
	background-color: #e1eaf0;
	border-radius: .16rem;
}
.wallet-price h5{
	line-height: 1.02rem;
	padding-top: .3rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0 .24rem;
}
.wallet-price h5 img{
	height: .3rem;
}
.wallet-price h5 b{
	color: #01c2af;
	font-size: .26rem;
	font-weight: normal;
	padding-left: .1rem;
}

.wallet-price ul{
	width: 100%;
	padding: 0 .24rem;
}
.wallet-price ul li{
	width: 2.7rem;
	height: .78rem;
	line-height: .78rem;
	border-bottom: .01rem solid #ffffff;
	font-size: .26rem;
}
.wallet-price ul li span{
	display: inline-block;
	width: .8rem;
	float: left;
}
.wallet-price ul li b{
	width: 1.2rem;
	float: left;
	font-weight: normal;
}
.wallet-price ul li:last-child{
	border-bottom: none;
}
.wallet-money{
	width: 3.3rem;
	display: table;
	min-height: 4.36rem;
}

.wallet-money-calculate{
	width: 3.3rem;
	height: 2.15rem;
	background-color: #f00;
	border-radius: .1rem;
	background: linear-gradient(45deg, #146382, #04b0a7); /* 标准的语法 */
}
.wallet-money-calculate p{
	color: #fff;
	padding-left: .18rem;
	line-height: .3rem;
	font-size: .24rem;
	padding-top: .44rem;
}
.wallet-money-calculate h4{
	padding-left: .18rem;
	line-height: .68rem;
	padding-top: .28rem;
	color: #fff;
}
.wallet-money-calculate h4 i{
	font-size: .26rem;
	color: #fff;
	padding-right: .1rem;
	float: left;
}
.wallet-money-calculate h4 b{
	font-size: .46rem;
	font-weight: normal;
}

.wallet-money-link{
	width: 100%;
	display: table;
	min-height: 2.1rem;
}
.wallet-money-link a{
	display: inline-block;
	width: 100%;
	height: .63rem;
	background-color: #176583;
	color: #fff;
	font-size: .26rem;
	margin: 0;
	margin-top: .1rem;
	text-align: center;
	line-height: .64rem;
	text-transform: uppercase;
	border-radius: .1rem;
}
.wallet-money-link a.acti{
	background-color: #00c4b1;
}

.wallet-list{
	width: 100%;
	display: table;
	padding: 0 .3rem;
}
.wallet-list ul{
	width: 100%;
	display: table;
	padding: .2rem 0;
}
.wallet-list ul li{
	width: 100%;
	display: table;
	padding: .15rem 0;
	border-bottom: .02rem solid #ebebeb;
}
.wallet-list ul li h4{
	width: .64rem;
	float: left;
}
.wallet-list ul li h4 img{
	height: .64rem;
}

.wallet-list-data{
	width: 6.05rem;
	display: table;
	display: flex;
	justify-content: space-between;
}
.wallet-list-data span{
	display: block;
}
.wallet-list-data span b,.wallet-list-data span em{
	line-height: .34rem;
	font-size: .26rem;
}
.wallet-list-data span i{
	display: block;
	line-height: .34rem;
	font-weight: normal;
	text-align: right;
	font-size: .24rem;
}
.wallet-list-data span em{
	color: #9a9a9a;
}
</style>
