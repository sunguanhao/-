<template>
  <div class="mobile-wrap center">
		<header>
			<span class="retu" @click="$router.push({name: 'Deal'})"></span>
			<h2>
				Order details
			</h2>
		</header>
		<main>
			<div class="order-details">
				<div class="order-details-data">
					<span>
						Transaction number
					</span>
					<em>
						7172771878328718
					</em>
				</div>
				<div class="order-details-data">
					<span>
						Counter account
					</span>
					<em>
						Real name
					</em>
				</div>
				<div class="order-details-data">
					<span>
						Time
					</span>
					<em>
						2018/10/23  10:53
					</em>
				</div>
				<div class="order-details-data">
					<span>
						Price(CNY)
					</span>
					<em>
						45100.00
					</em>
				</div>
				<div class="order-details-data">
					<span>
						amount
					</span>
					<em>
						3.0000
					</em>
				</div>
				<div class="order-details-data">
					<span>
						Amount of money
					</span>
					<em>
						145000
					</em>
				</div>
				<div class="order-details-pay">
					<span>
						Payment method
					</span>
					<ul>
						<li class="acti"></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div class="order-details-user">
					<h5>
						<span>
							Alipay name：Tom<br />
							Account：327173772111
						</span>
						<a href="#">Contact each other</a>
					</h5>
					<h4>
						<img src="img/wx2.jpg" alt="" />
					</h4>
					<h6>
						<a href="#">Paid</a>
						<a href="#" class="cancellation">Cancellation of order</a>
					</h6>
				</div>
			</div>
		</main>
    </div>
</template>

<script>
export default {
name: 'OrderDetails',
}
</script>

<style>

</style>
