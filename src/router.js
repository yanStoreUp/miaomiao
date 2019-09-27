
import VueRouter from 'vue-router'

import index from './pages/index/Index.vue'

import cinema from './pages/cinema/Cinema.vue'


// import citySelected from '@/components/index/CitySelected.vue'
// import willMovie from '@/components/index/WillMovie.vue'
// import hotPlayMovie from '@/components/index/HotPlayMovie.vue'
// import search from '@/components/index/Search.vue'


import { 
    citySelected, 
    willMovie, 
    hotPlayMovie, 
    search 
} from '@/components/index'


const router = new VueRouter({
    routes: [{
        path: '/',
        redirect: './index'
    },
    {
        path: '/index',
        component: index,
        mate: {
            title: '电影'
        },
        children: [
            {
                path: '',
                redirect: 'city'
            },
            {
                path: 'city',
                component: citySelected,
                mate: {
                    title: '城市选择'
                }
            },
            {
                path: 'search',
                component: search,
                mate: {
                    title: '搜索'
                }
            },
            {
                path: 'will-movie',
                component: willMovie,
                mate: {
                    title: '即将上映'
                }
            },
            {
                path: 'hot-play-movie',
                component: hotPlayMovie,
                mate: {
                    title: '正在热映'
                }
            },

        ]
    }, {
        path: '/cinema',
        component: cinema,
        mate: {
            title: '影院'
        }
    }


    ]
})

export default router;