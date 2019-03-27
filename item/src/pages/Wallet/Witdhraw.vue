<template>
	<div class="mobile-wrap center">
		<header>
			<span class="retu" @click="$router.push({ name: 'Wallet' })"></span>
			<h2>
				Withdraw
			</h2>
		</header>
		<main>
				<div class="withdraw-input">
          <div class="Selection">
            <div class="typ">type</div>
            <div class="zk-btn" @click="zkClick">{{selection.title}}</div>
            <div class="tubiao" >></div>
          </div>
          <div ref='list' class="list">
            <div v-for="(item, index) in seletInfo" :key="index" @click="selet(item, index)">{{item.title}}</div>
          </div>
          <div>
            <div class="withdraw">
              <span>
                Amount
              </span>
              <input  placeholder="Please input" v-model="number" />
            </div>
            <div class="withdraw-balance">
              <p>
                  Available：{{available}} {{ selection.title}}
              </p>
              <p class="netfee">
                <i class="net"> Net：{{Net}} {{ selection.title}}</i>
               <!--   <input class="net" placeholder=" Net: {{}}BTC"/>
                <input class="fee" value=" Fee：{{}}BTC"/> -->
                <i class="fee"> Fee：{{Fee}}{{ selection.title}}</i>
              </p>
            </div>
            <div class="withdraw-limit">
              <span>
                Min：{{min}} {{ selection.title}}
              </span>
              <span>
                Max：{{max}} {{ selection.title}}
              </span>
            </div>
            <div class="withdraw-contact">
              <div class="withdraw-contact-box">
                <h4 >
                  <img src="../../assets/img/ic18.png" alt="" />
                </h4>
                <input type="text" placeholder="Select From Address List or add your address" v-model="address" />
                <span class="address-ico" @click="$router.push({ name: 'Addmag' })"></span>
              </div>
              <div class="withdraw-contact-box">
                <h4  >
                  <img src="../../assets/img/ic19.png"/>
                </h4>
                <input type="text" name="" id="" value="ajh2he89adb81hn1h2b91fn19742bda" />
              </div>
            </div>
            <div class="withdraw-submit" @click="Input">
              <a href="#">Withdraw to address</a>
            </div>
          </div>
			</div>
		</main>
  </div>
</template>

<script>
import { withdrawquery, withdrawinput } from '../../service';
import { showLoading, hideLoading, showToast } from '../../utils/notify';
export default {
name: 'Witdhraw',
data(){
  return{
    index: 0,
    available : '',
    max: '',
    min: '',
    number: '',
    address: '',
    fee: '',
    seletInfo: [
				{
					title: 'BTC',
					id: 1,
				},
				{
					title: 'ETH',
					id: 2,
				},
			]
   }
 },
 computed: {
		selection() {
			return this.seletInfo[this.index] || this.seletInfo[0];
    },
    Fee(){
      return this.number * this.fee;
    },
    Net(){
      return this.number - this.Fee;
    }
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
      withdrawquery(params).then(res => {
        hideLoading();
        this.available = res.data.available;
        this.min = res.data.min;
        this.max = res.data.max;
        this.fee = res.data.fee;
      }).catch(err => {
        hideLoading();
        console.log(err);
      })
    },
    zkClick() {
      // $(".tree-son-menu").toggleClass('open');
      /* console.log(this.$refs) */
      this.$refs.list.classList.toggle('open');
		},
		selet(item, index) {
      this.index = index;
      this.zkClick();
     /*  console.log(item.title) */
      const params ={
          name: item.title
      };
      showLoading();
      withdrawquery(params).then(res => {
        hideLoading();
        this.available = res.data.available;
        this.min = res.data.min;
        this.max = res.data.max;
        this.fee = res.data.fee;
          ///console.log(res);
      }).catch(err => {
        hideLoading();
        console.log(err);
      })
    },
    Input(){
      console.log(this.selection,'selection')
      const params ={
        type: this.selection.title,
        address: this.address,
        number: this.number,
      };
      showLoading();
      withdrawinput(params).then(res => {
          //console.log(res);
        hideLoading();
      }).catch(err => {
        hideLoading();
        console.log(err);
      })
    },
    input2(){
      console.log(this.selection,'selection')
      const params ={
          type: this.selection.title,
          address: this.address,
          number: this.number,
      };
      withdrawinput(params).then(res => {
         // console.log(res);
      }).catch(err => {
          console.log(err);
      })
    }
  },
}
</script>
<style lang="less" scoped>
.Selection {
  display: flex;
  padding: .3rem .3rem 0 .3rem;
  width: 100%;
  height: .78rem;
  /* border-bottom: .01rem solid #ebebeb; */
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
.withdraw{
  margin-left:.3rem;
}
.withdraw-balance .fee{
  width:auto;
  float: right;
}
.withdraw-balance .net{
  width: auto;
  float: left;
}
.withdraw-limit{
  display: flex;
}
</style>

