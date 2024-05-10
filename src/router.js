import { createWebHistory, createRouter } from 'vue-router'
import TodoList from './components/pages/TodoList/TodoList.vue'
import About from './components/pages/About/About.vue'
import Contact from './components/pages/Contact/Contact.vue'
import SingleTask from './components/pages/SingleTask/SingleTask.vue'
import NotFound from './components/pages/NotFound/NotFound.vue'

const routes = [
    { path: '/', component: TodoList },
    { path: '/about', component: About },
    { path: '/contact-us', component: Contact },
    { path: '/task/:taskId', component: SingleTask },
    { path: '/:pathMatch(.*)*', component: NotFound }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
