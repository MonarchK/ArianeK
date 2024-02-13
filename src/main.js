import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { CIcon } from '@coreui/icons-vue';
import {
  cilArrowBottom,
  cilArrowRight,
  cilArrowTop,
  cilBan,
  cilBasket,
  cilBell,
  cilCalculator,
  cilCalendar,
  cibInstagram,
  cibTwitter,
  cibGmail
} from '@coreui/icons'

axios.defaults.baseURL = 'http://127.0.0.1:8000'

const icons = {
    cilArrowBottom,
    cilArrowRight,
    cilArrowTop,
    cilBan,
    cilBasket,
    cilBell,
    cilCalculator,
    cilCalendar,
    cibInstagram,
    cibTwitter,
    cibGmail
  }

const app = createApp(App)
app.use(store)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.use(router, axios)
app.mount('#app')
