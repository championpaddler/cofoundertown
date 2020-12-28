<template>
  <div>
    <h1>Reading Decrypted blog</h1>   
    <div class="ui labeled input fluid">
      <div class="ui label">
      <i class="blogs icon"></i>  blog
      </div>
      <input type="text" readonly  :value="blog.blog"/>
    </div>
     <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="info circle icon"></i> Details
      </div>
      <input type="text" readonly  :value="blog.description"/>
    </div>
    <div class="actions">
      <router-link :to="{ name: 'edit', params: { id: this.$route.params.id }}">
        Edit blog
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'show',
  data() {
    return {
      blog: ''
    };
  },
  async mounted() {
    this.blog = await api.getblog(this.$route.params.id);
  }
};
</script>

<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>