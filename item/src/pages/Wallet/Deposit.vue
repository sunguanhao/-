<template>
	<div class="mobile-wrap center">
    <header>
      <span class="retu" @click="$router.push({ name:'Wallet' })"></span>
      <h2>
        Deposit
      </h2>
    </header>
    <main>
      <div class="Selection">
        <div>type</div>
        <div class="zk-btn" @click="zkClick">{{selection.title}}</div>
        <div>></div>
      </div>
      <div ref='list' class="list">
        <div v-for="(item, index) in seletInfo" :key="index" @click="selet(item, index)">{{item.title}}</div>
      </div>
      <div class="deposit-wx" v-if="index === 0">
        	<h4>
						<img :src="url" alt="" />
					</h4>
					<p>
						{{address}}
					</p>
      </div>
      <div class="deposit-wx" v-if="index === 1">
        	<h4>
						<img :src="url" alt="" />
					</h4>
					<p>
						{{address}}
					</p>
      </div>
      <div class="deposit-wx" v-if="index === 2">
        <h4>
						<img :src="url" alt="" />
					</h4>
					<p>
						{{address}}
					</p>
      </div>
      <div class="deposit-wx" v-if="index === 3">
        <h4>
						<img :src="url" alt="" />
					</h4>
					<p>
						{{address}}
					</p>
      </div>

    </main>
	</div>

</template>
<script>
import { recharge } from '../../service';
import { showLoading, hideLoading, showToast } from '../../utils/notify';
export default {
  data() {
    return {
      index: 0,
      address: '',
      url: '',
      seletInfo: [
				{
					title: 'BTC',
					id: 0,
				},
				{
					title: 'ETH',
					id: 1,
				},
				{
					title: 'EOS',
					id: 2,
				},
				{
					title: 'USDT',
					id: 3,
				},
			]
    };
	},
	computed: {
		selection() {
			return this.seletInfo[this.index] || this.seletInfo[0];
    },
  },
  mounted() {
  this.begin();
  },
  methods: {
   begin(){
      const params ={
          name: 'BTC',
      };
      showLoading();
      recharge(params).then(res => {
        //console.log(res);
        hideLoading();
        this.address = res.data.address;
        this.url = res.data.img;
        //console.log(res.data.address)
        //console.log(res.data.img)
      }).catch(err => {
        hideLoading();
        console.log(err);
      })
    },
    zkClick() {
      // $(".tree-son-menu").toggleClass('open');
      this.$refs.list.classList.toggle('open');
		},
		selet(item, index) {
      this.index = index;
      this.zkClick();
      const params ={
          name: item.title
      };
      showLoading();
      recharge(params).then(res => {
        hideLoading();
        this.address = res.data.address;
        this.url = res.data.img;
      }).catch(err => {
        hideLoading();
        console.log(err);
      })
    },
  },
};
</script>
<style lang="less" scoped>
.Selection {
  display: flex;
  padding: .3rem .3rem 0 .3rem;
  width: 100%;
  height: .78rem;
  border-bottom: .01rem solid #ebebeb;
	div:nth-child(2) {
		flex: 1;
    text-align: center;
    height: .48rem;
    line-height: .48rem;
    font-size: .34rem;
	}
	>div:first-child {
    width: 60/100rem;
    height: .48rem;
    line-height: .48rem;
    font-size: .34rem;
	}
	>div:last-child {
    width: 60/100rem;
    height: .48rem;
    line-height: .48rem;
    font-size: .34rem;
	}
}
.zk-btn {
	cursor: pointer;
}
.list{
	position: absolute;
	left: 0;
	top: 1.70rem;
	right: 0;
	margin: auto;
	background: #fff;
  width: 100%;
  padding: 0 .3rem;
  max-height: 0;

	overflow: hidden;
	-webkit-transition: max-height .4s;
	transition: max-height .4s;
	div {
    height: .7rem;
    line-height: .7rem;
    font-size: .34rem;
		text-align: center;
	}
}
.list.open{
	max-height: 300px;
	-webkit-transition: max-height .5s;
	transition: max-height .5s;
}
</style>
