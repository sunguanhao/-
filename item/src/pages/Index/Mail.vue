<template>
<div class="mobile-wrap center">
		<header>
			<span class="retu" @click="$router.push({ name: 'Index' })"></span>
			<h2>
				Mail
			</h2>
		</header>
		<main>
			<div class="mail">
				<ul>
					<li>
						<h4><img src="../../assets/img/ic2.png" alt="" /></h4>
						<div class="mail-inf fr">
							<p>
							<b>User name</b>
							<span>
								2018/09/19   10:35
							</span>
							</p>
							<i>1</i>
						</div>
					</li>
					<li>
						<h4><img src="../../assets/img/ic2.png" alt="" /></h4>
						<div class="mail-inf fr">
							<p>
							<b>User name</b>
							<span>
								2018/09/19   10:35
							</span>
							</p>
							<i>1</i>
						</div>
					</li>
				</ul>
			</div>
		</main>
    </div><!--mobile_wrap-->
</template>

<script>
export default {
name: 'Mail',
}
</script>

<style>

</style>
