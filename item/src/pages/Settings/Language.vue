<template>
<div class="mobile-wrap center">
		<header>
			<span class="retu" @click="$router.push({ name: 'Settings' })"></span>
			<h2>
				Language
			</h2>
		</header>
		<main>
			<div class="language">
				<ul>
					<li class="acti">
							English
					</li>
					<li class="chinese">
						<span>
							Chinese
						</span>
					</li>
					<li>
						<span>
							chinese traditional
						</span>
					</li>
					<li>
						<span>
							Vietnamese
						</span>
					</li>
				</ul>
			</div>
		</main>
    </div><!--mobile_wrap-->
</template>

<script>
export default {
name: 'Language',
}
</script>

<style>

</style>
