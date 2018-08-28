<template>
    <div id="block-about">
        <banner title="關於<span class='text-orange'>橘色</span>" img="/images/slideshow_1.jpg"></banner>
        <div class="container">
            <div class="row">
                <b-tabs id="about-tabs">
                    <b-tab class="about-tab-content" title="橘色秘密" active>
                        <h3 class="main-title text-center"><span class="fs-inherit text-orange mb-1">橘色</span>秘密</h3>
                        <span class="sub-title text-uppercase d-block text-center">secrects</span>
                        <p class="about-content">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>
                    </b-tab>
                    <b-tab class="about-tab-content" title="橘色歲月" >
                        <h3 class="text-center"><span class="fs-inherit text-orange mb-1">橘色</span>歲月</h3>
                        <span class="sub-title text-uppercase d-block text-center">years</span>
                        <p class="about-content">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>
                    </b-tab>
                    <b-tab class="about-tab-content" title="用心創造美好時刻">
                        <h3 class="text-center"><span class="fs-inherit text-orange mb-1">用心</span>創造美好時刻</h3>
                        <span class="sub-title text-uppercase d-block text-center">create</span>
                        <p class="about-content">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>
                    </b-tab>
                </b-tabs>
            </div>
        </div>
        <div id="block-about-service" class="position-relative">
            <div class="service-body"  style="background-image:url('/images/family_1.png');">
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="service-left position-relative">
                            <div class="service-item d-flex position-relative justify-content-center align-items-center text-center" style="background-image:url('/images/slideshow_1.jpg');">
                                <div class="service-content position-relative text-white">
                                    <p class="service-title">用心服務</p>
                                    <p class="service-desc">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>
                                </div>
                            </div>
                        </div>
                        <div class="service-right position-relative">
                            <div class="service-item top d-flex position-relative justify-content-center align-items-center text-center" style="background-image:url('/images/slideshow_1.jpg');">
                                <div class="service-content position-relative text-white">
                                    <p class="service-title">用心服務</p>
                                    <p class="service-desc mb-0">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>
                                </div>
                            </div>
                            <div class="service-item bottom d-flex position-relative justify-content-center align-items-center text-center" style="background-image:url('/images/slideshow_1.jpg');">
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
                class="year"
                ref="slick"
                :options="yearOptions"
            >
                <div 
                    v-for="(item,$index) in yearEvents"
                    :key="$index"
                    class="year-item position-relative" 
                    @click="yearIndex = $index"
                >
                    <p class="text-year">{{item.year}}</p>
                    <!-- <img src="/images/slideshow_1.jpg" /> -->
                    <span class="dot-year"></span>
                </div>
            </slick>
            <div class="year-body">
                <div class="container">
                    <div class="row">
                        <div class="year-left">
                            <p><span class="text-orange">{{yearEvents[yearIndex].year}}</span>年</p>
                        </div>
                        <div class="year-right">
                            <div class="year-month-list">
                                <div 
                                    class="year-month-item" 
                                    v-for="(item,$index) in yearEvents[yearIndex].content"
                                    :key="$index"
                                >
                                    <div class="left">
                                        <p class="-month">{{item.month}}</p>
                                    </div>
                                    <div class="right">
                                        <p class="-title">{{item.listTitle}}</p>
                                        <p class="-content">{{item.listContent}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Slick from 'vue-slick'

Vue.use(BootstrapVue);

export default {
    data: function () {
        return {
            yearOptions: {
                slidesToShow: 4,
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
            ]

        }
    },
    components: {
        Banner,
        MenuHeader,
        BlockFooter,
        Slick,
    },
}
</script>

<style lang="sass">
    .main-title 
        font-size: 50px
    .sub-title
        font-size: 20px
        letter-spacing: 10px
        font-family: "PingFang SC",微軟正黑體
    #about-tabs
        margin: 50px 0
        .about-tab-content
            padding: 80px 0
            .about-content
                margin: 50px auto 0 auto
                width: 70%
                font-weight: 500
                line-height: 30px
        .nav-tabs 
            justify-content: center
            .nav-item
                flex: 1
                text-align: center
                .nav-link
                    border-top: 0
                    border-left: 0
                    border-right: 0
                    &.active , &:hover
                        border-color: #f26c24
                        border-width: 3px
                        color: #f26c24
                .nav-link
                    color: gray
                    font-size: 20px
    
    #block-about-service
        height: 1000px
        .service-banner
            height: 500px
            &:before
                content: ""
                position: absolute
                width: 100%
                height: 100%
                background: black
                opacity: 0.8
        .service-body
            height: 500px
            background-size: cover
            background-repeat: no-repeat
            background-position: center
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
                        font-size: 18px
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
                        opacity: 0.5
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
</style>
