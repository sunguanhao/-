<template>
  <div class="mobile-wrap center">
    <div class="top">
      <div class="Selection">
        <div class="zk-btn">{{selection.title}}</div>
        <div class="triangle" @click="zkClick">
              <p></p>
        </div>
        <div class="money">
          <span>${{sum}}</span>
        </div>
      </div>
      <div>
        <div ref='list' class="list">
          <div v-for="(item, index) in seletInfo" :key="index" @click="selet(item,index)">{{item.title}} </div>
        </div>
      </div>
      <nav>
        <p  v-for="(item, index) in tabs" :key="index" @click="tabChange(index)" >{{item.title}}</p>
      </nav>
      <i  class="i1" v-if="i === 0"></i>
      <i  class="i2" v-if="i === 1"></i>
      <i  class="i3" v-if="i === 2"></i>
      <i  class="i4" v-if="i === 3"></i>
    </div>
        <!-- buy hall -->
        <div v-if="i === 0"  class="deal_main">
          <div v-for="(buyHall,index) in buyList"
          :key="index"
          class="buy_list"
          @click="$router.push({ name: 'Buy', query:{id:buyHall.id}})">
            <div class="buy_top">
              <div class="user">{{buyHall.phone}}</div>
              <div class="pay">
                <div class="ali">Payment method：</div>
                <!-- <div  v-for="(item,index) in getImg" :key="index" @click="paid(index)"></div> -->
               <!--  <img src="../../assets/img/ZFB.png"/> |
                <img src="../../assets/img/VISA.png"/> |
                <img src="../../assets/img/PPP.png"/> |
                <img src="../../assets/img/MC.png"/> |
                <img src="../../assets/img/UNION.png"/> -->
              </div>
            </div>
            <div class="buy_center">
              <div class="price">
                <p>{{buyHall.price}}</p>
                <i>Price(USD)</i>
              </div>
              <div class="limit">
                <p>{{buyHall.totall_prices}}</p>
                <i>Limit</i>
              </div>
              <div class="amount">
                <p>{{buyHall.remain_num}}</p>
                <i>Amount</i>
              </div>
            </div>
          </div>
        </div>
        <!-- sell hall -->
        <div v-if="i === 1" class="deal_main">
          <div v-for="(sellHall,index) in sellList"
          :key="index"
          class="buy_list"
          @click="$router.push({ name: 'Sell', query:{id:sellHall.id}})">
            <div class="buy_top">
              <div class="user">{{sellHall.phone}}</div>
              <div class="pay">
                <div class="ali">Payment method：</div>
                <!-- <div  v-for="(item,index) in getImg" :key="index" @click="paid(index)"></div> -->
               <!--  <img src="../../assets/img/ZFB.png"/> |
                <img src="../../assets/img/VISA.png"/> |
                <img src="../../assets/img/PPP.png"/> |
                <img src="../../assets/img/MC.png"/> |
                <img src="../../assets/img/UNION.png"/> -->
              </div>
            </div>
            <div class="buy_center">
              <div class="price">
                <p>{{sellHall.price}}</p>
                <i>Price(USD)</i>
              </div>
              <div class="limit">
                <p>{{sellHall.totall_prices}}</p>
                <i>Limit</i>
              </div>
              <div class="amount">
                <p>{{sellHall.remain_num}}</p>
                <i>Amount</i>
              </div>
            </div>
          </div>
            <!-- <div class="buy_list"  @click="$router.push({ path: 'Sell' })">
              <div class="buy_top">
                <div class="user">User name</div>
                <div class="pay">
                  <div class="ali">Payment method：</div>
                  <img src="../../assets/img/ZFB.png"/> |
                  <img src="../../assets/img/VISA.png"/> |
                  <img src="../../assets/img/PPP.png"/> |
                  <img src="../../assets/img/MC.png"/> |
                  <img src="../../assets/img/UNION.png"/>
                </div>
              </div>
              <div class="buy_center">
                <div class="price">
                  <p>45000</p>
                  <i>Price(USD)</i>
                </div>
                <div class="limit">
                  <p>45000~120000</p>
                  <i>Limit</i>
                </div>
                <div class="amount">
                  <p>3.000</p>
                  <i>Amount</i>
                </div>
              </div>
            </div> -->
          </div>
        <!-- 所有订单 -->
        <div v-if="i === 2" class="deal_main">
            <div class="buy_list order_limit" >
              <div class="buy_top">
                <div class="order">
                  <div class="order_sell">Sell </div>
                  <div class="order_type">BTC/CNY</div>
                  <div class="order_state">已取消 </div>
                </div>
                <div class="time">2019/01/14  10:54</div>
              </div>
              <div class="buy_center">
                <div class="price">
                  <p>45000</p>
                  <i>Price(USD)</i>
                </div>
                <div class="limit">
                  <p>45000~120000</p>
                  <i>Surplus</i>
                </div>
                <div class="amount">
                  <p>3.000</p>
                  <i>Amount</i>
                </div>
              </div>
              <!-- <div class="order_mask">

              </div> -->
          </div>
        </div>
        <!--   订单管理 -->
        <div v-if="i === 3" class="deal_main">

           <ul class="order_list" >
              <li v-for="(item, index) in Differentorder"
              :class="ix == index ? 'blue' : ''"
              :key="index" @click="DifferentOrder(item,index)"
              >
                {{item.order}}
              </li>
           </ul>
           <div style="margin-top=.3rem;">
           <div class="buy_list"  @click="$router.push({ path: 'OrderDateils' })">
              <div class="buy_top">
                <div class="order">
                  <div class="order_sell">Sell </div>
                  <div class="order_type">BTC/CNY</div>
                  <div class="order_state">已取消 </div>
                </div>
                <div class="time">2019/01/14  10:54</div>
              </div>
              <div class="buy_center">
                <div class="price">
                  <p>45000</p>
                  <i>Price(USD)</i>
                </div>
                <div class="limit">
                  <p>45000~120000</p>
                  <i>Surplus</i>
                </div>
                <div class="amount">
                  <p>3.000</p>
                  <i>Amount</i>
                </div>
              </div>
            </div>
           </div>
        </div>
      <a class="add-btn" @click="$router.push({path: 'BuySell'})"></a>
	</div>
</template>

<script>
import { showLoading, hideLoading, showToast } from '../../utils/notify';
import {  dealb, deals, } from '../../service';
export default {
  data() {
    return {
      i: 0,
			index: 0,
      ix: 1,
      sum: '',
      buyList:[],
      sellList:[],
      getImg: [
        {
          img: '',
        }
      ],
      seletInfo: [
				{
					title: 'ETH/USDT',
					id: 0,
				},
				{
					title: 'BTC/USDT',
					id: 1,
				},
				{
					title: 'EOS/USDT',
					id: 2,
				},
      ],
      tabs: [
       {
         title: 'Buy',
         id: '',
       },
       {
         title: 'Sell',
         id: '',
       },
       {
         title: 'Limit Order',
         id: '',
       },
       {
         title: 'Orders',
         id: '',
       },
      ],
      Differentorder:[
        {
          order: 'Unfulfilled order',
          id: '',
        },
        {
          order: 'Completed order',
          id: '',
        },
        {
          order: 'Cancelled order',
          id: '',
        }
      ],
    };
	},
	computed: {
		selection() {
			return this.seletInfo[this.index] || this.seletInfo[0];
		}
  },
  mounted() {
   this.getDealb_s();
  },
  methods: {
    tabChange(index) {
      this.i = index;
    },
    DifferentOrder(item,index) {
      this.ix = index;
    },
    selet(item,index) {
      this.index = index;
      this.zkClick();
       const params = {
        type: item.title,
      };
      showLoading();
      dealb(params).then(res => {
        if(res.code==0){
          showToast(res.msg)
        };
        hideLoading();
        this.buyList = res.data;
        this.sum = res.hall
      }).catch(err => {
        hideLoading();
        console.log(err);
      });
		},
    zkClick() {
      // $(".tree-son-menu").toggleClass('open');
      this.$refs.list.classList.toggle('open');
		},
	  getDealb_s() {
      const params = {
        type: 'ETH/USDT',
      };
      showLoading();
      dealb(params).then(res => {
        hideLoading();
        if(res.code==0){
          showToast(res.msg)
        };
        this.buyList = res.data;
        this.sum = res.hall
      }).catch(err => {
        hideLoading();
        console.log(err);
      });
      deals(params).then(res => {
        if(res.code==0){
          showToast(res.msg)
        };
        this.sellList = res.data;
        this.sum = res.hall
      }).catch(err => {
        console.log(err);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.blue{
  color: #00c4b1;
}
.top{
  width: 100%;
  position: fixed;
  background: #fff;
  /* position: relative; */
}

.Selection {
 /*  position: relative; */
  width: 100%;
  height: .98rem;
  z-index: 99;
  border-bottom: 0.01rem solid #C5D4DA;
  background: #fff;
.zk-btn {
  float: left;
  cursor: pointer;
  height: .98rem;
  line-height: .98rem;
  font-size: .42rem;
  margin-left: 2.7rem;
}
}
.list{
  position: absolute;
  z-index: 99999;
	left: 0;
	top: .9rem;
	right: 0;
	margin: auto;
	background: #fff;
	width: 100%;
	max-height: 0;
	overflow: hidden;
	-webkit-transition: max-height .3s;
  transition: max-height .3s;
	div {
    height: .98rem;
    line-height: .98rem;
    text-align: center;
    font-size: .42rem;
    border-bottom: #ebebeb solid .01rem;
	}
}
.list.open{
	max-height: 300px;
	-webkit-transition: max-height .3s;
	transition: max-height .3s;
}
.triangle{
  float: left;
  width: .77rem;
  position: relative;
  height: 0.98rem;
}
.triangle p{
  position: absolute;
  width: 0;
  height: 0;
  content: "";
  left: .28rem;
  top: .34rem;
  border-top: 0.21rem solid #292929;
  border-bottom: 0.21rem solid rgba(255, 255, 255, 0);;
  border-left: .13rem solid rgba(255, 255, 255, 0);
  border-right: 0.13rem solid rgba(255, 255, 255, 0);;
}
.money span{
  float: right;
  height: .98rem;
  line-height: .98rem;
  margin-right: .3rem;
  color: #ff8b93;
  font-size: .26rem;
}
.top nav{
  width: 100%;
  height: .92rem;
  display: flex;
  justify-content: space-between;
  border-bottom: .01rem solid #C5D4DA;
}
.top nav p{
  width: 1.9rem;
  height: .90rem;
  line-height: .86rem;
  text-align: center;
}
.top i{
  width: 25%;
  height: .08rem;
  background: #00c4b1;
  display: block;
}
.top .i2{
  margin-left: 25%;
}
.top .i3{
  margin-left: 50%;
}
.top .i4{
  margin-left: 75%;
}
.deal_main{
  width: 100%;
  padding-top: 2rem;
}
.deal_main .buy_list{
  background: #F8F8FC;
  width: 100%;
  height: 1.94rem;
  padding: .33rem .3rem .35rem 0.3rem;
  margin-bottom: 0.1rem;
}
.deal_main .buy_list .buy_top{
  width: 100%;
  height: .33rem;
  margin-bottom: .43rem;
  line-height: .33rem;
  font-size: 800 .21rem "";
}
.deal_main .buy_list .buy_top .user{
  float: left;
}
.deal_main .buy_list .buy_top .pay{
  float: right;
  display: flex;
}
.deal_main .buy_list .buy_top .pay .ali{
  color: #6A7390;
}
.deal_main .buy_list .buy_top .pay img{
  height: .33rem;
  margin: 0 .05rem;
}
.buy_center{
  display: flex;
  width: 100%;
  height: .64rem;
  justify-content: space-between;
}
.buy_center div{
  height: .64rem;

}
.buy_center .price{
  width: 30%;
}
.buy_center .price p{
  height: .43rem;
  line-height: .43rem;
  font-size: .23rem;
  color: #292929;
}
.buy_center .limit,.amount p{
  height: .43rem;
  line-height: .43rem;
  font-size: .18rem;
  color: #292929;
}
.buy_center i{
  display: block;
  height: .21rem;
  line-height: .21rem;
  font-size: .16rem;
  color: #6A7390;
}
.buy_center .limit{
  width: 40%;
  height: .64rem;
  text-align: center;
  border-left: solid .01rem #646D88;
  border-right: solid .01rem #646D88;
}
.buy_center .amount{
  width:30%;
  text-align: right;
}

.order{
  float: left;
  display: flex;
}

.order .order_sell{
  width: .83rem;
  background: #6FACFF;
  color: #fff;
  border-radius: .2rem;
  text-align: center;
}
.order .order_type{
  margin: 0 .18rem 0 .21rem;
}
.order .order_state{
  color: #6A7390;
}
.time{
  float: right;
  color: #6A7390;
}
.order_list{
  display: flex;
  justify-content: space-between;
  margin: .3rem;
  height: .5rem;
}
.order_list li{
  height: .3rem;
  line-height: .5rem;
  font-size: .2rem;
}
</style>
