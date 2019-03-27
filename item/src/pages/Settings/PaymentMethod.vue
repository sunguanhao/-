<template>
  <div class="mobile-wrap center">
		<header>
			<span class="retu"  @click="$router.push({name: 'Settings'})"></span>
			<h2>
				Payment  method
			</h2>
		</header>
		<main>
			<div class="data">
				<ul class="Payment">
					<li @click="$router.push({name: 'Alipay'})">
            <img src="../../assets/img/ZFB.png">
						<span>
							Alipay
						</span>
						<div class="data-fr fr">
							<i class="more"></i>
						</div>
					</li>
					<li @click="$router.push({name: 'PayPal'})">
            <img src="../../assets/img/PPP.png" >
						<span>
							PayPal
						</span>
						<div class="data-fr fr">
							<i class="more"></i>
						</div>
					</li>
					<li @click="$router.push({name: 'MasterCard'})">
            <img src="../../assets/img/MC.png">
						<span>
							Master card
						</span>
						<div class="data-fr fr">
							<i class="more"></i>
						</div>
					</li>
					<li @click="$router.push({name: 'Visa'})">
            <img src="../../assets/img/VISA.png">
						<span>
							Visa
						</span>
						<div class="data-fr fr">
							<i class="more"></i>
						</div>
					</li>
          <li @click="$router.push({name: 'UnionPay'})">
            <img src="../../assets/img/UNION.png">
						<span>
							UnionPay
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
  name: 'PaymentMethod',
}
</script>

<style scoped>
.data .Payment li img{
 width: .4rem;
 height: .4rem;
 margin-bottom: .1rem;
 margin-right: .3rem;
}
</style>
