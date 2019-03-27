<template>
  <div class="Content">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '@/components/Footer';

export default {
  name: 'Content',
  components: {
    Footer,
  }
}
</script>
