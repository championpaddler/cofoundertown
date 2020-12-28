<template>
  <div>
    <h1>New blog</h1>
    <blog-form @createOrUpdate="createOrUpdate"></blog-form>
  </div>
</template>

<script>
import blogForm from '../components/BlogForm.vue';
import { api } from '../helpers/helpers';
export default {
  name: 'new-blog',
  components: {
    'blog-form': blogForm
  },
  methods: {
    createOrUpdate: async function(blog) {
      await api.createblog(blog);
      this.flash('blog created', 'success');
      this.$router.push(`/blogs`);
    }
  }
};
</script>