<template>
  <div class="mobile-wrap center">
		<header class="zindex">
      <div class="Selection">
        <span class="retu backing" @click="$router.push({path: 'Deal'})"></span>
        <div class="zk-btn">{{selection.title}}</div>
          <div class="triangle" @click="zkClick">
              <p></p>
        </div>
		  </div>
      <div ref='list' class="list">
        <div v-for="(item, index) in seletInfo" :key="index" @click="selet(index)">
          {{item.title}}
        </div>
      </div>
		</header>
		<main>
			<div class="entrust">
				<div class="entrust-tab">
					<ul>
            <li  v-for="(item, index) in tabs" :key="index" @click="tabChange(index)" >
              {{item.title}}

            </li>
             <li  class="i1" v-if="i === 0"></li>
              <li  class="i2" v-if="i === 1"></li>
					</ul>
				</div>
				<div class="entrust-price">
					<p>
						<span>
							<em>
								均价
							</em>
							<i>¥6.55</i>
						</span>
						<span>
							<em>
								均价
							</em>
							<i class="add">¥6.55</i>
						</span>
					</p>
					<h5>
						<span>
							<em>
								最高价
							</em>
							<i>7.56USD</i>
						</span>
						<span>
							<em>
								最低价
							</em>
							<i>7.56USD</i>
						</span>
					</h5>
				</div>
				<div class="entrust-lines">
					<h5>
						交易数额
					</h5>
					<div class="entrust-lines-input">
						<span>
							数量
						</span>
						<input type="text" name="" id="" value="" placeholder="请输入购买数量" />
					</div>
					<div class="entrust-lines-input">
						<span>
							交易价格
						</span>
						<input type="text" name="" id="" value="" placeholder="请输入交易价格" />
					</div>
				</div>
				<div class="entrust-explain">
					<h5>
						交易说明
					</h5>
					<p>
						1.订单有效期为15分钟，请及时付款并点击我已支付按钮<br />
2.币由系统锁定托管，请放心下单
					</p>

				</div>
				<div class="entrust-submit">
					<h6>
						<a href="#">Place an orde</a>
					</h6>
				</div>
			</div>
		</main>
    <div class="alert"></div>
</div>
</template>
<script>
export default {
  data() {
    return {
      index: 0,
      i: 0,
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
       ],
    };
	},
	computed: {
		selection() {
		return this.seletInfo[this.index] || this.seletInfo[0];
		}
	},
  methods: {
    zkClick() {
      // $(".tree-son-menu").toggleClass('open');
      this.$refs.list.classList.toggle('open');
		},
		selet(index) {
			this.index = index;
			this.zkClick();
    },
    tabChange(index) {
      this.i = index;
    },
  },
};
</script>
<style lang="less" scoped>
.Selection {
	display: flex;
	div:nth-child(2) {
		flex: 1;
		text-align: center;
	}
}

.zk-btn {
  cursor: pointer;
  height: .9rem;
  line-height: .9rem;
  font-size: .42rem;
  width: auto;
}
.list{
	position: absolute;
	left: 0;
	top: 0.9rem;
	right: 0;
	margin: auto;
	background: #fff;
  width: 100%;

	max-height: 0;
	overflow: hidden;
	-webkit-transition: max-height .3s;
	transition: max-height .3s;
	div {
    height: .9rem;
    line-height: .9rem;
    font-size: .42rem;
		text-align: center;
	}
}
.list.open{
	max-height: 300px;
	-webkit-transition: max-height .5s;
	transition: max-height .5s;
}
.triangle{
  float: left;
  width: .77rem;
  position: absolute;
  height: 0.90rem;
  top: 0;
  right: 2rem;
  text-align: center;
}
.triangle p{
  position: absolute;
  width: 0;
  height: 0;
  left: 0;
  right: 0;
  top: 0.2rem;
  bottom: 0;
  margin: auto;
  content: "";
  border-top: 0.21rem solid #292929;
  border-bottom: 0.21rem solid rgba(255, 255, 255, 0);;
  border-left: .13rem solid rgba(255, 255, 255, 0);
  border-right: 0.13rem solid rgba(255, 255, 255, 0);;
}
.entrust-tab ul {
  position: relative;
}
.entrust-tab ul .i1{
  width: 1.28rem;
  height: .08rem;
  background: #00c4b1;
  position: absolute;
  top: .82rem;
  left: 1.21rem;
}
.entrust-tab ul .i2{
  width: 1.28rem;
  height: .08rem;
  background: #00c4b1;
  position: absolute;
  top: .82rem;
  right: 1.21rem;
}
</style>
