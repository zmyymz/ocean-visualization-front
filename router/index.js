import Vue from 'vue'
import VueRooter from 'vue-router'
// import Home from "../Views/Home.vue"
Vue.use(VueRooter)

const routes=[
    {
        path:'/',
        name:'Home',
        component:()=>import("../views/Home.vue")
    },
    {
        path:'/ocean',
        name:'Ocean',
        component:()=>import("../views/Ocean.vue")
    },
    {
        path:'/Map',
        name:'Map',
        component:()=>import("../src/components/Map.vue")
    },
    {
        path:'/Typhoon',
        name:'Typhoon',
        component:()=>import("../views/Typhoon.vue")
    },
    
]

const router=new VueRooter({
    mode:'history',
    routes,
})

export default router