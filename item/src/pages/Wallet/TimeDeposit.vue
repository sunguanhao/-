<template>
	<div class="mobile-wrap center">
		<header>
			<span class="retu" @click="$router.push({ name: 'Wallet' })"></span>
			<h2>
				Time deposit
			</h2>
		</header>
		<main>
			<div class="deposit-form">
				<form>
					<div class="deposit-box">
						<label>Amount</label>
						<span>
							{{number}} EOS
						</span>
					</div>
					<div class="deposit-box deposit-box-item">
						<label>Yesterday's earnings</label>
						<span>
							{{ret}} EOS
						</span>
					</div>
					<div class="deposit-submit">
						<div class="deposit-input fl">
							<input type="text"   placeholder="Input amount" v-model="num"/>
							<em>
								EOS
							</em>
						</div>
						<div class="deposit-button fr">
							<input type="submit" name="" id="" value="OK"  @click="innerenter" />
						</div>
					</div>
				</form>
			</div>
       <div class="alert">
    </div>
    <div class="mask" v-show="maskshow">
      <div class="popup">
          <ul>
            <li>Type</li>
            <li>BTC</li>
            <li>ETH</li>
            <li>EOS</li>
          </ul>
          <input type="text" placeholder="Input amount" v-model="num"/>
          <div class="btn">
            <div class="btn1" @click="enter">
              OK
            </div>
            <div class="btn2" @click="goback">
              RETURN
            </div>
          </div>
      </div>
    </div>
		</main>
    </div>
</template>

<script>
import { depositquery, depositinput } from '../../service';
import { showLoading, hideLoading, showToast } from '../../utils/notify';
export default {
  name: 'TimeDeposit',
  data(){
    return{
      maskshow: true,
      number: '',
      ret: '',
      num:''
    }
  },
  methods: {
    getdeposit(){
       const params = {
       number: this.number,
       };
       depositquery (params).then(res => {
            // console.log(res.number);
            // console.log(res);
            this.ret = res.ret;//
            this.number = res.number;//余额
            }).catch(err => {
              console.log(err);
            })
    },
    enter(){
      //this.maskshow =! this.maskshow;
      const params = {
        num:this.num,
       };
      showLoading();
      depositinput (params).then(res => {
        //发送请求成功
        //console.log(res);
        hideLoading();
        this.num = res.num;
        this.maskshow =! this.maskshow;
        if(res.code == 0){
          showToast(res.msg)
        };
      }).catch(err => {
        hideLoading();
        console.log(err);
      })
    },
    innerenter(){
       const params = {
        num:this.num,
       };
       showLoading();
       depositinput (params).then(res => {
             //发送请求成功
          if(res.code == 0){
            showToast(res.msg)
          }
          hideLoading();
          /* console.log(res); */
          this.num = res.num;
        }).catch(err => {
          hideLoading();
           console.log(err);
        })
    },
    goback(){
        this.$router.go(-1)
    },
  },
  mounted() {
  this.getdeposit();
  },
}
</script>
<style scoped>
.mask{
  width: 100%;
  height: 100%;
  position:fixed;
  background: rgba(0, 0, 0, 0.7);
  left: 0;
  right: 0;
  top:0 ;
  bottom: 0;
  margin: auto;
}
.popup{
  width: 5.66rem;
  height: 4.85rem;
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
}
.popup ul{
  width: 4.42rem;
  height: 1.6rem;
  padding: .54rem 0;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.popup ul li{
  height: .49rem;
  width: 1rem;
  line-height:.49rem;
  font-size: .24rem;
}
.popup ul li:last-child{
  border: .01rem solid #00C4B1;
}
.popup input{
  width: 4.42rem;
  height: .64rem;
  line-height: .64rem;
  margin: .43rem auto;
  border: solid .01rem #93A8B2;
  font-size: .23rem;
  text-indent: .22rem;
}
.popup .btn{
  width: 4.42rem;
  margin: .41rem auto;
  display: flex;
  justify-content: space-between;
}
.popup .btn .btn1,.btn2{
  width: 1.92rem;
  height: .64rem;
  line-height: .64rem;
  font-size:.2rem;
  margin: 0;
}
.popup .btn .btn1{
  background: #00C4B1;
  color: #fff;
  border-radius: .06rem;
}
.popup .btn .btn2{
  color: #00C4B1;
}
</style>
