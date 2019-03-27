<template>
	<div class="m-bill-service m-paddingTwo">
		<div class="Selection">
			<div>type</div>
			<div class="zk-btn" @click="zkClick">{{selection.title}}</div>
			<div>></div>
		</div>
		<div ref='list' class="list">
			<div v-for="(item, index) in seletInfo" :key="index" @click="selet(index)">{{item.title}}</div>
		</div>
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
					title: 'BTV',
					id: 1,
				},
				{
					title: 'EOS',
					id: 2,
				},
				{
					title: 'USDH',
					id: 3,
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
.Selection {
	display: flex;
	div:nth-child(2) {
		flex: 1;
		text-align: center;
	}
	>div:first-child {
		width: 60/100rem;
	}
	>div:last-child {
		width: 60/100rem;
	}
}
.zk-btn {
	cursor: pointer;
}
.list{
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	margin: auto;
	background: #fff;
	width: 255/100rem;
	max-height: 0;
	overflow: hidden;
	-webkit-transition: max-height .3s;
	transition: max-height .3s;
	div {
		height: 40/100rem;
		text-align: center;
	}
}
.list.open{
	max-height: 300px;
	-webkit-transition: max-height .5s;
	transition: max-height .5s;
}
</style>
