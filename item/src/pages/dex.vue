<template>
  <div>
    <div>{{title}}</div>
    <input type="text" v-model="mobile">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div>{{item.name}}</div>
        <div>{{item.price}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { showLoading, hideLoading } from '../utils/notify';
import { getList } from '../service';

export default {
  name: 'index',
  data() {
    return {
      mobile: '',
      title: '',
      list: [
        // {
        //   name: '',
        //   price: '',
        // }
      ],
    };
  },
  mounted() {
    showLoading();
    // axios({
    //   url: 'https://api.10010sh.cn',
    //   baseURL: '/v2/mobile/login/captcha',
    //   method: 'GET',
    //   params: {
    //     mobile: 18715380418,
    //   },
    //   headers: {
    //     'Content-Type': 'applicationx-www-form-urlen/coded',
    //   }
    // }).then(res => {
    //   hideLoading();
    //   console.log(res.data.list);
    //   this.list = res.data.list;
    // }).catch(err => {
    //   console.log(err);
    // })
  },
  methods: {
    get() {
      const params = {
        mobile: this.mobile,
      }
      getList(params).then(res => {
        this.list = res.list
      }).catch(err => {
        console.log(err);
      })
    }
  },
}
</script>
