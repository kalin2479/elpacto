<template>
    <div class="bg-footer">
        <b-container>
            <b-row>
                <b-col cols="12" xl="2">
                    <img src="@/assets/epsilon-logo--white.svg" alt="" class="box-logo-footer">
                </b-col>
                <b-col col sm="12" xl="7" class="text-legal">
                    <p>©2020 Publicis Group Perú. Todos los derechos reservados. Todos los nombres y logotipos son marcas comerciales o marcas comerciales registradas de sus respectivos propietarios.</p>
                </b-col>
                <b-col cols="12" xl="3">
                    <b-nav pills class="box-social">
                        <b-nav-item href="https://www.linkedin.com/company/publicis-groupe" target="_blanck">
                            <img src="@/assets/linkedin.svg" alt="">
                        </b-nav-item>
                        <b-nav-item href="https://www.facebook.com/PublicisGroupePeru/" target="_blanck">
                            <img src="@/assets/facebook.svg" alt="">
                        </b-nav-item>
                    </b-nav>
                </b-col>
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