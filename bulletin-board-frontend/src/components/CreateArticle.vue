<template>
    <div>
      <h1>Create Article</h1>
      <form @submit.prevent="createArticle">
        <input v-model="title" placeholder="Article Title" required />
        <textarea v-model="content" placeholder="Article Content" required></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'CreateArticle',
    data() {
      return {
        title: '',
        content: '',
      };
    },
    methods: {
      async createArticle() {
        await axios.post('/api/articles/', {
          title: this.title,
          content: this.content,
        });
        this.$router.push('/'); // Redirect to article list
      },
    },
  };
  </script>