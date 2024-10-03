import { createRouter, createWebHistory } from 'vue-router';
import ArticleList from '../components/ArticleList.vue';
import CreateArticle from '../components/CreateArticle.vue';
import ArticleDetail from '../components/ArticleDetail.vue';

const routes = [
    { path: '/', component: ArticleList },
    { path: '/create', component: CreateArticle },
    { path: '/articles/:id', component: ArticleDetail, props: true },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;