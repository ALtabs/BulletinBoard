<template>
  <div>
    <h1>Articles</h1>
    <router-link to="/create">Create New Article</router-link>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <router-link :to="`/articles/${article.id}`">{{ article.title }}</router-link>
        <p>{{ article.content.substring(0, 100) }}...</p>
        <button @click="deleteArticle(article.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ArticleList',
  data() {
    return {
      articles: [],
    };
  },
  created() {
    this.fetchArticles();
  },
  methods: {
    async fetchArticles() {
      const response = await axios.get('/api/articles/');
      this.articles = response.data;
    },
    async deleteArticle(id) {
      await axios.delete(`/api/articles/${id}/`);
      this.fetchArticles(); // Refresh the list
    },
  },
};
</script>