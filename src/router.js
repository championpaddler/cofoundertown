import Vue from 'vue';
import Router from 'vue-router';
import Blogs from './views/Blogs.vue';
import New from './views/New.vue';
import Show from './views/Show.vue';
import Edit from './views/Edit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/blogs'
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blogs
    },
    {
      path: '/blogs/new',
      name: 'new-blog',
      component: New
    },
    {
      path: '/blogs/:id',
      name: 'show',
      component: Show
    },
    {
      path: '/blogs/:id/edit',
      name: 'edit',
      component: Edit
    }

  ]
});