<template>
  <div>
    <h1>Articles</h1>
    <button @click="navigateToCreate">Create New Article</button>
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
import { useRouter } from 'vue-router';

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
      const response = await axios.get('articles/');
      this.articles = response.data;
    },
    async deleteArticle(id) {
      await axios.delete(`articles/${id}/`);
      this.fetchArticles(); // Refresh the list
    },

    navigateToCreate() {
      const router = useRouter(); // Move the router call here
      router.push('/create'); // Use the router to navigate
    },

    
  },
};
</script>