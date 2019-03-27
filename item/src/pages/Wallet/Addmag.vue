<template>
	<div class="mobile-wrap center">
		<header>
			<span class="retu" @click="$router.push({ name: 'Wallet' })"></span>
			<h2>
				Address management
			</h2>
			<span class="add" @click="$router.push({ name: 'AddAdress' })"></span>
		</header>
		<main>
			<div class="address">
        <!-- BTC -->
				<h5>
					<span class="type">type</span>
					BTC
					<span class="more"></span>
				</h5>
				<ul>
          <li
          v-for="(item0,index) in BTC"
          :key="index">
            <p>
              <span>{{item0.address}}</span>
              <a href="#">Copy address</a>
            </p>
            <h6>
              Remarks information：{{item0.remark}}
            </h6>
          </li>
				</ul>
        <!-- EOS -->
        <h5>
					<span class="type">type</span>
					EOS
					<span class="more"></span>
				</h5>
				<ul>
          <li
          v-for="(item1,index) in EOS"
          :key="index">
            <p>
              <span>{{item1.address}}</span>
              <a href="#">Copy address</a>
            </p>
            <h6>
              Remarks information：{{item1.remark}}
            </h6>
          </li>
				</ul>
        <!-- ETH -->
        <h5>
					<span class="type">type</span>
					ETH
					<span class="more"></span>
				</h5>
				<ul>
          <li
          v-for="(item2,index) in ETH"
          :key="index">
            <p>
              <span>{{item2.address}}</span>
              <a href="#">Copy address</a>
            </p>
            <h6>
              Remarks information：{{item2.remark}}
            </h6>
          </li>
				</ul>
        <h5>
					<span class="type">type</span>
					USDT
					<span class="more"></span>
				</h5>
				<ul>
          <li
          v-for="(item3,index) in USDT"
          :key="index">
            <p>
              <span>{{item3.address}}</span>
              <a href="#">Copy address</a>
            </p>
            <h6>
              Remarks information：{{item3.remark}}
            </h6>
          </li>
				</ul>
			</div>
		</main>
  </div>
</template>

<script>
import { addressquery } from '../../service';
import { showLoading, hideLoading, showToast } from '../../utils/notify';
export default {
  name: 'Addmag',
  data(){
    return {
      index: 0,
      BTC:[
        {
          address: '',
          remark: ''
        }
      ],
      EOS:[
        {
          address: '',
          remark: ''
        }
      ],
      ETH:[
        {
          address: '',
          remark: ''
        }
      ],
      USDT:[
        {
          address: '',
          remark: ''
        }
      ],
    }
  },
  methods: {
    addressquery(){
      const params = {
      };
      showLoading();
      addressquery (params).then(res => {
        hideLoading();
        this.BTC = res.list.BTC
        this.EOS = res.list.EOS
        this.ETH = res.list.ETH
        this.USDT = res.list.USDT
      }).catch(err => {
        hideLoading();
      })
    },
    /* goback(){
        this.$router.go(-1)
    }, */
  },
  mounted() {
    this.addressquery();
  },
}
</script>

<style scoped>
header{
  position: fixed;
}
.address{
  padding-top:.98rem;
}
h5{
  font-size: 800 .3rem "";
}

</style>
