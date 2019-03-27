<template>
  <div class="mobile-wrap center">
		<header>
			<span class="retu" @click="$router.push({ name: 'Settings' })"></span>
			<h2>
				Feedback
			</h2>
		</header>
		<main>
			<div class="feedback">
				<form>
					<div class="feedback-box">
						<label>
							E-mail addres：
						</label>
						<input type="text" name="" id="" value="" placeholder="fill in your mailbox for easy contact with you." />
					</div>
					<div class="feedback-box">
						<label>
							Opinion content：
						</label>
						<textarea placeholder="Please fill in your comments and thank you
for your valuable comments."></textarea>
					</div>
					<div class="feedback-box">
						<input type="submit" name="" id="" value="Refer" />
					</div>
				</form>
			</div>
		</main>
    </div>
</template>

<script>
import { feedback } from '../../service';
import { showLoading, hideLoading, showToast } from '../../utils/notify';
export default {
name: 'Feedback',
data(){
  return{

  }
},
methods: {

},

}
</script>

<style>

</style>
