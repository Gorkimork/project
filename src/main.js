import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'


import HomeView from './components/HomeView.vue'
import KitView from './components/KitView.vue'
import NotFoundView from './components/NotFoundView.vue'
import BookView from './components/BookView.vue'

import Manga1View from './components/Manga1View.vue'
import Manga2View from './components/Manga2View.vue'
import Manga3View from './components/Manga3View.vue'
import Manga4View from './components/Manga4View.vue'
import Manga5View from './components/Manga5View.vue'
import Manga6View from './components/Manga6View.vue'
import Manga7View from './components/Manga7View.vue'
import Manga8View from './components/Manga8View.vue'
import Manga9View from './components/Manga9View.vue'
import Manga10View from './components/Manga10View.vue'


import CrateView from './components/CrateView.vue'

import RegistrationView from './components/RegistrationView.vue'
import LoginView from './components/LoginView.vue'
import ForgotPassword from './components/ForgotPassword.vue'






 




const router = createRouter({
    routes:[{
        path: '/',
        name: 'home',
        component: HomeView,

    },
    {
        path: '/kit',
        name: 'kit',
        component: KitView,
    },
    {
        path: '/book',
        name: 'book',
        component: BookView,
        children:[{
            path:'manga1',
            name: 'manga1',
            component: Manga1View,
        }, 
        { 
            path:'manga2',
            name: 'manga2',
            component: Manga2View,
        },
        {            
            path:'manga3',
            name: 'manga3',
            component: Manga3View,
        },
        {
            path:'manga4',
            name: 'manga4',
            component: Manga4View,      
        },
        { 
            path:'manga5',
            name: 'manga5',
            component: Manga5View,
        },
        {
            path:'manga6',
            name: 'manga6',
            component: Manga6View,
        },
        {   
            path:'manga7',
            name: 'manga7',
            component: Manga7View,
        },
        {   
            path:'manga8',
            name: 'manga8',
            component: Manga8View,
        },
        {
            path:'manga9',
            name: 'manga9',
            component: Manga9View,
        },
        {
            path:'manga10',
            name: 'manga10',
            component: Manga10View,   
        }],
    },
    
    {
        path: '/authentication',
        name: 'enter',

        component: LoginView,
        
    },
    {
        path: '/shop-crate',
        name: 'crate',

        component: CrateView,

    },

    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: NotFoundView

    },

    {
        path: '/signup',
        name: 'signup',
        component: RegistrationView,
      },

      {
        path: '/forgot-password',
        name: 'forgot-password',
        component: ForgotPassword,
      }
    ],
     

    
    history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app');
export default router