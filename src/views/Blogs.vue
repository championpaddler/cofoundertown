<template>
  <div>
    <h1>Blogs</h1>
    <table id="blogs" class="ui celled compact table">
      <thead>
        <tr>
         <th>  <i class="text plus icon"></i>Title </th>
          <th> <i class="info circle icon"></i>Description</th>
                    <th> <i class="book icon"></i></th>
                   <th> <i class="edit icon"></i></th>
                    <th> <i class="trash icon"></i></th>
        </tr>
      </thead>
      <tr v-for="(blog, i) in blogs" :key="i">
        <td>{{ blog.blog }}</td>
        <td>{{ blog.description.substring(0,50) }}</td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'show', params: { id: blog._id }}">Read</router-link>
        </td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'edit', params: { id: blog._id }}">Edit</router-link>
        </td>
        <td width="75" class="center aligned" @click.prevent="onDestroy(blog._id)">
          <a :href="`/blogs/${blog._id}`">Delete</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'blogs',
  data() {
    return {
      blogs: []
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm('Are you sure?');
      if (!sure) return;
      await api.deleteblog(id);
      this.flash('blog deleted sucessfully!', 'success');
      const newblogs = this.blogs.filter(blog => blog._id !== id);
      this.blogs = newblogs;
    }
  },
  async mounted() {
    this.blogs = await api.getblogs();
  }
};
</script>