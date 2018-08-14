<template>
    <div id="block-main">
        <div id="header" class="position-fixed" :class=" sectionIndex != 0 ? 'fade' : '' ">
            <div class="ml-5 mr-5 mt-5 d-flex">
                <div class="logo">
                    <img src="/images/index_logo.png">
                </div>
                <menu-header></menu-header>
            </div>
        </div> 
        <div>
            <full-page id="fullpage" ref="fullpage" :options="options">
                <block-experience></block-experience>
                <block-foods></block-foods>
                <block-brands></block-brands>
                <block-news></block-news>
                <block-footer></block-footer>
            </full-page>
        </div>
        
    </div>
    
</template>

<script>
    import MenuHeader from 'components/block-header-menu'
    import BlockExperience from 'components/block-experience'
    import BlockBrands from 'components/block-brands'
    import BlockNews from 'components/block-news'
    import BlockFoods from 'components/block-foods'
    import BlockFooter from 'components/block-footer'

    export default {
        data: function () {
            return {
                options: {
                    // https://github.com/alvarotrigo/fullPage.js/
                    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
                    scrollOverflow: true,
                    navigation: false,
                    navigationTooltips: ['橘色體驗','橘色價值','橘色版圖','橘色新訊'],
                    afterLoad: this.afterLoad,
                    slidesNavigation: true,
                }, 
                sectionIndex: 0,
            }
        },
        mounted: function() {
            jQuery(document).ready(function(){
                
            }) // END jquery ready
        },
        methods: {
            afterLoad(originSection, activeSection){
                if(!activeSection.isFirst && !activeSection.isLast){
                    this.options.navigation = true;
                }
                else{
                    this.options.navigation = false;
                }
                this.sectionIndex = activeSection.index;
            },

        },
        components: {
            MenuHeader,
            BlockExperience,
            BlockBrands,
            BlockNews,
            BlockFoods,
            BlockFooter,
        },
        
    }
</script>

<style lang="sass">
    #app
        #fp-nav 
            ul 
                li 
                    .fp-tooltip
                        color: #ccc
                        opacity: 1
                        width: auto
                        font-size: 18px
        .fp-scroller
            min-height: 100%
        .logo
            height: 150px   
        #header
            top: 0
            z-index: 999999
            width: 100% 
        .main-title
            line-height: 35px
            .sub-title
                letter-spacing: 16px
                font-weight: 400
        .section-pd
            padding: 100px 0
        .fade-enter-active, .fade-leave-active
            transition: opacity .5s
        .fade-enter-to, .fade-leave-to
            opacity: 0
        .bg-transition
            position: absolute
            top: 0
            width: 50%
            height: 100%
            overflow: hidden
            .bg-inner
                background-position-x: 0
                background-repeat: no-repeat
                background-size: cover
                transition: all 1s       
                height: 100% 
                width: 100vw
            &.bg-left
                transform: translateY(-100%)
            &.bg-right
                transform: translateY(100%)
                right: 0
                .bg-inner
                    transform: translateX(-50%)
            &.active
                animation: bgSwitch 1s ease-in-out             

    @keyframes bgSwitch
        100%
            transform: translateY(0%)

    .fade-enter-active,
    .fade-leave-active
        transition: opacity .5s

    .fade-enter,
    .fade-leave-to
        opacity: 0

    .bg-black-cover
        &:before
            content: ""
            position: absolute
            width: 100%
            height: 100%
            background: rgba(0, 0, 0, 0.7)  
            left: 0  

    .fade-enter-active, .fade-leave-active 
        transition: opacity .5s
        
    .fade-enter, .fade-leave-to
        opacity: 0
        display: none
</style>
