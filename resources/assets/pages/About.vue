<template>
    <div id="block-about" class="position-relative">
        <banner title="關於<span class='text-orange'>橘色</span>" img="/images/banner_about.png"></banner>
        <div id="about-tabs" class="container">
            <div class="about-tabs-body row container pl-0 pr-0 justify-content-between m-auto">
                <a class="tab text-center active" data-target = '#block-secret'>橘色秘密</a>
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
                    <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center">
                        <div class="service-left position-relative">
                            <div class="service-item d-flex flex-column position-relative justify-content-center align-items-center text-center">
                                <div class="service-img mr-3 mr-lg-0" style="background-image:url('/images/about_year_1.png');"></div>
                                <div class="service-content text-white">
                                    <p class="service-title">用心服務</p>
                                    <p class="service-desc">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文測</p>
                                </div>
                            </div>
                        </div>
                        <div class="service-right position-relative">
                            <div class="service-item top d-flex flex-column position-relative justify-content-center align-items-center text-center">
                                <div class="service-img" style="background-image:url('/images/about_year_2.png');"></div>
                                <div class="service-content text-white">
                                    <p class="service-title">用心服務</p>
                                    <p class="service-desc mb-0">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文測</p>
                                </div>
                            </div>
                            <div class="service-item bottom flex-column d-flex position-relative justify-content-center align-items-center text-center">
                                <div class="service-img mr-3 mr-lg-0" style="background-image:url('/images/about_year_3.png');"></div>
                                <div class="service-content text-white">
                                    <p class="service-title">用心服務</p>
                                    <p class="service-desc">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文測</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="block-about-year">
            <div class="circle-wapper">
                <div class="circle-a"></div>
                <div class="circle-b"></div>
            </div>
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
                    @click="onClickYear($index);"
                >
                    <p class="text-year mb-0">{{item.year}}</p>
                    <span class="dot-year">
                        <div class="dot-radar"></div>
                    </span>
                </div>
            </slick>
            <div class="year-body">
                <div class="container">
                    <div class="row">
                        <div class="year-left text-center">
                            <p>
                               <span  class="text-orange">
                                    <span style="margin-right: -0.6rem;">20</span>
                                     <span class="position-relative" style="margin-right: -0.6rem;">
                                         <transition-group :name="yearTransition" mode="out-in">
                                             <span v-for="(n, $index) in 2" v-if="yearthree(yearEvents[yearIndex].year) == $index" :key="$index">
                                                {{$index}}
                                             </span>
                                         </transition-group>
                                    </span>
                                    <span class="position-relative">
                                         <transition-group :name="yearTransition" mode="out-in">
                                             <span v-for="(yearEvent, $index) in yearEvents" v-if="yearIndex == $index" :key="$index">
                                                {{yearend(yearEvent.year)}}
                                             </span>
                                         </transition-group>
                                    </span>
                                </span>
                                <span>
                                    年
                                </span>
                            </p>
                        </div>
                        <div class="year-right text-center">
                            <transition-group enter-active-class="animated faster fadeIn position-absolute" leave-active-class="animated faster fadeOut">
                                <div class="year-month-list" style="top:0; left: 0" v-for="(yearEvent, $index) in yearEvents" :key="$index" v-if="yearIndex == $index">
                                    <div
                                            class="year-month-item d-flex"
                                            v-for="(item,$index) in yearEvents[yearIndex].content"
                                            :key="$index"
                                    >
                                        <div class="left text-left">
                                            <p class="month">{{item.month}}</p>
                                        </div>
                                        <div class="right text-left">
                                            <div 
                                                v-for="(monthEvent , $monthIndex) in item.list"
                                                :key="$monthIndex"    
                                            >
                                                <p class="title text-orange">{{monthEvent.title}}</p>
                                                <p class="content" v-html="monthEvent.desc"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </transition-group>
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
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                infinite: false,
                mobileFirst: true,
                responsive: [
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 4,
                        }
                    },
                ],
            },
	        yearTransition: 'to-small',
            yearIndex: 0,
            yearEvents: [
                {
                    year: 2018,
                    content: [
                        {
                            month: '9月',
                            list: [
                                {
                                    title: '橘色涮涮屋 A9店開幕',
                                    desc: '新光三越 A9店<br>首間結合信義百貨商圈分店，更誇界與時尚調酒 Abrazo Bistro跨界合作。',
                                },
                            ] 
                        },
                    ]
                },
                {
                    year: 2017,
                    content: [
                        {
                            month: '7月',
                            list: [
                                {
                                    title: 'Extension 1 by 橘色 開幕',
                                    desc: '由國際建築師丹下憲孝操刀，以極具存在感的大吧台為核心，同時以宏觀的角度來詮釋現代和風設計維持高品質，創造出不一樣的新風貌－譽有內湖最美頂級單人鍋之稱。',
                                },
                            ] 
                        },
                    ]
                },
                {
                    year: 2009,
                    content: [
                        {
                            month: '11月',
                            list: [
                                {
                                    title: 'M One Café 開幕',
                                    desc: '嚴選新鮮食材、搭配獨家配方，特聘駐美主廚精心設計私藏菜色，提供全日早午餐服務，享有『明星熱愛東區時尚早午餐咖啡館』。',
                                },
                                {
                                    title: 'M One SPA 開幕',
                                    desc: '日本旅客首選的幸福空間，以低調奢華的空間感，提供高規格的優質服務。',
                                },
                            ] 
                        },
                    ]
                },
                {
                    year: 2006,
                    content: [
                        {
                            month: '6月',
                            list: [
                                {
                                    title: '橘色涮涮屋仁愛店開幕',
                                    desc: '鄰近大安店，延續以客為尊、使其賓至如歸的精神，打造全包廂形式隔間及溫暖的宵夜服務。',
                                },
                            ] 
                        },
                    ]
                },
                {
                    year: 2004,
                    content: [
                        {
                            month: '7月',
                            list: [
                                {
                                    title: 'SAKURA 男女健康生活館開幕',
                                    desc: '位於仁愛圓環，台灣首創提供個人包廂、衛浴設備、新鮮果汁暨全身舒壓及足部推拿的優質環境。',
                                },
                            ] 
                        },
                    ]
                },
                {
                    year: 2001,
                    content: [
                        {
                            month: '11月',
                            list: [
                                {
                                    title: '橘色涮涮屋大安店開幕',
                                    desc: '座落大安區以頂級食材、貼心服務、與舒適氛圍為精緻火鍋創先例，同時為餐飲業傳遞新文化。',
                                },
                            ] 
                        },
                    ]
                },
                {
                    year: 2000,
                    content: [
                        {
                            month: '12月',
                            list: [
                                {
                                    title: '橘色涮涮屋 大安店',
                                    desc: '袁永定先生創立橘色涮涮屋，大安店開幕',
                                },
                            ] 
                        },
                    ]
                },
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
        yearend(year){
            return year.toString().substring(year.toString().length-1, year.toString().length)
        },
        yearthree(year){
            return year.toString().substring(year.toString().length-2, year.toString().length-1)
        },
        onClickYear(index){
            if(this.yearIndex > index){
                this.yearTransition = 'to-big'
            }else{
                this.yearTransition = 'to-small'
            }

            this.yearIndex = index
        }
    },
    components: {
        Banner,
        MenuHeader,
        BlockFooter,
        Slick,
    },
    mounted: function() {
        jQuery(document).ready(function(){

            //scrollTabs();

            jQuery(".tab").click(function(){
                let target = jQuery(this).attr("data-target");
                jQuery(".tab.active").removeClass("active");
                jQuery(this).addClass("active");
                jQuery("html,body").animate({
                    scrollTop: jQuery(target).offset().top - 62
                }, 300);

            });

            jQuery(window).scroll(function(){
                scrollTabs();
                scrollCircles();
            });
            jQuery("#block-about-year .circle-wapper").attr("style", 'top: '+ (jQuery("#block-about-year").offset().top - 150) + 'px; height: ' + jQuery("#block-about-year").height() + 'px');

            scrollTabs();
            scrollCircles();

            function scrollCircles(){
            	if(jQuery("#block-about-year .circle-a").length > 0){
		            let dis = (jQuery(window).scrollTop() - jQuery("#block-about-year .circle-a").offset().top)
		            if( dis > 600){
			            dis = 600
		            }
		            if(dis < -300){
			            dis = -300
		            }

		            jQuery("#block-about-year .circle-a").attr("style", 'transform: translateY('+ ((dis/5)) + 'px) translateX('+ ((dis/10)) + 'px)');

	            }

	            if(jQuery("#block-about-year .circle-b").length > 0){
		            let disb = (jQuery("#block-about-year .circle-b").offset().top - jQuery(window).scrollTop())
		            if( disb > 1200){
			            disb = 1200
		            }
		            if(disb < -1200){
			            disb = -1200
		            }
		            jQuery("#block-about-year .circle-b").attr("style", 'transform: translateY('+ (0-(disb/5)) + 'px) translateX('+ (0-(disb/10)) + 'px)');
                }


            }

            function scrollTabs(){
	            if(jQuery("#block-about-year .circle-b").length > 0){
		            if(jQuery(window).scrollTop() >= jQuery("#block-secret").offset().top - 100){
			            jQuery("#about-tabs").addClass("position-fixed");
			            // jQuery("#header").addClass("hidden");
		            }
		            else{
			            jQuery("#about-tabs").removeClass("position-fixed");
			            // jQuery("#header").removeClass("hidden");
		            }
                }

                if(jQuery("#block-about-year").length > 0){
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

            }
        }) // END jquery ready
    },
}
</script>

<style lang="sass">
    @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css')
    @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css')

    .main-title
        font-size: 50px
        margin-bottom: 0
    .sub-title
        font-size: 20px
        letter-spacing: 10px
        font-family: "PingFang SC",微軟正黑體
    #about-tabs
        position: absolute
        margin: auto
        width: 100vw
        left: 50%
        transform: translateX(-50%)
        margin-top: 50px

        &.position-fixed
            border-bottom: 2px solid #efefef
            position: fixed
            top: 0px
            z-index: 99999
            max-width: unset
            background: white
            margin-top: 0
            .about-tabs-body
                margin-bottom: -2px !important
        .tab
            transition: all 0.3s
            color: gray
            font-size: 20px
            flex: 1
            border-bottom: 2px solid #efefef
            padding: 15px 0
            cursor: pointer
            &:hover
                border-bottom: 3px solid rgba(#f26c24, 0.5)
                color: rgba(#f26c24, 0.85)
            &.active
                border-bottom: 3px solid #f26c24
                color: #f26c24
    #block-about
        overflow: hidden
    #block-secret
        padding: 70px 0
        margin: 130px 0
        .sub-title
            margin-bottom: 40px
        .about-content
            width: 70%
            margin: 0 auto
            line-height: 30px
            font-weight: 500
    #block-about-service
        margin-bottom: 270px
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
            
            .service-left , .service-right
                flex: 1
                .service-item
                    .service-img
                        width: 100%
                        background-size: cover
                        background-repeat: no-repeat
                        background-position: center
                    .service-content
                        padding: 80px
                        opacity: 0
                        position: absolute
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
            .service-left
                top: -80px
                .service-item
                    .service-img
                        height: 750px
            .service-right
                top: -80px
                .service-item
                    &.top
                        .service-img
                            height: 350px
                    &.bottom
                        .service-img
                            height: 480px
    #block-about-year
        padding-top: 70px
        margin-bottom: 150px
        .circle-wapper
            pointer-events: none
            position: absolute
            width: 100vw
            height: 100vh
            .circle-a
                //transition: transform 1s
                background: #feefe8
                width: 800px
                height: 800px
                position: absolute
                top: -76%
                left: -12%
                border-radius: 100%
                z-index: -1
            .circle-b
                //transition: transform 1s
                background: rgb(253, 248, 244)
                width: 1100px
                height: 1100px
                position: absolute
                bottom: -76%
                right: -30%
                border-radius: 100%
                z-index: -1
        .year
            .slick-list
                height: 230px
                margin: 3rem 0 0 0
            .year-item
                top: 49px
                padding-bottom: 35px
                &.active
                    .text-year
                        color: #f26d22
                    .dot-year
                        .dot-radar
                            transform: scale(1)
                &:not(.active)
                    .dot-year
                        &:hover
                            .dot-radar
                                transition: all .5s
                                animation: yeardot 1.2s infinite ease-in-out
                &:hover
                    color: mix(#f26d22, black, 95%)
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
                        width: 24px
                        height: 24px
                        background: rgba(255, 205, 177, 0.45)
                        border-radius: 100%
                        left: -7px
                        top: -7px
                    .dot-radar
                        content: ""
                        transition: transform 0.3s
                        position: absolute
                        border-radius: 100%
                        width: 180px
                        height: 180px
                        transform: scale(0)
                        background: rgba(255, 205, 177, 0.1)
                        left: -85px
                        top: -85px
            .slick-arrow
                color: transparent
                background: transparent
                border: none
                &:before
                    line-height: 8px
                    content: "➝"
                    display: inline-block
                    color: gray
                    font-size: 22px
                &.slick-prev
                    &:before
                        transform: scaleX(-1)
            .slick-next:focus:before, .slick-next:hover:before, .slick-prev:focus:before, .slick-prev:hover:before
                color: #f26d22
            .text-year
                font-size: 20px
                font-weight: 500
        .year-body
            .year-left
                flex: 1
                border-right: 1px solid #fbc1a2
                padding: 40px 100px 40px 0
                p
                    font-size: 20px
                    span
                        display: inline-block
                        font-size: 35px
            .year-right
                height: 470px
                overflow-y: scroll
                flex: 5
                padding: 40px 0 40px 100px
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
                        div
                            border-bottom: 1px solid #ececec
                            padding: 10px 0
                            &:first-child
                                padding-top: 0
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
        0%
            transform: scale(0.3)
        50%
            transform: scale(0.5)
        100%
            transform: scale(0.3)

    @media only screen and (max-width: 991px)
        #app
            .main-title 
                margin-bottom: 5px
                .text-orange
                    color: #f26e22 !important
            .sub-title
                    margin-bottom: 15px
            #about-tabs
                display: none
            #block-secret 
                margin-bottom: 0
                margin-top: 0
                padding: 50px 0
                .about-content
                    width: 100%
                    text-align: left !important
                    font-size: 14px
                    line-height: 25px
                
            #block-about-service 
                margin-bottom: 0
                .service-body 
                    height: auto
                    background: none !important
                    &:before
                        background: none
                    .service-left , .service-right
                        flex: 100%
                        top: 0
                        .service-item 
                            align-items: end !important
                            margin-bottom: 20px
                            .service-img
                                padding-top: 40%
                                height: auto
                            .service-content
                                color: black !important
                                position: relative
                                opacity: 1
                                padding: 0px
                                margin-top: 10px
                                .service-title
                                    color: #f26c24
                                    font-size: 14px
                                .service-desc
                                    font-size: 14px
                                    line-height: 25px
                                    text-align: left
                    .service-left
                        top: 0
            
            #block-about-year
                padding-top: 50px
                .year 
                    .slick-list
                        height: 110px
                        margin: 0 0 20px 0
                    .slick-next
                        right: 10px
                        top: calc(50% + 10px)
                    .slick-prev
                        left: 10px
                        top: calc(50% + 10px)
                    .year-item
                        top: 0
                        &.active 
                            .dot-year 
                                .dot-radar
                                    transform: scale(0.5)
                .year-body 
                    .year-left
                        padding: 40px 0
                        flex: 2
                        span
                            font-size: 20px
                    .year-right
                        padding: 0 0 0 15px
                        .year-month-list 
                            .year-month-item 
                                .left 
                                    flex: 2
                                    text-align: center !important
                                    .month
                                        font-size: 18px
                                .right
                                    padding: 0 10px
                                    .title
                                        font-size: 16px

            #block-about-video 
                .video-content 
                    h3
                        font-size: 28px
                    .video-desc
                        font-size: 14px
                        margin-bottom: 20px
                        padding-bottom: 20px
                    .btn-orange.fat
                        padding: 15px 0 !important
                        font-size: 13px
                        width: 100%
                        text-align: center



</style>
<style lang="sass">
    .to-small-enter-active
        animation: to-small-enter 0.3s
    .to-small-leave-active
        position: absolute
        right: 0
        top: 0
        animation: to-small-leave 0.3s

    .to-big-enter-active
        animation: to-big-enter 0.3s

    .to-big-leave-active
        position: absolute
        right: 0
        top: 0
        animation: to-big-leave 0.3s

    @keyframes to-small-leave
        from
            opacity: 1
            transform: translateY(0)
        to
            opacity: 0
            transform: translateY(-100%)
    @keyframes to-small-enter
        from
            opacity: 0
            transform: translateY(100%)
        to
            opacity: 1
            transform: translateY(0px)


    @keyframes to-big-leave
        from
            opacity: 1
            transform: translateY(0)
        to
            opacity: 0
            transform: translateY(100%)
    @keyframes to-big-enter
        from
            opacity: 0
            transform: translateY(-100%)
        to
            opacity: 1
            transform: translateY(0px)
</style>
