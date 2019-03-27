<template>
	<div class="mobile-wrap center">
		<header>
			<span class="retu" @click="$router.push({ name: 'Wallet' })"></span>
			<h2>
				Asset record
			</h2>
		</header>
		<main>
			<div class="candy">
				<ul>
					<li
          v-for="(item, index) in list"
          :key="index"
          >
            <p>
            <span>
              <b>{{item.action}}</b>
              <i>{{item.create_time}}</i>
            </span>
            <strong>
              <i>{{item.direction}}</i>
              <i>{{item.amount}}</i>
              <i>{{item.type}}</i>
            </strong>
            </p>
					</li>
				</ul>
			</div>
		</main>
  </div>
</template>

<script>
import { record } from '../../service';
import { showLoading, hideLoading, showToast } from '../../utils/notify';
export default {
  name: 'Asset',
  data() {
    return {
      index: 0,
      list: [
        {
          action: '',
          amount: '',
          create_time: '',
          direction: '',
          id: '',
          type: '',
        },
      ],
    }
  },
  methods: {

    getrecord(){
      const params = {
      };
      showLoading();
      record (params).then(res => {
        this.list = res.list;
        hideLoading();
      }).catch(err => {
        console.log(err);
        hideLoading();
      })
    },
  },
  mounted() {
    this.getrecord();
  },

}
</script>

<style>

</style>
