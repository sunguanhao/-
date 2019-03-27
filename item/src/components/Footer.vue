<template>
<div class="footer">
  <div class="fix-menu">
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="to(item, index)">
				<img :src="showIndex === item.url ? item.indexImg : item.img" alt="">
			</li>
    </ul>
  </div>
</div>
</template>


<script>
export default {
  name: 'Footer',
  data() {
    return {
      list: [
        {
          img: require('../assets/img/ico6.png'),
          indexImg: require('../assets/img/ico6-1.png'),
          url: 'Index',
        },
        {
          img : require('../assets/img/ico7.png'),
          indexImg: require('../assets/img/ico7-1.png'),
          url: 'Wallet',
        },
        {
          img : require('../assets/img/ico8.png'),
          indexImg: require('../assets/img/ico8-1.png'),
          url: 'Deal',
        },
        {
          img : require('../assets/img/ico9.png'),
          indexImg: require('../assets/img/ico9-1.png'),
          url: 'Contact',
        },
        {
          img : require('../assets/img/ico10.png'),
          indexImg: require('../assets/img/ico10-1.png'),
          url: 'Settings',
        },
      ],
    };
  },
  computed: {
    showIndex() {
      return this.$route.name;
    }
  },
  methods: {
    to(item, index) {
      /* this.showIndex = item.url; */
      this.$router.push({ name: item.url });

    }
  }
};
</script>

<style scoped>
.fix-menu{
	width: 100%;
	height: 1rem;
	background-color: #505253;
	padding: 0 .3rem;
	position: fixed;
	left: 0;
  bottom: 0;
}
.fix-menu	ul {
  height: 100%;
}
.fix-menu ul li{
	width: 20%;
	height: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
.fix-menu ul li	img {
	display: inline-block;
	width: .6rem;
	height: .6rem;
}

</style>


