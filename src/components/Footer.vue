<template>
    <div class="bg-footer">
        <b-container>
            <b-row>
                <b-col cols="12" xl="2">
                    <img src="@/assets/epsilon-logo--white.svg" alt="" class="box-logo-footer">
                </b-col>
                <b-col col sm="12" xl="7">
                    <b-nav pills>
                        <b-nav-item href="#">Privacy Policy</b-nav-item>
                        <b-nav-item>Terms & Conditions</b-nav-item>
                        <b-nav-item>About our Ads</b-nav-item>
                        <b-nav-item>Site Map</b-nav-item>
                        <b-nav-item>Contact</b-nav-item>
                        <b-nav-item>Consumer Information</b-nav-item>
                        <b-nav-item>Do Not Sell My Personal Information</b-nav-item>
                    </b-nav>
                </b-col>
                <b-col cols="12" xl="3">
                    <b-nav pills class="box-social">
                        <b-nav-item href="#">
                            <img src="@/assets/twitter.svg" alt="">
                        </b-nav-item>
                        <b-nav-item>
                            <img src="@/assets/linkedin.svg" alt="">
                        </b-nav-item>
                        <b-nav-item>
                            <img src="@/assets/facebook.svg" alt="">
                        </b-nav-item>
                    </b-nav>
                </b-col>
            </b-row>
            <hr class="line-footer">
            <b-row class="text-legal">
                <b-col cols="12" xl="2"></b-col>
                <b-col cols="12" xl="7">
                    <p>©2020 Epsilon Data Management, LLC. All rights reserved. All names and logos are trademarks or registered trademarks of their respective owners.</p>
                </b-col>
                <b-col cols="12" xl="3"></b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="sass" >
    .bg-footer
        background: #000
        padding: 2rem 0
        .line-footer
            background-color: white
            margin-top: 2rem
            @media (min-width: 1200px)
                margin-top: 0
                display: none
        .box-logo-footer
            width: 120px
            margin-bottom: 1.5rem
            @media (min-width: 1200px)
                margin-bottom: 0
        .text-legal
            padding-top: 1rem
            @media (min-width: 1200px)
                padding-top: 1.5rem
            p
                font-size: 0.75em
                color: white
        .nav-pills
            &.box-social
                padding-top: 1rem
                @media (min-width: 1200px)
                    padding-top: 0
                li
                    margin-right: 1rem
                    &:last-child
                        margin-right: 0
                a
                    border-radius: 50%
                    border: 1px solid white
                img
                    width: 38px
                    height: 38px
                    border-radius: 50%
            .nav-link
                font-size: 0.75em
                color: white
                padding: 0.5rem .5rem
                &.active, &:hover
                    color: white
                    background-color: #757575
</style>  