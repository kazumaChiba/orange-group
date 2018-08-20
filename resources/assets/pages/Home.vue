<template>
    <div id="block-main">
        <div id="header" class="position-fixed" :class="sectionPosition">
            <div class="mt-5 d-flex">
                <div class="logo" :class=" sectionIndex != 0 ? 'fade' : '' ">
                    <img src="/images/index_logo.png">
                </div>
                <div id="main-menu" class="d-flex justify-content-end align-items-start">
                    <menu-header :class="closeMenu ? 'menu-close' : '' || textShadow ? 'menu-shadow' : '' "></menu-header>
                    <span id="burger-menu" :class="sectionIndex != 0 ? 'menu-close' : ''" @click="closeMenu = !closeMenu"></span>
                </div>
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
                    navigation: true,
                    navigationTooltips: ['橘色體驗','橘色價值','橘色版圖','橘色新訊'],
                    afterLoad: this.afterLoad,
                    slidesNavigation: true,
                }, 
                sectionIndex: 0,
                sectionPosition: 'section-1',
                closeMenu: false,
                textShadow: false,
            }
        },
        mounted: function() {
            jQuery(document).ready(function(){
                
            }) // END jquery ready
        },
        methods: {
            afterLoad(originSection, activeSection){
                if(!activeSection.isFirst && !activeSection.isLast){
                    jQuery("#fp-nav").addClass("active");
                }
                else{
                    jQuery("#fp-nav").removeClass("active");
                }
                this.sectionIndex = activeSection.index;
                this.sectionPosition = 'section-'+activeSection.index;

                if(activeSection.isFirst){
                    this.closeMenu = false;
                }
                else{
                    this.closeMenu = true;
                }
                if(activeSection.index == 1 || activeSection.index == 3){
                    this.textShadow = true;
                }
                else{
                    this.textShadow = false;
                }

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
    #burger-menu
        width: 0px
        height: 25px
        text-align: center
        overflow: hidden
        transition: all .5s
        position: absolute
        right: 0
        &:before
            content: "|||"
            color: #f26c23
            transform: rotate(90deg)
            display: inline-block
            font-weight: bold
        &:hover
            cursor: pointer
        &.menu-close
            width: 25px
    #fp-nav
        opacity: 0
        display: flex
        flex-direction: column
        width: calc(50% - 585px)
        visibility: hidden
        transition: opacity .3s
        &.active
            visibility: visible
            opacity: 1
        ul 
            li 
                width: 100%
                height: 30px
                margin: 0
                &:last-child
                    display: none
                span
                    display: none
                .fp-tooltip.fp-right
                    color: #ccc
                    opacity: 1
                    width: auto
                    font-size: 17px
                    letter-spacing: 0px
                    font-style: italic
                    top: 50%
                    right: 50%
                    overflow: visible
                    transform: translate(50% , -50%)
                &:hover
                    cursor: pointer
                    background: #f26c23
                    transition: all .3s
                    .fp-tooltip.fp-right
                        color: white

    #app
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

    .fade-enter-active, .fade-leave-active 
        transition: opacity .5s
        
    .fade-enter, .fade-leave-to
        opacity: 0
        display: none
</style>
