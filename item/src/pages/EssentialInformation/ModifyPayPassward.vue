<template>
  <div class="mobile-wrap center">
		<header>
			<span class="retu" @click="$router.push({name : 'EssentialInformation'})"></span>
			<h2>
				Modify Payment Password
			</h2>
		</header>
		<main>
			<div class="password">
				<form >
					<div class="password-box">
						<label>
							Old password
						</label>
						<input type="password"  value="" placeholder="Please enter the old password" />
					</div>
					<div class="password-box">
						<label>
							New password
						</label>
						<input type="password"  value="" placeholder="Please enter the new password" />
					</div>
					<div class="password-box password-box-center">
						<input type="submit"  value="Confirm revision" />
					</div>
				</form>
			</div>
		</main>
  </div>
</template>

<script>
export default {
  name: 'ModifyPayPassward',
}
</script>

<style>

</style>
