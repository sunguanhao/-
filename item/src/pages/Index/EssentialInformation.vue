<template>
  <div class="mobile-wrap center">
		<header>
			<span class="retu"  @click="$router.push({name: 'Settings'})"></span>
			<h2>
				Essential information
			</h2>
		</header>
		<main>
			<div class="data">
				<ul>
					<li>
						<span>
							Head portrait
						</span>
						<div class="data-fr fr">
							<div class="data-img fl">
								<img src="../../assets/img/ic4.png" alt="" />
                <input type='file' name='myPhoto' accept="image/gif,image/jpeg,image/jpg,image/png" value="" class="imgFile" @change="imgChang">
							</div>
							<i class="more"></i>
						</div>
					</li>
					<li>
						<span>
							User name
						</span>
						<div class="data-fr fr">
							<em>
								Tom
							</em>
						</div>
					</li>
					<li @click="$router.push({name: 'ChangePassward'})">
						<span>
							Change Password
						</span>
						<div class="data-fr fr">
							<i class="more"></i>
						</div>
					</li>
					<li @click="$router.push({name: 'ModifyPayPassward'})">
						<span>
							Modify Payment Password
						</span>
						<div class="data-fr fr">
							<i class="more"></i>
						</div>
					</li>
				</ul>
			</div>
		</main>
  </div>
</template>
<script>
export default {
  name: 'EssentialInformation',
  methods:{
    goback(){
      this.$router.go(-1)
    },
    imgChang (event) {
      console.log(event,'2344')
      console.log(event.target.files[0],'flie')
    }
  },
}
</script>
<style scoped>
header{
	width: 100%;
	height: .9rem;
	background-color: #fff;
	position: relative;
}
.data-img{
  position: relative;
}
.imgFile{
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: .5rem;
  height: 1rem;
  opacity: 0;
}
</style>

