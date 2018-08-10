<template>
    <div id="block-main">
        <div id="header" class="position-fixed">
            <div class="ml-5 mr-5 mt-5 d-flex">
                <div class="logo">
                    <img src="/images/index_logo.png">
                </div>
                <menu-header></menu-header>
            </div>
        </div>
        <div>
            <full-page id="fullpage" ref="fullpage" :options="options">
                <div id="block-experience" class="section text-white text-center" style="background-image:url('/images/slideshow_1.jpg')">
                    <div id="content-experience" class="position-relative position-h-center">
                        <h1 class="big_title">{{experience[experience_index].big_title}}</h1>
                        <div class="experience-circle">
                            <div class="circle-body"></div>
                            <div class="circle-option" :class="'e_index_'+experience_index">
                                <a class="text-circle-option -left" @click="experience_index = 0" :class="experience_index == 0 ? 'active' : ''">體驗</a>
                                <a class="text-circle-option -top" @click="experience_index = 1" :class="experience_index == 1 ? 'active' : ''">鍋物</a>
                                <a class="text-circle-option -right" @click="experience_index = 2" :class="experience_index == 2 ? 'active' : ''">咖啡</a>
                                <a class="text-circle-option -bottom" @click="experience_index = 3" :class="experience_index == 3 ? 'active' : ''">舒體</a>
                            </div>
                        </div>
                        <div class="experience-inner position-relative">
                            <div class="experience-item" :key="experience_index">
                                <h2 class="mb-4" v-html="experience[experience_index].title"></h2>
                                <h5 class="mb-4" v-html="experience[experience_index].text"></h5>
                                <router-link :to="experience[experience_index].link_url" class="left-line text-size-2">{{experience[experience_index].link_text}}</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="block-foods" class="section text-white">
                    <div class="d-flex h-100">
                        <div class="content-food -left d-flex flex-column justify-content-center position-relative"  :style="bgImg[0]">
                            <div class="mb-5">
                                <p class="line-top text-size-2">
                                    頂級食材源自產地與挑選<br>只願意提供最美好的食材給每位客戶
                                </p>
                                <h1>頂級食材</h1>
                            </div>
                            <div class="align-self-end mt-5">
                                <p class="text-size-2">探索更多橘色價值</p>
                                <div v-for="(item , $index) in bgImg" :key="$index" class="more-food-info" :style="item"></div>
                            </div>
                        </div>
                        <div class="content-food -right d-flex flex-column justify-content-center position-relative">
                            <svg class="loader">
                                <circle class="internal-circle" cx="350" cy="400" r="450"></circle>
                            </svg>
                            <h3 class="main-title text-black text-uppercase"><span class="fs-inherit text-orange">橘色 </span>體驗<br><span class="text-size-3 sub-title">about value</span></h3>
                            <div class="food-info-inner d-flex flex-column justify-content-center p-5">
                                <p class="text-size-2 mb-2">橘色美食背後的秘密</p>
                                <h4 class="text-food-title mb-4">食材的<span class="text-black">秘密</span></h4>
                                <p class="text-food-info">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="block-brands" class="section text-white position-relative text-center bg-black-cover" :style="'background: url(' + brandBg[brandIndex].background + ')'">
                    <div class="container position-relative m-auto h-100 ">
                        <div class="row h-100 flex-column align-items-center justify-content-center">
                            <h3 class="main-title text-uppercase"><span class="fs-inherit text-orange">橘色</span>版圖<br><span class="text-size-3 sub-title">orange brands</span></h3>
                            <div class="content-brands d-flex align-items-center justify-content-between w-100 mt-5 mb-5">
                                <span class="btn-orange"  @click="brandIndex = 0">橘色涮涮屋</span>
                                <div class="info-brands border-radius-100 d-flex flex-column justify-content-center text-left">
                                    <p>{{brandBg[brandIndex].title}}</p>
                                    <div class="d-flex text-size-3">
                                        <router-link :to="brandBg[brandIndex].contact" class="brands-link">聯絡我們</router-link>
                                        <span>・</span>
                                        <router-link :to="brandBg[brandIndex].book" class="brands-link">線上訂位</router-link>
                                    </div>
                                </div>
                                <span class="btn-orange" @click="brandIndex = 1">M One Cafe</span>
                            </div>
                            <p class="text-brands" v-html="brandBg[brandIndex].text"></p>
                        </div>
                    </div>
                </div>
                <div id="block-news" class="section text-black position-relative text-center">
                    <div class="container position-relative m-auto section-pd">
                        <div class="row flex-column align-items-center justify-content-center flex-nowrap">
                            <h3 class="main-title text-uppercase"><span class="fs-inherit text-orange">橘色</span>新訊<br><span class="text-size-3 sub-title">events & news</span></h3>
                            <div class="news-body">
                                <div class="news-categories d-flex text-size-2 mt-5 mb-3">
                                    <div v-for="(item,$index) in newsCategories" :key="$index" class="category-items mr-4 ml-4">{{item}}</div>
                                </div>
                                <div class="news-list d-flex flex-column flex-wrap">
                                    <div v-for="(item,$index) in newsItems" :key="$index" class="news-item">
                                        <div class="news-head" :style="'background: url(' + item.background + ')'">
                                            <router-link :to="'/'" class="btn-border">了解更多</router-link>
                                        </div>
                                        <div>
                                            <span class="text-black text-size-1">{{item.date}}</span>
                                            <span class="text-orange text-size-1">{{item.category}}</span>
                                        </div>
                                        <a class="news-title" :href="item.link" v-html="item.title"></a>
                                    </div>
                                </div>
                            </div>
                            <router-link :to="'/'" class="btn-orange">更多橘色新訊</router-link>
                        </div>
                    </div>
                </div>
                <div id="footer" class="section text-white text-center bg-black-cover" style="background-image:url('/images/bg_footer.png')">
                    <div class="container h-100 section-pd">
                        <div class="row h-100">
                            <div class="footer footer-join position-relative d-flex align-items-center justify-content-between w-100">
                                <h4 class="text-left"><span>不僅僅只是台灣最棒的餐飲集團</span><br><span class="text-orange">還是實現自我未來的大家庭</span></h4>
                                <router-link :to="'/'" class="btn-orange">馬上加入我們</router-link>
                            </div>
                            <div class="footer footer-info position-relative d-flex justify-content-between align-items-center w-100">
                                <div class="text-size-2">
                                    <p class="text-orange footer-info-title mb-4">聯絡我們</p>
                                    <p>台北市大安區仁愛路四段37號3樓之B</p>
                                    <p>Email:  service@orange.co<br>Phone:  02-2711-4636<br>Fax:  02-2711-4638</p>
                                </div>
                                <img class="logo" src="/images/index_logo.png">
                                <div class="text-size-2">
                                    <p class="text-orange footer-info-title mb-4">橘色精神</p>
                                    <p class="text-size-3">用心 · 貼心 · 安心<br>信心 · 一心 · 同理心</p>
                                </div>
                            </div>
                            <div class="footer footer-social position-relative">
                                <a href="#"><font-awesome-icon icon="facebook" /></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                                <a href="#"><i class="fab fa-google-plus-g"></i></a>
                                <a href="#"><i class="fab fa-behance"></i></a>
                            </div>
                            <p id="copyright" class="footer position-relative w-100 text-size-1 d-flex align-items-end justify-content-center">2018 <a class="link-orange"> 橘色涮涮屋 </a> 版權所有. Designed by <a class="link-orange" href="www.daydream-lab.com"> Daydream Lab</a></p>
                        </div>
                    </div>
                </div>
            </full-page>
        </div>
    </div>
    
</template>
<style lang="sass">
    #app
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
        .fade-enter, .fade-leave-to
            opacity: 0

    .bg-black-cover
        &:before
            content: ""
            position: absolute
            width: 100%
            height: 100%
            background: rgba(0, 0, 0, 0.7)  
            left: 0 
    #content-experience
        &:before
            position: absolute
            width: 50%
            height: 100vh
            background: black
            content: ""
            left: 0
            opacity: 0.6
            top: calc(50% - 50vh)
            z-index: -1
            content: ""
            word-break: keep-all
        .big_title
            font-size: 220px
            color: rgba(255, 255, 255, 0.2)
            position: absolute
            left: 0
            top: 50%
            transform: translateY(-50%)
            width: 50%
            word-break: keep-all
            overflow: hidden
        .experience-inner
            width: 350px
            margin: 0 auto
            text-align: left
            font-weight: 300
            top: 100px
            h5
                letter-spacing: 4px
                font-weight: 300
            .left-line
                &:before
                    content: ""
                    display: inline-block
                    width: 20px
                    height: 5px
                    background: #f26d23
                    margin-right: 10px
                    vertical-align: middle
        .circle-option,.circle-body
            position: absolute
            width: 500px
            height: 500px
            top: calc(100% - 250px)
            left: calc(50% - 250px)
        .circle-body
            border-radius: 500px
            border: 30px solid rgba(255, 113, 34, 0.76)
            border-left-color: transparent
            z-index: -2
        .circle-option
            transition: all 2s
            transform: rotate(0)
            &.active
                opacity: 0
                transition: opacity .3s
            .text-circle-option
                position: absolute
                &:hover
                    cursor: pointer
                    color: #f26d23
                &.-top
                    top: -50px
                    left: 50%
                &.-bottom
                    bottom: -50px
                    left: 50%
                &.-right
                    top: 50%
                    right: -50px
                &.-left
                    top: 50%
                    left: -50px
                a
                    word-break: keep-all
                &.active
                    opacity: 0
                    transition: opacity 1s  
                    transition-delay: .5s
            @for $i from 0 through 3
                &.e_index_#{$i}
                    transform: rotate($i*(-90deg))
                    a
                        transition: all .3s 
                        transform: rotate($i*90deg) !important

    #block-foods
        .line-top
            &:before
                content: ""
                background: #f46f1b
                width: 100px
                height: 1px
                display: block
                margin-bottom: 30px
        .content-food
            flex: 1
            background-position: center
            background-repeat: no-repeat
            padding: 0 100px
            .more-food-info
                width: 100px
                height: 100px
                display: inline-block
                border-radius: 100%
                background-position: center
                background-size: cover
                cursor: pointer
                margin-right: 25px
            >div
                position: relative
                z-index: 2
            &.-left
                &:after
                    content: ""
                    position: absolute
                    left: 0
                    width: 100%
                    height: 100%
                    background: rgba(0, 0, 0, 0.6)
            &.-right
                &:before,&:after
                    content: ""
                    position: absolute
                    border-radius: 100%
                &:before
                    width: 850px
                    height: 850px
                    background: rgba(242, 108, 35, 0.1)
                    right: -540px
                    bottom: -480px
                &:after
                    width: 100px
                    height: 100px
                    background: rgba(0, 0, 0, 0.22)
                    right: -70px
                    bottom: 300px
                .food-info-inner
                    height: 500px
                    width: 500px
                    background: #f26d23
                    border-radius: 100%
                    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3)
                    .text-food-info
                        font-weight: 300
                        letter-spacing: 2px
                .loader
                    position: absolute
                    width: 50vw
                    height: 100vh
                    stroke-linecap: round
                    stroke-width: 5
                    fill: none
                    left: 0 
                    top: 120px  
                    .internal-circle
                        stroke: #f26c23
                        stroke-dasharray: 60%,10%,25%
                        opacity: .4
                        animation: internal 1.5s ease-in-out alternate
                        animation-play-state: paused
                        transform: rotate(0)
                        transform-origin: 350px 400px
        &.active
            .content-food
                &.-right
                    .internal-circle       
                        animation-play-state: running
                        animation-delay: 0.5s

    @keyframes internal 
        100% 
            transform: rotate(360deg)


    #block-brands
        background-repeat: no-repea
        background-size: cover  
        .container
            z-index: 2
            .content-brands
                .info-brands
                    width: 300px
                    height: 300px
                    background: rgba(242, 108, 35, 0.4)
                    border: 1px solid white
                    padding: 0 40px
                    font-size: 30px
            .text-brands
                font-size: 30px
                letter-spacing: 20px
                line-height: 45px
                font-weight: lighter
                .text-orange
                    letter-spacing: 20px
    #block-news
        &:before
            content: ""
            background-size: 25px 25px
            background-image: radial-gradient(#0000000d 20%, transparent 15%), radial-gradient(#0000000d 20%, transparent 20%)
            background-position: 10px 25px
            position: absolute
            width: 100%
            height: 400px
            left: 0
            top: 0
        .news-body
            .category-items
                cursor: pointer
                transition: all .3s
                &:hover
                    color: #f26e22
            .news-list
                height: 800px
                .news-item
                    width: 30%
                    .news-head
                        padding-top: 110%
                    .news-title
                        color: black

    #footer
        &:before
            background: rgba(0, 0, 0, 0.85)  
        .fp-tableCell
            position: relative
            z-index: 2
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            .footer-info-title
                letter-spacing: 5px
</style>

<script>
    import MenuHeader from 'components/block-header-menu'

    export default {
        data: function () {
            return {
                experience: [
                    {
                        big_title: '橘色體驗',
                        title: '<span class="fs-inherit text-orange">橘色 </span>體驗',
                        text: '獨一無二的橘色價值<br/>創造獨一無二的體驗',
                        link_url: '/',
                        link_text: '探索橘色體驗',
                    },
                    {
                        big_title: '橘色鍋物',
                        title: '<span class="fs-inherit text-orange">橘色 </span>鍋物',
                        text: '獨一無二的橘色價值<br/>創造獨一無二的體驗',
                        link_url: '/',
                        link_text: '探索橘色體驗',
                    },
                    {
                        big_title: '橘色咖啡',
                        title: '<span class="fs-inherit text-orange">橘色 </span>咖啡',
                        text: '獨一無二的橘色價值<br/>創造獨一無二的體驗',
                        link_url: '/',
                        link_text: '探索橘色咖啡',
                    },
                    {
                        big_title: '橘色舒體',
                        title: '<span class="fs-inherit text-orange">橘色 </span>舒體',
                        text: '獨一無二的橘色價值<br/>創造獨一無二的體驗',
                        link_url: '/',
                        link_text: '探索橘色體驗',
                    },
                ],
                experience_index: 0,
                options: {
                    menu: '#menu',
                    anchors: ['', '橘色體驗', '橘色價值', '橘色版圖', '橘色新訊'],
                    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
                },
                bgImg: ["background-image:url('/images/bg_food_1.png')" , "background-image:url('/images/bg_food_1.png')" , "background-image:url('/images/bg_food_1.png')"],
                selectFoodInfo: "",
                brandIndex: 0,
                brandBg: [
                    {
                        background: '/images/bg_brand_1.png',
                        title: 'EXTENSION1 by 橘色',
                        contact: '/',
                        book: '/',
                        text: '小鍋<span class="text-orange">新</span>時尚<br>不管多少人都能吃得精彩！',
                    },
                    {
                        background: '/images/bg_brand_1.png',
                        title: 'M One Cafe',
                        contact: '/',
                        book: '/',
                        text: 'M<span class="text-orange">One</span>Cafe<br>不管多少人都能吃得精彩！',
                    },
                ],
                newsItems: [
                    {
                        background: '/images/bg_brand_1.png',
                        date: '2018/3/21',
                        category: '橘色涮涮屋',
                        title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                        intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                        link: '/'
                    },
                    {
                        background: '/images/bg_brand_1.png',
                        date: '2018/3/21',
                        category: '橘色涮涮屋',
                        title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                        intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                        link: '/'
                    },
                    {
                        background: '/images/bg_brand_1.png',
                        date: '2018/3/21',
                        category: '橘色涮涮屋',
                        title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                        intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                        link: '/'
                    },
                    {
                        background: '/images/bg_brand_1.png',
                        date: '2018/3/21',
                        category: '橘色涮涮屋',
                        title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限 ',
                        intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                        link: '/'
                    },
                    {
                        background: '/images/bg_brand_1.png',
                        date: '2018/3/21',
                        category: '橘色涮涮屋',
                        title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                        intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                        link: '/'
                    },
                ],
                newsCategories: ['全部新訊','橘色涮涮屋','Extension 1 by 橘色','M One Cafe','M One Spa','Sakura Spa'],
                    
            }
        },
        mounted: function() {
            jQuery(document).ready(function(){

            }) // END jquery ready
        },
        components: {
            MenuHeader,
        }
    }
</script>
