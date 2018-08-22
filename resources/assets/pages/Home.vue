<template>
    <div id="block-main">
        <div id="header" class="position-fixed" :class="closeMenu ? 'active' : '' + sectionPosition">
            <div class="d-flex">
                <div class="logo" :class=" sectionIndex != 0 ? 'fade' : '' ">
                    <img src="/images/index_logo.png">
                </div>
                <div id="main-menu" class="d-flex justify-content-end align-items-start">
                    <menu-header :class="closeMenu ? 'menu-close' : '' || textShadow ? 'menu-shadow' : '' "></menu-header>
                </div>
            </div>
        </div> 
        <span id="burger-menu" :class="sectionIndex != 0 ? 'menu-close' : ''" @click="closeMenu = !closeMenu"></span>
        <div>
            <full-page id="fullpage" ref="fullpage" :options="options">
                <block-experience></block-experience>
                <block-foods></block-foods>
                <block-brands></block-brands>
                <div id="block-news" class="section text-black position-relative text-center">
                    <div class="container position-relative m-auto section-pd">
                        <div class="row flex-column align-items-center justify-content-center flex-nowrap">
                            <h3 class="main-title text-uppercase"><span class="fs-inherit text-orange">橘色</span>新訊<br><span class="sub-title">events & news</span></h3>
                                <block-news></block-news>
                                <router-link :to="'/news'" class="btn-load-more btn-orange  -fat">
                                    更多橘色新訊
                                </router-link>
                        </div>
                    </div>
                </div>
                <block-footer></block-footer>
            </full-page>
        </div>    
    </div>
</template>

<script>
    import MenuHeader from 'components/block-menu-header'
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
        right: 30px
        top: 48px
        z-index: 9999999
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
    #fp-nav.fp-right
        opacity: 0
        display: flex
        flex-direction: column
        visibility: hidden
        transition: opacity .3s
        right: 0
        width: unset
        &.active
            visibility: visible
            opacity: 1
        ul 
            li 
                width: 100%
                height: 25px
                margin: 5px 0
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
                    right: 0
                    overflow: visible
                    position: relative
                    height: 100%
                    display: flex
                    align-items: center
                    padding: 0 50px
                    font-weight: 300
                &:hover div, a.active+div
                    cursor: pointer
                    background: #f26c23
                    transition: all .3s
                    color: white !important
                a
                    position: absolute
                    top: 0
                    left: 0

    #app
        .fp-scroller
            min-height: 100%
        .logo
            position: absolute
            height: 220px 
            left: 0
            top: 0  
        #header
            top: 0
            z-index: 999999
            width: 100% 
            margin-top: 40px
            &.active
                z-index: 0
                transition-delay: 1s

        .main-title
            line-height: 35px
            .sub-title
                letter-spacing: 10px
                font-weight: 200
                font-size: 16px
                font-family: "PingFang SC",微軟正黑體
        
</style>
