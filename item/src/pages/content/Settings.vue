<template>
  <div class="mobile-wrap center">
		<header>
			<h2>
				Settings
			</h2>
		</header>
		<main>
			<div class="set">
				<ul>
					<li @click="$router.push({ name: 'EssentialInformation' })">
						<span>
							Essential information
						</span>
						<div class="set-fr fr">
							<i class="more"></i>
							<em>Revise</em>
						</div>
					</li>
					<li @click="$router.push({ name: 'Feedback' })">
						<span>
							Feedback
						</span>
						<div class="set-fr fr">
							<i class="more"></i>
						</div>
					</li>
					<li @click="$router.push({ name: 'Language' })">
						<span>
							Language
						</span>
						<div class="set-fr fr">
							<i class="more"></i>
						</div>
					</li>
					<li @click="$router.push({ name: 'ContactUs' })">
						<span>
							Contact us
						</span>
						<div class="set-fr fr">
							<i class="more"></i>
						</div>
					</li>
          <li @click="$router.push({ name: 'PaymentMethod' })">
						<span>
							Payment method
						</span>
						<div class="set-fr fr">
							<i class="more"></i>
						</div>
					</li>
					<li>
						<span>
							Version number
						</span>
					</li>
				</ul>
				<div class="set-submit">
					<input type="submit" name="" id="" value="Log off" />
				</div>
			</div>
		</main>
    </div>
</template>

<script>
export default {
 name: 'Settings',
 methods: {
 },
}
</script>
<style scoped>
.set{
	width: 100%;
	padding: 0 .3rem;
	padding-top: .2rem;
}

.set ul{
	display: table;
	width: 100%;
	min-height: 9.5rem;
}
.set ul li{
	width: 100%;
	height: .92rem;
	border-bottom: .01rem solid #93a4ab;
	line-height: .92rem;
}
.set ul li span{
	font-size: .28rem;
	color: #333;
}
.set ul li .set-fr i.more{
	display: inline-block;
	width: .14rem;
	height: .28rem;
	background: url(../../assets/img/ic3.png)center no-repeat;
	-webkit-background-size: 100% 100%;
	background-size: 100% 100%;
	margin-top: .32rem;
	float: right;
}
.set ul li .set-fr em{
	color: #95a4aa;
	font-size: .26rem;
	margin-right: .2rem;
}
.set ul li:last-child{
	border-bottom: none;
}
.set .set-submit{
	width: 100%;
	display: table;
}
.set .set-submit input{
	width: 100%;
	height: .88rem;
	color: #fff;
	font-size: .3rem;
	border: none;
	border-radius: .1rem;
	background-color: #00c4b1;
}

</style>
