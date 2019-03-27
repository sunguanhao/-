<template>

<div class="mobile-wrap center">
		<header>
			<span class="retu"></span>
			<h2>
				Contacts
			</h2>
		</header>
		<main>
			<div class="contact-sea">
				<input type="text" name="" id="" value="" placeholder="User name/ID"  v-model="friend"/>
				<input type="submit" name="" id="" value="Add" class="add-btn" @click="addfriend" />
			</div>
			<div class="mail">
				<ul>
					<li>
						<h4><img src="../../assets/img/ic2.png" alt="" /></h4>
						<div class="mail-inf fr" @click="$router.push({path : 'Withchat', query: { message_id:message_id,username:username }})">
							<p>
							<b>{{username}}</b>
							<span>
								{{create_time}}
							</span>
							</p>
							<i>{{count}}</i>
						</div>
					</li>
				</ul>
			</div>
		</main>
    </div>
</template>

<script>
import { showLoading, hideLoading, showToast } from '../../utils/notify';
import { getCookie, setCookie } from '../../utils/cookies';
import {  messagequery, messageinput, } from '../../service';
export default {
  name: 'Contact',
  data(){
    return{
      friend :'',
      count: '',
      create_time: '',
      username: '',
      message_id: '',
    }
  },
  computed: {
  },
  methods: {
    getmessage() {
      const params = {
      };
      //showLoading();
      setTimeout(() => {
        messagequery(params).then(res => {
          for(let i = 0 ; i <=list.length ;i ++){

          }
          this.count = res.list[length].count
          this.create_time = res.list[length].create_time
          this.username = res.list[length].username
          this.avatar = res.list[length].avatar
          this.content = res.list[length].content
          this.message_id = res.list[length].message_id
         /*  console.log(res); */
          console.log(res.list[length].count)
         /*  console.log(res.list.count,'res.list.count') */
        }).catch(err => {
          console.log(err);
        });
      //hideLoading();
      }, 2000)
    },
    addfriend() {
      const params = {
        id:this.friend,
      };
      //showLoading();
      setTimeout(() => {
        messageinput(params).then(res => {
            console.log(res)
        }).catch(err => {
          console.log(err);
        });
      //hideLoading();
      }, 2000)
    },

  },
  mounted() {
    this.getmessage();
   /*  message_id(){
      return this.message_id;
    }; */
  },


}
</script>

<style scoped>
.contact{
	width: 100%;
	display: table;
}
.contact-item {
	width: 100%;
	display: table;
	margin-top: .5rem;
	margin-bottom: .3rem;
	display: inline-block;
	text-align: center;
}
.contact-item h4 img{
	height: 1.28rem;
}
.contact-item p{
	line-height: .5rem;
	font-size: .26rem;
	color: #333;
	padding-top: .12rem;
}
.contact-item h6{
	margin: 0;
	line-height: .44rem;
	font-size: .24rem;
	color: #333;
	font-weight: bold;
}
</style>
