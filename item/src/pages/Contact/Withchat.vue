<template>
	<div class="mobile-wrap center">
		<header>
			<span class="retu" @click="$router.push({ name: 'Contact' })"></span>
			<h2>
				With {{username}}
			</h2>
		</header>
		<main class="scrollMain"   ref='scroll'>
     	<div class="chat scroll">
       <div class="chat-reply" v-for="(item ,index) in getChatlist" :key="index" :class="{'chat-reply-other': item.self == 1,'': item.self == 0}">
          <div class="chat-reply-time">
              <i>{{item.create_time}}</i>
          </div>
          <div class="chat-reply-col">
            <div class="chat-reply-inf">
                <h4>
                  <img src="../../assets/img/ic29.png" alt="" />
                </h4>
                <p>
                    {{item.username}}
                </p>
            </div>
            <div class="chat-reply-dialogue">
                <p>
                    {{item.content}}
                </p>
            </div>
          </div>
       </div>
			</div>
			<div class="fix-chat">
				<input type="text" name="" id="txt" value="" placeholder="Please input..." v-model="chat" />
				<input type="submit" name="" id="" value="send" @click="send" />
			</div>
		</main>
    </div>
</template>

<script>
import { showLoading, hideLoading, showToast } from '../../utils/notify';
import { chatquery, chatinput, } from '../../service';
export default {
  name: 'Withchat',
  created() {

  },
  data(){
    return{
      message_id: this.$route.query.message_id,
      username: this.$route.query.username,
      chat: '',
      getChatlist: [],
      list: [],
      // scroll: ''
    }
  },
  computed: {

  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.scroll.scrollTop = this.$refs.scroll.scrollHeight
    })
  },
  methods: {
    getchat(){
      const params = {
           message_id: this.message_id,

      };
      //showLoading();
      // setTimeout(() => {
        chatquery(params).then(res => {
            this.getChatlist = res.data;
            this.$nextTick(() => {
              this.$refs.scroll.scrollTop = this.$refs.scroll.scrollHeight
            })
          }).catch(err => {
            console.log(err);
          });
      //hideLoading();
      // }, 2000)
    },
    send(){
      var date = new Date()
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var ri = date.getDate();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var second = date.getSeconds();
      // var year = date.getFullYear();

      this.getChatlist.push({
              id: 1,
              content: this.chat,
              create_time: year + '-' + month + '-' + ri + ' ' + hours + ':' + minutes + ':' + second,
              self: 1
            })
       const params = {
          message_id: this.message_id,
          content: this.chat,
      };
      this.$nextTick(() => {
        this.$refs.scroll.scrollTop = this.$refs.scroll.scrollHeight
      })
      this.chat = '';
      // showLoading();
      // setTimeout(() => {
        chatinput(params).then(res => {
       /*    res.data = [{
              id: 1,
              content: 'sss',
              create_time: '2012-3-2 33:33:33'
            },{
              id: 2,
              content: 'xxxx',
              create_time: '2012-4-5 55:55:06'
            }] */
            this.getChatlist = res.data;
            hideLoading();
          }).catch(err => {
            //console.log(err);
            hideLoading();
          });
      //hideLoading();
      // }, 2000)
    }
  },
  mounted() {
    this.getchat();
  },
}
</script>

<style>
.scrollMain{
  height: 13rem;
  overflow-y: auto;
}
.chat{
  margin-bottom: 1.28rem;
}
</style>
