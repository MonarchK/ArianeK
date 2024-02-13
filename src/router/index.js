import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'
import Careers from '../views/Careers.vue'
import Contact from '../views/Contact.vue'
import test from '../views/test.vue'
import Gallery from '../views/Gallery.vue'
import Exhibition from '../views/Exhibition.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path : '/about',
    name: 'About',
    component : About
  },
  {
    path : '/careers',
    name: 'Careers',
    component : Careers
  },
  {
    path : '/contact',
    name: 'Contact',
    component : Contact
  },
  {
    path : '/test',
    name: 'test',
    component : test
  },
  {
    path : '/careers/gallery',
    name: 'Gallery',
    component : Gallery
  },
  {
    path : '/careers/exhibition',
    name: 'Exhibition',
    component : Exhibition
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
