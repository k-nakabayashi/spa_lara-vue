import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 2.
import top from './projects/top/top.vue';
import home from './projects/home.vue';


import search from './projects/search/search.vue';



import prof from './projects/profile/profile.vue'

import settings from './projects/setting/settings.vue'
import change_pass from './projects/setting/change_pass.vue'
import set_prof from './projects/setting/set_prof.vue'
import my_prof from './projects/setting/profile/profile.vue'
import about_me from './projects/setting/profile/about_me.vue'
import my_frends from './projects/setting/profile/my_frends.vue'
import frend_reviews from './projects/setting/profile/frend_review.vue';
import my_posts from './projects/setting/profile/my_posts.vue';

import footer from './components/footer.vue';
import header from './components/header.vue';
import header_search from './components/header_search.vue';
import header_search_result from './components/header_search_result.vue';
import header_settings from './components/header_setting.vue';

//import person_card from  './components/person_card.vue';
//import search_icon from './components/search_icon.vue';




// 3.


// 4.
//HTTPリクエストとRouter-Linkを受ける
//応じた Router-Viewに指定したコンポーネントを描画する
const routes = [
    {
        path: '/',
        components: {
            c_main: top
        },
    },
    {
        path: '/index',
        components: {
            c_main: top
        },
    },
    {
        path: '/home',
        components: {
            c_header: header, 
            c_main: home, 
            c_footer: footer
        }
    },
    {
        path: '/search',
        components: {
            c_header: header_search, 
            c_main: search, 
            c_footer: footer
        },

    },
    {
        path: '/search_result/:query', name: "search_result", 
        components: {
            c_header: header_search_result, 
            //c_main: search, 
            c_footer: footer
        },

    },
    {
        path: '/profile',
        components: {
            //c_header: header, 
            c_main: prof, 
            c_footer: footer
        }
    },

    {
        path: '/profile_followers',
        components: {
            //c_header: header, 
            c_main: prof, 
            c_footer: footer
        }
    },

    {
        path: '/settings', name: "settings",
        components: {
            c_header: header_settings, 
            c_main: settings, 
            c_footer: footer
        },

    },

    //my〜はログインしてるユーザー用
    {
        path: '/my_profile',
        
        components: {
            //c_header: header, 
            c_main: my_prof,
            c_footer: footer
        },
        children: [
            {
             path: "",  components: {
                my_profile: about_me
             } 
            }
        ]
    },
    {
        path: '/my_frends',
        
        components: {
            //c_header: header, 
            c_main: my_prof,
            //main_inner: my_frends,
            c_footer: footer

        },
        children: [
           {
            path: "",  components: {
                my_frends: my_frends,
                //frend_card :person_card　さらにネスとしてる
            } 
           },
        ]
    },

    {
        path: '/my_reviews',
        components: {
            //c_header: header, 
            c_main: my_prof,
            c_footer: footer
        },
        children: [
            {
             path: "",  components: {
                frend_reviews: frend_reviews
             } 
            }
         ]
    },
    {
        path: '/my_posts',
        
        components: {
            //c_header: header, 
            c_main: my_prof,
            c_footer: footer
        },
        children: [
            {
             path: "",  components: {
                my_posts: my_posts
             } 
            }
         ]
    },
    {
        path: '/set_Prof',
        components: {
            c_header: header_settings, 
            c_main: set_prof, 
            c_footer: footer
        },

    },
    {
        path: '/set_Pass',
        components: {
            c_header: header_settings, 
            c_main: change_pass, 
            c_footer: footer
        },

    },
    {
        path: '/set_Prof', name: 'set_Prof',
        components: {
            c_header: header_settings, 
            c_main: settings, 
            c_footer: footer
        },

    },

    {
        path: '/change_pass', name: 'change_pass',
        components: {
            c_header: header_settings, 
            c_main: settings, 
            c_footer: footer
        },

    },

];

// 5.
const router = new VueRouter({

    mode: 'history',
    routes
})

// 6.
export default router