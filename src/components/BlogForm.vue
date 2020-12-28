<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>


    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="calendar plus icon"></i>Title
      </div>
      <input type="text" placeholder="Enter blog..." v-model="blog.blog" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Description
      </div>
      <input type="text" placeholder="Enter Description..." v-model="blog.description" />
    </div>

    

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'blog-form',
  props: {
    blog: {
      type: Object,
      required: false,
      default: () => {
        return {
          blog: '',
          description: ''
        };
      }
    }
  },
  data() {
    return {
      errorsPresent: false
    };
  },
  methods: {
    onSubmit: function() {
      if (this.blog.blog === '' || this.blog.type === '') {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdate', this.blog);
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>