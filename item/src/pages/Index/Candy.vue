<template>
  <div class="mobile-wrap center">
		<header>
			<span class="retu" @click="$router.push({ name: 'Index' })"></span>
			<h2>
				Candy
			</h2>
		</header>
		<main>
			<div class="candy">
				<ul>
					<li>
						<p>
							<span>
								<b>Get EOS</b>
								<i>2018/09/19   10:35</i>
							</span>
							<strong>
								+0.00502  EOS
							</strong>
						</p>
					</li>
					<li>
						<p>
							<span>
								<b>Get EOS</b>
								<i>2018/09/19   10:35</i>
							</span>
							<strong>
								+0.00502  EOS
							</strong>
						</p>
					</li>
				</ul>
			</div>
		</main>
  </div>
</template>
<script>
export default {
name: 'Candy',
}
</script>
<style>

</style>
