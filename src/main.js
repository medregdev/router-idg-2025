import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import NotFound from '@/pages/NotFound.vue'
import Setting from '@/pages/Setting.vue'
import Collections from '@/components/Collections.vue'
import PricingList from '@/components/PricingList.vue'
import Project from '@/pages/Project.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    {
        path: '/setting', component: Setting, children: [
            { path: '', component: Collections },
            { path: 'pricing', component: PricingList }
        ]
    },
    { path: '/project', component: Project },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

// to="/about"
// to="/about/me"

const router = createRouter({
    linkActiveClass: 'font-bold',
    linkExactActiveClass: 'font-bold',
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)

app.mount('#app')
