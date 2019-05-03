import Login from './components/Login.vue';
import Feeds from './components/Feeds.vue';

export default [
    { path: '/', component: Login, name: "login" },
    { path: '/feeds', component: Feeds, name: "feeds"}

]
