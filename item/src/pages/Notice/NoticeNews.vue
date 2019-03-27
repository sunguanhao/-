<template>
  <div class="mobile-wrap center">
		<header>
			<span class="retu" @click="$router.push({ name: 'Notice' })"></span>
			<h2>
				News
			</h2>
		</header>
		<main>
      <ul class="News">
        <li>
          <div class="title">Title</div>
          <div class="upTime">
            <span>2018/09/19   10:35</span>
          </div>
          <p>
            Blockchain is named very vividly: a series of "blocks" generate Blockchain is named very vividly: a series of "blocks" generate Blockchain is named very vividly: a series of "blocks" generate Blockchain is named very vividly: a series of "blocks" generate Blockchain is named very vividly: a series of "blocks" generate
          </p>
        </li>
      </ul>
		</main>
  </div>
</template>

<script>
export default {
  name: 'NoticeNews',
}
</script>

<style scoped>
header{
  position: fixed;
}
.News{
  width: 100%;
  padding: 0 .3rem;
  padding-top: 1.7rem;
}
.News li{
  width: 100%;
}
.News .title{
  height: .36rem;
  line-height: .36rem;
  color: #222222;
  font-size: .36rem;
  margin-bottom: .29rem;
}
.News .upTime{
  width: 100%;
  height: .54rem;
  line-height: .54rem;
  border-bottom: .01rem solid #93A8B2;
  margin-bottom: .57rem;
}
.News .upTime span{
  font-size: .2rem;
  color:#93A8B2;

}

.News li p{
  width: 100%;
  Word-break:break-all;
  word-wrap:break-word;
  text-indent: .2rem;
}
</style>
