<template>
  <div class="mobile-wrap center">
		<header>
			<span class="retu"  @click="$router.push({name: 'PaymentMethod'})"></span>
			<h2>
				MasterCard
			</h2>
		</header>
		<main>
      <div class="regedit-form">
        <div class="regedit-box">
          <input type="text" placeholder="Input Name"/>
        </div>
        <div class="regedit-box">
          <input type="password" placeholder="Input Account"/>
        </div>
         <div class="regedit-box">
          <input type="password" placeholder="Input bank of deposit"/>
        </div>
         <div class="regedit-box">
          <input type="password" placeholder="Input Branch of Account Opening Bank"/>
        </div>
        <div class="Refer">
          Refer
				</div>
      </div>
		</main>
  </div>
</template>

<script>
export default {
  name: 'MasterCard',
}
</script>

<style>
.Refer{
  width: 100%;
  height: .88rem;
  line-height: .88rem;
  background:#00C4B1;
  border-radius: .06rem;
  margin-top: 1.8rem;
  text-align: center;
  font-size: .24rem;
  color: #fff;
}
</style>
