import { createWebHistory, createRouter } from 'vue-router'
import TodoList from './components/pages/TodoList/TodoList/TodoList.vue'
import About from './components/pages/TodoList/About/About.vue'
import Contact from './components/pages/TodoList/Contact/Contact.vue'
import SingleTask from './components/pages/TodoList/SingleTask/SingleTask.vue'
import NotFound from './components/pages/TodoList/NotFound/NotFound.vue'

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
