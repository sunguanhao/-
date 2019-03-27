<template>
  <div class="mobile-wrap center">
		<header>
			<span class="retu" @click="$router.push({ name: 'Index' })"></span>
			<h2>
				Notice
			</h2>
		</header>
		<main>
			<div class="notice">
				<ul>
					<li class="retu" @click="$router.push({ name: 'NoticeNews' })">
						<h5>
							Title...
						</h5>
						<p>
							<span>
								2018/09/19   10:35
							</span>
							<i>by an anonymous author</i>
						</p>
					</li>
					<li>
						<h5>
							Title...
						</h5>
						<p>
							<span>
								2018/09/19   10:35
							</span>
							<i>by an anonymous author</i>
						</p>
					</li>
				</ul>
			</div>
		</main>
  </div>
</template>

<script>
export default {
  name: 'Notice',
}
</script>

<style>

</style>
