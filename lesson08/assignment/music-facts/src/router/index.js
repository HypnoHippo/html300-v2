// Importing router and pages
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AlbumArt from '../views/AlbumArt.vue'
import MusicFacts from '../views/MusicFacts.vue'
import VideosPage from '../views/VideosPage.vue'

// Setting up router and router paths
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/album-art',
    name: 'album-art',
    component: AlbumArt
  },
  {
    path: '/music-facts',
    name: 'music-facts',
    component: MusicFacts
  },
  {
    path: '/videos',
    name: 'videos-page',
    component: VideosPage
  },
]

const router = new VueRouter({
  routes
})

export default router
