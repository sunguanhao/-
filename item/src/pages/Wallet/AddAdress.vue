<template>
  <div class="mobile-wrap center">
    <header>
      <span class="retu" @click="$router.push({ name:'Addmag' })"></span>
      <h2>
        Add address
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
      <div class="add-address-input">
					<div class="add-address-input-box">
						<input type="text" placeholder="Please enter your address" v-model="address"/>
					</div>
					<div class="add-address-input-box">
						<input type="text" placeholder="Please enter notes" v-model="remark"/>
					</div>
			</div>
      <div class="add-address-submit" >
					<input type="submit"  @click="inputClick" />
				</div>
    </main>
	</div>
</template>

<script>
import { addressinput } from '../../service';
import { showLoading, hideLoading, showToast } from '../../utils/notify';
export default {
  data() {
    return {
      index: 0,
      address: '',
      remark: '',
      type: '',
      seletInfo: [
				{
					title: 'EOS',
					id: 1,
				},
				{
					title: 'ETH',
					id: 2,
				},
				{
					title: 'BTC',
					id: 3,
				},
				{
					title: 'USDT',
					id: 4,
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
  },
  methods: {
    inputClick(){
      const params ={
        address_type: this.type,
        address: this.address,
        remark: this.remark,
      };
      if (!this.address) {
        showToast('address is none');
        return;
        }
      if (!this.remark) {
        showToast('remark is none');
        return;
        }
      showLoading();
      addressinput(params).then(res => {
        hideLoading();
        this.$router.push({ path: 'Addmag' });
          /* console.log(res); */
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
      this.type = item.id;
      this.zkClick();
    },

  },
};
</script>

<style lang="less" scoped>
.Selection {
  position: relative;
  z-index: 99;
  display: flex;
  padding: .3rem .3rem 0 .3rem;
  width: 100%;
  background: #fff;
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
  z-index: 9;
	position: absolute;
	left: 0;
	top: 1.7rem;
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

