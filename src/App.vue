<template>
  <div id="app">
    <header-main />
    <div class="main-container">
      <news />
      <works />
      <contact />
      <footer-main />
    </div>
    <b-button variant="danger" class="btn-contact-fixed" @click="goContact" size="lg">Escríbenos</b-button>
  </div>
</template>

<script>

  import HeaderMain from './components/Header.vue'
  import News from './components/News.vue'
  import Works from './components/Works.vue'
  import Contact from './components/Contact.vue'
  import FooterMain from './components/Footer.vue'

  import $ from 'jquery'

  import {mapState, mapMutations} from 'vuex'



  export default {
    name: 'App',
    components: {
      HeaderMain,
      News,
      Works,
      Contact,
      FooterMain
    },
    methods: {
      ...mapMutations(['goContact', 'assignItemName']),
      isInViewport (node) {
        let rect = node.getBoundingClientRect()
        return (
          (rect.height > 0 || rect.width > 0) &&
          rect.bottom >= 0 &&
          rect.right >= 0 &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        )
      }
    },
    computed: {
        ...mapState(['elementName'])
    },
    mounted() {
      
      this.assignItemName('contactForm')

      let position = $(window).scrollTop()
      let node = $('#contactForm')[0]
      let _this = this
      $(window).scroll(function() {
        let scroll = $(window).scrollTop()
        // console.log(`${scroll} -- ${position}`)
        let visible = _this.isInViewport(node)
        if (visible) {
          // $('.btn-contact-fixed').removeClass('viewAnimated')
          $('.btn-contact-fixed').fadeOut('slow')
        }else{
            // console.log(scroll)
            if (scroll <= 10){
              $('.btn-contact-fixed').fadeOut('slow')
            }else {
              $('.btn-contact-fixed').fadeIn('slow')
            }
        }
      })
    }
  }
</script>
<style lang="sass">
  .btn
    &.btn-contact-fixed
      position: fixed
      bottom: 1rem
      right: .5rem
      padding: 0.5rem 1.5rem
      line-height: 1.2rem
      font-size: 1.1em
      display: none
      @media (min-width: 992px)
        bottom: 1.5rem
        right: 2rem

</style>