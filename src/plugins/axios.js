import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const baseRUL = 'https://elpacto.pe'
axios.defaults.baseURL = baseRUL
axios.defaults.withCredentials = false
axios.defaults.proxyHeaders = false

Vue.use(VueAxios, axios)
