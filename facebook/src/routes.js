import Login from './components/Login.vue';
import Feeds from './components/Feeds.vue';
import DisplaySelectedFeed from './components/DisplaySelectedFeed.vue';
import ActivityLog from './components/ActivityLog.vue';
import practiceComponent from './components/practiceComponent.vue';

export default [
    { path: '/', component: Login, name: "login" },
    { path: '/feeds', component: Feeds, name: "feeds" },
    { path: '/selectedFeed', component: DisplaySelectedFeed, name: "selectedFeed" },
    { path: '/practice', component: practiceComponent, name: "practice" }
]
