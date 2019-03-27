<template>
  <div class="mobile-wrap center">
		<header>
			<span class="retu" @click="$router.push({ name: 'Index' })"></span>
			<h2>
				Referral
			</h2>
		</header>
		<main>
			<div class="referral">
				<div class="my-superior">
					<h5>
						My superior
					</h5>
					<p>
						<span>
							Tom**
						</span>
						<em>
							13321128219
						</em>
					</p>
				</div>
				<div class="referral-list">
					<h5>
						My subordinates
					</h5>
					<ul>
						<li>
							<h4>
								<span>
									One-level
								</span>
							</h4>
							<p>
								<span>
									Tom**
								</span>
							</p>
							<p>
								<span>
									Tom**
								</span>
							</p>
						</li>
						<li>
							<h4>
								<span>
									Two-level
								</span>
							</h4>
							<p>
								<span>
									Tom**
								</span>
							</p>
							<p>
								<span>
									Tom**
								</span>
							</p>
						</li>
						<li>
							<h4>
								<span>
									Three-level
								</span>
							</h4>
							<p>
								<span>
									Tom**
								</span>
							</p>
							<p>
								<span>
									Tom**
								</span>
							</p>
						</li>
					</ul>
				</div>
			</div>
		</main>
    </div>
</template>

<script>
export default {
name: 'Referral',
}
</script>

<style>

</style>
