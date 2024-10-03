<template>
    <div>
      <h1>{{ article.title }}</h1>
      <p>{{ article.content }}</p>
      <p>Created on: {{ article.created_at }}</p>
      <button @click="addComment">Comment</button>
      <div v-if="comments.length">
        <h2>Comments</h2>
        <ul>
          <li v-for="comment in comments" :key="comment.id">{{ comment.content }}</li>
        </ul>
      </div>
      <div v-if="showCommentForm">
        <textarea v-model="commentContent" placeholder="Comment content"></textarea>
        <button @click="submitComment">Add Comment</button>
      </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'ArticleDetail',
  data() {
    return {
      article: null,
    };
  },
  mounted() {
    // Fetch the article details when the component is mounted
    this.fetchArticle();
  },
  methods: {
    async fetchArticle() {
      try {
        // Replace 'articleId' with the actual ID passed as a prop or route parameter
        const response = await axios.get(`articles/${this.$route.params.id}/`);
        this.article = response.data;
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    },
  },
};
</script>  
  