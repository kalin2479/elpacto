<template>
    <div class="bg-grey">
        <b-container>
            <b-row>
                <b-col cols="12" lg="6">
                    <h3>How it works</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" lg="6">
                    <p>With Epsilon's AI-data activation, backed by Publicis’ unrivaled media scale, The Pact harnesses the power of billions of digital signals to deliver high-value audiences, dynamic creative and one-to-one personalization at scale. If you think The Pact may be a good fit for your business, contact us by July 31, 2020.</p>
                    <b-button variant="danger" size="lg" @click="goContact">Contact us</b-button>
                </b-col>
                <b-col cols="12" lg="6">
                    <div class="box-image">
                        <img src="@/assets/epsilon-x-publicis.svg" alt="">
                    </div>
                </b-col>
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
        }
    }
</script>
<style lang="sass" scoped>
    .box-image
        width: 100%
        @media (min-width: 992px)
            width: 90%
    .btn-lg
        padding: 0.5rem 2.5rem
        margin-top: 1rem
        display: block
        width: 100%
        margin-bottom: 2.5rem
        @media (min-width: 992px)
            display: inline-block
            width: auto
            margin-bottom: 0rem
    .bg-grey
        background: #e7e7e7
        padding-top: 3rem
        padding-bottom: 2rem
        @media (min-width: 992px)
            padding-bottom: 3rem

    h3
        font-family: 'Lato'
        font-weight: 700
        font-size: 2em
    p
        font-family: 'Lato'
        font-weight: 400
        font-size: 1.1em
        padding-right: 0rem
        line-height: 1.35rem
        @media (min-width: 992px)
            padding-right: 5.5rem

</style> 