import Vue from 'vue'
import Vuex from 'vuex'

// import { TweenMax, TimelineMax } from 'gsap'
import $ from 'jquery'
// import ScrollMagic from 'scrollmagic'
// import gsap from 'scrollmagic'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    elementName: '' 
  },
  mutations: {
    goContact(state) {
      var target = $(`#${state.elementName}`).offset().top
      $("html, body").animate({ scrollTop: target }, 600);
    },
    assignItemName(state, nameElement){
      state.elementName = nameElement
    }
  },
  actions: {
  },
  modules: {
  }
})
