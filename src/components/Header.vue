<template>
    <div class="banner-full" id='headerMain'>
        <b-container>
            <b-row>
                <b-col cols="12" lg="5">
                    <div class="box-info">
                        <img src="@/assets/Logo_Blanco.png" alt="El pacto y Publicis Groupe" class="logo">
                        <img src="@/assets/share.jpg"  style="display: none">
                        <div class="box-description">
                            <h1>
                                Garantizamos los resultados de tu inversión en medios y si no los logramos, No Pagas*
                            </h1>
                            <b-button variant="danger" @click="goContact" size="lg">Escríbenos</b-button>
                        </div>
                    </div>
                </b-col>
                <!-- <b-col cols="12" lg="7">
                    <div class="box-video">
                        <video controls class="video" poster="https://www.epsilon.com/hs-fs/hubfs/pact-video-thumbnail.jpg?width=931&amp;height=524&amp;name=pact-video-thumbnail.jpg">
                            <source src="https://www.epsilon.com/hubfs/Pact_60_Final_h264.mp4" type="video/mp4">
                        </video>
                    </div>
                </b-col> -->
            </b-row>
        </b-container>
    </div>
</template>
<script>

    import {mapState, mapMutations} from 'vuex'

    export default {
        mounted() {
            this.assignItemName('contactForm')
        },
        computed: {
            ...mapState(['elementName'])
        },
        methods: {
            ...mapMutations(['goContact', 'assignItemName'])
            // goContact () {
            //     let controller = new ScrollMagic.Controller()
            //     let contactScene = new ScrollMagic.Scene({
            //         triggerElement: '#contactForm'
            //     })
            //     .setClassToggle('#contactForm', 'fade-in')
            //     .addTo(controller)
            // }
        }
    }
</script>
<style lang="sass" scoped>
    .box-info
        padding-right: 0rem
        padding-top: 1rem
        @media (min-width: 992px)
            padding-right: 4.75rem
            padding-top: 3rem
        .logo
            width: 100%

    .box-video
        width: 100%
    .box-video
        video
            width: 100%
            &:focus
                outline: none
    .banner-full
        background-image: url('../assets/slider3.jpg')
        background-size: cover
        background-position: center top
        padding: 3rem 0 2.5rem
        @media (min-width: 992px)
            padding: 5.5rem 0 6.5rem
    .box-description
        margin-top: 1.3rem
    .box-description
        h1
            font-family: 'Lato'
            font-weight: 400
            color: white
            font-size: 1.37em
            line-height: 1.25
            margin-bottom: 3rem
            @media (min-width: 992px)
                margin-bottom: 2rem

    .box-description
        padding-bottom: 3rem
        @media (min-width: 992px)
            padding-bottom: 0rem
        .btn-lg
            padding: 0.5rem 2.5rem
            display: block
            width: 100%
            @media (min-width: 992px)
                display: inline-block
                width: auto

</style>  