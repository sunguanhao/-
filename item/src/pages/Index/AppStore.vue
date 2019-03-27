<template>
	<div class="mobile-wrap center">
		<header>
			<span class="retu" @click="$router.push({ name: 'Index' })"></span>
			<h2>
				Store
			</h2>
		</header>
		<main>
			<div class="bannar">
        <div class="swipe">
          <mt-swipe :auto="2000" :defaultIndex="0">
            <mt-swipe-item>
              <div>
                <img src="../../assets/img/img1.jpg" alt="">
              </div>
            </mt-swipe-item>
            <mt-swipe-item>
              <div>
                <img src="../../assets/img/img1.jpg" alt="">
              </div>
            </mt-swipe-item>
            <mt-swipe-item>
              <div >
                <img src="../../assets/img/img1.jpg" alt="">
              </div>
            </mt-swipe-item>
          </mt-swipe>
        </div>
			</div>
      <div class="search">
        <input  placeholder="App name"  />
        <div class="sear">search</div>
      </div>
      <div class="recommend">
        <p>RECOMMEND APPS</p>
        <ul class="list1">
          <li v-for="(item, index) in tab" :key="index" >
            <img :src="item.img" alt="">
            <span>{{item.title}}</span>
          </li>
        </ul>
      </div>
      <div class="free recommend">
        <p>FREE APPS</p>
        <div class="list2">
          <div class="lis1">
            <img src="@/assets/img/ico1.png" alt="" />
            <div class="center">
              <span></span>
              <span></span>
            <div class="install">install</div>
            </div>
          </div>
        </div>
      </div>
      <div class="pay">
      </div>
		</main>
    </div>
</template>

<script scoped>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  name: 'AppStore',
  data() {
    return {
      tab:[
        {
          img: require('@/assets/img/ico1.png'),
          title: 'MEIYOU',
        },
        {
          img: require('@/assets/img/ico1.png'),
          title: 'MEIYOU',
        },{
          img: require('@/assets/img/ico1.png'),
          title: 'MEIYOU',
        },{
          img: require('@/assets/img/ico1.png'),
          title: 'MEIYOU',
        },{
          img: require('@/assets/img/ico1.png'),
          title: 'MEIYOU',
        },{
          img: require('@/assets/img/ico1.png'),
          title: 'MEIYOU',
        },{
          img: require('@/assets/img/ico1.png'),
          title: 'MEIYOU',
        },{
          img: require('@/assets/img/ico1.png'),
          title: 'MEIYOU',
        },{
          img: require('@/assets/img/ico1.png'),
          title: 'MEIYOU',
        },{
          img: require('@/assets/img/ico1.png'),
          title: 'MEIYOU',
        },{
          img: require('@/assets/img/ico1.png'),
          title: 'MEIYOU',
        },
      ]
    };
  },
  components: {
    mtSwipe: Swipe,
    mtSwipeItem: SwipeItem,
  },
  mounted() {
  },
  methods: {
  },
}
</script>
<style>
.bannar{
	width: 100%;
  padding: 0 .3rem;
  border-radius: .1rem;
  overflow: hidden;
}
.bannar img{
	width: 100%;
}
.bannar .swipe{
  height: 2.8rem;
}
.search{
  width: 100%;
  margin-top: .24rem;
  margin-bottom: .42rem;
  display: flex;
  padding: 0 .3rem 0 .3rem;
  justify-content: space-around;
}
.search input{
  width: 4.67rem;
  height: .68rem;
  border-radius: .10rem;
  border: #313131 .01rem solid;
  text-indent: .18rem;
}
.search .sear{
  width: 1.98rem;
  height: .68rem;
  margin-right: 0;
  border-radius: .06rem;
  background: #00C4B1;
  line-height: .68rem;
  text-align: center;
  color: #fff;
  font-size: .3rem;
}
.recommend{
	width: 100%;
	padding: .3rem .3rem;
}
.recommend p{
  width: auto;
  font: 800 .26rem "PingFangSC-Medium";
  border-left: .08rem solid #00C4B1;
  color: #292929;
  text-indent: .15rem;
}
.recommend ul{
  width: 6.9rem;
  display: flex;
  flex-wrap: wrap;
  padding-top: .3rem;
}
.recommend ul li{
  width: .88rem;
  margin: 0 .25rem;
}

.recommend ul li img{
  width: .88rem;
  height: .88rem;
  margin-bottom: .1rem;
}
.recommend ul li span{
  display: block;
  width: .88rem;
  height: .2rem;
  line-height: .2rem;
  font-size: .18rem;
  text-align: center;
}
.free .list2{
  width: 6.9rem;
  display: flex;
  padding-top: .3rem;

}




</style>

