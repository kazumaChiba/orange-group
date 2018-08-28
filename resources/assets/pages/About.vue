<template>
    <div id="block-about">
        <banner title="關於<span class='text-orange'>橘色</span>" img="/images/slideshow_1.jpg"></banner>
        <div id="about-tabs" class="container">
            <div class="row justify-content-between">
                <a class="tab text-center" data-target = '#block-secret'>橘色秘密</a>
                <a class="tab text-center" data-target = '#block-about-year'>橘色歲月</a>
                <a class="tab text-center" data-target = '#block-about-video'>用心創造美好的時刻</a>
            </div>
        </div>
        <div id="block-secret">
            <div class="container">
                <div class="">
                    <h3 class="main-title text-center"><span class="fs-inherit text-orange mb-1">橘色</span>秘密</h3>
                    <span class="sub-title text-uppercase d-block text-center">secrects</span>
                    <p class="about-content text-center">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>
                </div>
            </div>
        </div>
        <div id="block-about-service" class="position-relative">
            <div class="service-body position-relative"  style="background-image:url('/images/banner_about.png');">
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="service-left position-relative">
                            <div class="service-item d-flex position-relative justify-content-center align-items-center text-center" style="background-image:url('/images/about_year_1.png');">
                                <div class="service-content position-relative text-white">
                                    <p class="service-title">用心服務</p>
                                    <p class="service-desc">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>
                                </div>
                            </div>
                        </div>
                        <div class="service-right position-relative">
                            <div class="service-item -top d-flex position-relative justify-content-center align-items-center text-center" style="background-image:url('/images/about_year_2.png');">
                                <div class="service-content position-relative text-white">
                                    <p class="service-title">用心服務</p>
                                    <p class="service-desc mb-0">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>
                                </div>
                            </div>
                            <div class="service-item -bottom d-flex position-relative justify-content-center align-items-center text-center" style="background-image:url('/images/about_year_3.png');">
                                <div class="service-content text-white position-relative">
                                    <p class="service-title">用心服務</p>
                                    <p class="service-desc">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="block-about-year">
            <h3 class="main-title text-center"><span class="fs-inherit text-orange mb-1">橘色</span>歲月</h3>
            <span class="sub-title text-uppercase d-block text-center">timeline</span>
            <slick
                class="year container"
                ref="slick"
                :options="yearOptions"
            >
                <div 
                    v-for="(item,$index) in yearEvents"
                    :key="$index"
                    class="year-item text-center position-relative" 
                    :class="yearIndex == $index ? 'active' : ''"
                    @click="yearIndex = $index"
                >
                    <p class="text-year mb-0">{{item.year}}</p>
                    <span class="dot-year"></span>
                </div>
            </slick>
            <div class="year-body">
                <div class="container">
                    <div class="row">
                        <div class="year-left text-center">
                            <p><span class="text-orange">{{yearEvents[yearIndex].year}}</span>年</p>
                        </div>
                        <div class="year-right text-center">
                            <div class="year-month-list">
                                <div 
                                    class="year-month-item d-flex" 
                                    v-for="(item,$index) in yearEvents[yearIndex].content"
                                    :key="$index"
                                >
                                    <div class="left text-left">
                                        <p class="month">{{item.month}}</p>
                                    </div>
                                    <div class="right text-left">
                                        <p class="title text-orange">{{item.listTitle}}</p>
                                        <p class="content">{{item.listContent}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="block-about-video" class="position-relative">
            <div class="container h-100 position-relative">
                <div class="row  align-items-center h-100">
                    <div class="btn-play h-100 d-flex align-items-center justify-content-center mb-0"></div>
                    <div class="video-content">
                        <h3><span class="text-orange">用心</span>創造美好時刻</h3>
                        <p class="sub-title text-uppercase">videos</p>
                        <p class="video-desc position-relative">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>
                        <a href="#" class="btn-orange fat">探索橘色版圖</a>
                    </div>
                </div>
            </div>
        </div>
        <block-footer></block-footer>
    </div>
</template>

<script>
import Banner from 'components/block-banner'
import MenuHeader from 'components/block-menu-header'
import BlockFooter from 'components/block-footer'

import BootstrapVue from 'bootstrap-vue'

import Slick from 'vue-slick'

Vue.use(BootstrapVue);

export default {
    data: function () {
        return {
            tab: '#block-secret',
            yearOptions: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
            },
            yearIndex: 0,
            yearEvents: [
                {
                    year: '2008',
                    content: [
                        {
                            month: '12月',
                            listTitle: '新光三越旗艦店開幕',
                            listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                        },
                        {
                            month: '11月',
                            listTitle: '新光三越旗艦店開幕',
                            listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                        }
                    ]
                },
                {
                    year: '2009',
                    content: [
                        {
                            month: '3月',
                            listTitle: '新光三越旗艦店開幕',
                            listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                        },
                        {
                            month: '1月',
                            listTitle: '新光三越旗艦店開幕',
                            listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                        }
                    ]
                },
                {
                    year: '2012',
                    content: [
                        {
                            month: '5月',
                            listTitle: '新光三越旗艦店開幕',
                            listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                        },
                        {
                            month: '3月',
                            listTitle: '新光三越旗艦店開幕',
                            listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                        }
                    ]
                },
                {
                    year: '2013',
                    content: [
                        {
                            month: '7月',
                            listTitle: '新光三越旗艦店開幕',
                            listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                        },
                        {
                            month: '6月',
                            listTitle: '新光三越旗艦店開幕',
                            listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                        }
                    ]
                },
                {
                    year: '2015',
                    content: [
                        {
                            month: '12月',
                            listTitle: '新光三越旗艦店開幕',
                            listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                        },
                        {
                            month: '4月',
                            listTitle: '新光三越旗艦店開幕',
                            listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                        }
                    ]
                },
                {
                    year: '2018',
                    content: [
                        {
                            month: '3月',
                            listTitle: '新光三越旗艦店開幕',
                            listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                        },
                        {
                            month: '1月',
                            listTitle: '新光三越旗艦店開幕',
                            listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                        }
                    ]
                }
            ],

        }
    },
    methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },
        reInit() {
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
    },
    components: {
        Banner,
        MenuHeader,
        BlockFooter,
        Slick,
    },
    mounted: function() {
        jQuery(document).ready(function(){

            scrollTabs();

            jQuery(".tab").click(function(){
                let target = jQuery(this).attr("data-target");
                jQuery(".tab.active").removeClass("active");
                jQuery(this).addClass("active");
                jQuery("html,body").animate({
                    scrollTop: jQuery(target).offset().top - 100
                }, 300);

            });
            
            jQuery(window).scroll(function(){
                scrollTabs();
            });

            function scrollTabs(){
                if(jQuery(window).scrollTop() >= jQuery("#block-secret").offset().top - 200){
                    jQuery("#about-tabs").addClass("position-fixed");
                    jQuery("#header").addClass("hidden");
                }
                else{
                    jQuery("#about-tabs").removeClass("position-fixed");
                    jQuery("#header").removeClass("hidden");
                }

                let tab = [jQuery("#block-secret").offset().top - 200 , jQuery("#block-about-year").offset().top - 200 , jQuery("#block-about-video").offset().top - 200 ];
                if(jQuery(window).scrollTop() >= tab[0] && jQuery(window).scrollTop() < tab[1]){
                    jQuery(".tab.active").removeClass("active");
                    jQuery(".tab").eq(0).addClass("active");
                }
                else if(jQuery(window).scrollTop() >= tab[1] && jQuery(window).scrollTop() < tab[2]){
                    jQuery(".tab.active").removeClass("active");
                    jQuery(".tab").eq(1).addClass("active");
                }
                else if(jQuery(window).scrollTop() >= tab[2]){
                    jQuery(".tab.active").removeClass("active");
                    jQuery(".tab").eq(2).addClass("active");
                }
            }
        }) // END jquery ready
    },
}
</script>

<style lang="sass">
    @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css')
    @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css')

    #app
        #header
            &.hidden
                display: none
    .main-title 
        font-size: 50px
        margin-bottom: 0
    .sub-title
        font-size: 20px
        letter-spacing: 10px
        font-family: "PingFang SC",微軟正黑體
    #about-tabs
        margin: 50px auto
        &.position-fixed
            position: fixed
            top: 0
            z-index: 99999
            max-width: unset
            background: white
            top: 0
            margin-top: 0
        .tab 
            color: gray
            font-size: 20px
            flex: 1
            border-bottom: 2px solid #efefef
            padding: 15px 0
            cursor: pointer
            &.active , &:hover
                border-bottom: 3px solid #f26c24
                color: #f26c24
    #block-secret
        margin: 70px 0 200px 0
        .sub-title
            margin-bottom: 40px
        .about-content
            width: 70%
            margin: 0 auto
            line-height: 30px
            font-weight: 500
    #block-about-service
        height: 1000px
        .service-body
            height: 500px
            background-size: cover
            background-repeat: no-repeat
            background-position: center
            &:before
                content: ""
                position: absolute
                width: 100%
                height: 100%
                background: black
                opacity: 0.7
            .service-item
                padding: 80px
                background-size: cover
                background-repeat: no-repeat
                background-position: center
                .service-content
                    opacity: 0
                    .service-title
                        font-size: 35px
                        margin-bottom: 5px
                    .service-desc
                        line-height: 35px
                        font-size: 20px
                &:before
                    content: ""
                    position: absolute
                    width: 100%
                    height: 100%
                    background: #f26c23
                    opacity: 0
                    transition: all .3s
                &:hover
                    &:before
                        opacity: 0.9
                    .service-content
                        opacity: 1
                        transition: all .3s
            .service-left , .service-right
                flex: 1
            .service-left
                top: -80px
                .service-item
                    height: 750px
                    position: relative
            .service-right
                top: -80px
                .service-item
                    &.top
                        height: 350px
                    &.bottom
                        height: 480px
                        width: 90%
    #block-about-year
        margin-bottom: 150px
        .year
            .slick-list
                height: 350px
            .year-item
                top: 110px
                padding-bottom: 35px
                &.active
                    .text-year
                        color: #f26d22
                    .dot-year
                        &:after
                            transform: scale(1)
                &:not(.active)
                    .dot-year
                        &:hover
                            &:after
                                transition: all .5s
                                animation: yeardot 1s infinite ease-in-out
                &:hover
                    color: #f26d22
                &:before
                    content: ""
                    background: #f26d22
                    position: absolute
                    width: 100%
                    height: 2px
                    bottom: 0
                    left: 0
                .dot-year
                    width: 10px
                    height: 10px
                    position: absolute
                    background: #f26d22
                    border-radius: 100%
                    top: 58px
                    left: calc(50% - 5px)
                    cursor: pointer
                    &:before
                        content: ""
                        position: absolute
                        width: 25px
                        height: 25px
                        background: rgba(255, 205, 177, 0.45)
                        border-radius: 100%
                        left: -8px
                        top: -8px
                    &:after
                        content: ""
                        position: absolute
                        border-radius: 100%
                        width: 180px
                        height: 180px
                        background: rgba(255, 205, 177, 0.1)
                        left: -85px
                        top: -85px
                        transform: scale(0.7)
            .slick-arrow
                color: transparent
                background: transparent
                border: none
                &:before
                    content: "➝"
                    display: inline-block
                    color: gray
                    font-size: 18px
                &.slick-prev
                    &:before
                        transform: rotate(180deg)
            .text-year
                font-size: 20px
                font-weight: 500    
        .year-body
            .year-left
                flex: 1
                border-right: 1px solid #fbc1a2
                padding-right: 50px
                p
                    font-size: 20px
                    span
                        font-size: 35px
            .year-right
                flex: 5
                padding-left: 100px
            .year-month-list
                .year-month-item
                    .left
                        flex: 1
                        .month
                            font-size: 22px
                    .right
                        flex: 6
                        border-bottom: 1px solid #ececec
                        margin-bottom: 20px
                        padding: 0 50px
                        .title
                            font-size: 25px
                            margin-bottom: 5px
                    &:last-child
                        .right
                            border-bottom: none

    #block-about-video
        height: 550px      
        background-image: url('/images/about_create.png') 
        &:before
            content: ""
            position: absolute
            width: 100%
            height: 100%
            background-image: linear-gradient(120deg, transparent 60% , white)
        .btn-play
            flex: 3
            &:before
                width: 100px
                height: 100px
                content: "\25B6\FE0E"
                color: white
                transition: all .3s
                background: #f36f1b
                border-color: #f36f1b
            &:hover
                &:before
                    background: #f55701
                    border-color: #f55701
        .video-content
            flex: 2
            color: white  
            .sub-title
                font-size: 18px   
                margin-bottom: 20px   
            h3
                font-size: 50px          
            .video-desc
                margin-bottom: 40px
                padding-bottom: 40px
                &:after
                    content: ""
                    position: absolute
                    width: 50px
                    height: 2px
                    background: #f26c24
                    left: 0
                    bottom: 0
                            
    @keyframes yeardot
        50%
            transform: scale(1)
        100%
            transform: scale(0.7)
</style>
