import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import store from './store'
import LottieAnimation from "lottie-web-vue";
import VueApexCharts from "vue3-apexcharts";
import { GesturePlugin } from '@vueuse/gesture'

import Axios from 'axios';

const pinia = createPinia();
createApp(App)
.use(store)
.use(GesturePlugin)
.use(router)
.use(pinia)
.use(LottieAnimation)
.use(VueApexCharts)
.mount('#app')
