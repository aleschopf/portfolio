import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import AboutView from './views/AboutView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
    },
    {
        path: '/projects',
        name: 'projetcs',
        component: ProjectsView,
    },
]

const router = createRouter({
    history: createWebHistory("/portfolio/"),
    routes,
})

export default router
