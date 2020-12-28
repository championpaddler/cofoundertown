<template>
  <div>
    <h1>Edit blog</h1>
    <blog-form @createOrUpdate="createOrUpdate" :blog=this.blog></blog-form>
  </div>
</template>

<script>
import blogForm from '../components/BlogForm.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'edit',
  components: {
    'blog-form': blogForm
  },
  data: function() {
    return {
      blog: {}
    };
  },
  methods: {
    createOrUpdate: async function(blog) {
      await api.updateblog(blog);
      this.flash('blog updated sucessfully!', 'success');
      this.$router.push(`/blogs/${blog._id}`);
    }
  },
  async mounted() {
    this.blog = await api.getblog(this.$route.params.id);
  }
};
</script>