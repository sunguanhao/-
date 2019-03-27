<template>
	<div class="mobile-wrap center">
    <div class="top">
      <div class="Selection">
        <div class="zk-btn">{{selection.title}}</div>
        <div class="triangle" @click="zkClick">
              <p></p>
        </div>
        <div class="money">
          <span>$45000</span>
        </div>
      </div>
      <div ref='list' class="list">
        <div v-for="(item, index) in seletInfo" :key="index" @click="selet(index)">{{item.title}} </div>
      </div>
      <nav>
        <p  v-for="(item, index) in tabs" :key="index" @click="tabChange(index)" >{{item.title}}</p>
      </nav>
      <i  class="i1" v-if="index === 0"></i>
      <i  class="i2" v-if="index === 1"></i>
      <i  class="i3" v-if="index === 2"></i>
      <i  class="i4" v-if="index === 3"></i>
    </div>
    <main>
      <div>
        <div v-if="index === 0" style="padding-top:2rem;">buy</div>
        <div v-if="index === 1 || index === 2 " style="padding-top:2rem;">{{index}}</div>
        <div v-if="index === 3" style="padding-top:2rem;">{{index}}</div>
      </div>

    </main>
	</div>
</template>
<script>
export default {
  data() {
    return {
			index: 0,
      seletInfo: [
				{
					title: 'ETH/USDT',
					id: 0,
				},
				{
					title: 'BTC/USD',
					id: 1,
				},
				{
					title: 'EOS/USD',
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
     ]
    };
	},
	computed: {
		selection() {
			return this.seletInfo[this.index] || this.seletInfo[0];
		}
	  },
  methods: {
     tabChange(index) {
      this.index = index;
      console.log(index)
    },
    zkClick() {
      // $(".tree-son-menu").toggleClass('open');
      this.$refs.list.classList.toggle('open');
		},
		selet(index) {
      this.index = index;

			this.zkClick();
		},
  },
};
</script>
<style lang="less" scoped>
.top{
  width: 100%;
  position: fixed;
  background: #fff;
}

.Selection {
  position: relative;
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
  margin-left: 2.8rem;
}
}
.list{
  position: absolute;
  z-index: 9;
	left: 0;
	top: 0;
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
.triangle p{
  position: absolute;
  width: 0;
  height: 0;
  content: "";
  border-top: 0.21rem solid #292929;
  border-bottom: 0.21rem solid rgba(255, 255, 255, 0);;
  border-left: .13rem solid rgba(255, 255, 255, 0);
  border-right: 0.13rem solid rgba(255, 255, 255, 0);;
}
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
</style>
