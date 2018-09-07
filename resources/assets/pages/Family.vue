<template>
    <div id="block-family">
        <div class="slideshow position-relative">
            <div 
                class="slider position-relative d-flex flex-column align-items-center justify-content-end justify-content-lg-center" 
                style="background-image:url('/images/family_bg.png')"
            >
                <p class="slide-title text-white">實現你未來的夢想</p>
                <p class="slide-subtitle text-white">
                    踏足餐飲業的堅實第一步<br>
                    橘色大家庭為你實現
                </p>
                <p @click="onScolldown" class="slide-text text-white position-absolute d-none d-lg-block">讓我們帶你實現夢想！</p>
            </div>
        </div>
        <div id="family-intro">
            <h2 class="family-title text-orange text-right d-none d-lg-block">橘色<br>引領你築夢踏實<br>一步一步達成夢想</h2>
            <div class="family-step-list">
                <div 
                    class="family-step d-flex flex-column flex-lg-row"
                    v-for="(item,$index) in family_steps"
                    :key="$index"
                    :id="'step-'+$index"
                    :class="{'flex-lg-row-reverse' : $index == 1}"
                >
                    <div class="left position-relative">
                        <h1 class="big_title text-orange position-absolute">{{item.bigTitle}}</h1>
                        <img class="w-100" :src="item.img" />
                    </div>
                    <div class="right position-relative p-5 d-flex flex-column justify-content-center">
                        <div class="family-content">
                            <p class="step-title text-orange">{{item.title}}</p>
                            <p class="subtitle">{{item.subtitle}}</p>
                            <p class="desc" v-html="item.desc"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="teams-say" class="d-none d-lg-block">
            <div
                class="d-flex teams-content text-white position-relative align-items-center" 
                :style="'background-image:url('+slick_teams[teamIndex].img_big+')'"
            >
                <div class="team-content-texts position-relative">
                    <h3 class=" position-relative">看看我們的夥伴們怎麼說</h3>
                    <p class="team-desc position-relative" v-html="slick_teams[teamIndex].text"></p>
                    <span class="team-name d-block text-right  position-relative">- {{slick_teams[teamIndex].team}} {{slick_teams[teamIndex].member}}</span>
                </div>
            </div>
            <slick
                class="teams"
                ref="slick"
                :options="teamsOption"
            >
                <div 
                    v-for="(item,$index) in slick_teams"
                    :key="$index"
                    class="team-item position-relative d-flex flex-column align-items-center justify-content-center" 
                    :class="{'active' : $index == 0}"
                    :style="'background-image:url('+item.img+')'"
                    @click="teamIndex = $index"
                >
                    <p class="team-title text-center">{{item.team}}<br>{{item.member}}</p>
                </div>
            </slick>
        </div>
        <div id="teams-say" class="d-block d-lg-none">
            <h3>看看我們的夥伴們怎麼說</h3>
            <slick
                class="teams"
                ref="slick"
                :options="teamsOption"
            >
                <div
                    class="d-flex teams-content text-white position-relative align-items-center" 
                    v-for="(item,$index) in slick_teams"
                    :key="$index"
                >
                    <div 
                        class="team-content-texts position-relative" 
                        :style="'background-image:url('+item.img_big+')'"
                    >
                        <p class="team-desc position-relative" v-html="item.text"></p>
                    </div>
                </div>
            </slick>
        </div>
        <block-footer></block-footer>
    </div>
</template>

<script>
import MenuHeader from 'components/block-menu-header'
import BlockFooter from 'components/block-footer'
import Slick from 'vue-slick'

export default {
    data: function () {
        return {
            family_steps: [
                {
                    img: '/images/family_1.png',
                    bigTitle: '培育',
                    title: '堅實踏入餐飲的第一步',
                    subtitle: '要學，就像向最好的學習',
                    desc: '測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字',
                },
                {
                    img: '/images/family_2.png',
                    bigTitle: '家庭',
                    title: '堅實踏入餐飲的第一步',
                    subtitle: '要學，就像向最好的學習',
                    desc: '測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字',
                },
                {
                    img: '/images/family_3.png',
                    bigTitle: '夢想',
                    title: '堅實踏入餐飲的第一步',
                    subtitle: '要學，就像向最好的學習',
                    desc: '測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字',
                },
            ],
            teamsOption: {
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                        }
                    }
                ],
            },
            slick_teams: [
                {
                    team: '橘色公關團隊1',
                    member: '某某某',
                    text: '「測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字」',
                    img: '/images/family_s1.png',
                    img_big: '/images/family_s1.png',
                },
                {
                    team: '橘色公關團隊2',
                    member: '某某某',
                    text: '「測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字」',
                    img: '/images/family_s2.png',
                    img_big: '/images/family_s2.png',
                },
                {
                    team: '橘色公關團隊3',
                    member: '某某某',
                    text: '「測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字」',
                    img: '/images/family_s3.png',
                    img_big: '/images/family_s3.png',
                },
                {
                    team: '橘色公關團隊4',
                    member: '某某某',
                    text: '「測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字」',
                    img: '/images/family_s4.png',
                    img_big: '/images/family_s4.png',
                },
            ],
            teamIndex: 0,
        }
    },
    components: {
        MenuHeader,
        BlockFooter,
        Slick,
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
	    onScolldown(){
		    $('html, body').animate({
			    scrollTop: 900
		    }, 600);
        },
        handleInit(event, slick) {
            console.log('handleInit', event, slick);
        },
        
    },
    mounted: function() {
        jQuery(document).ready(function(){
            fadein();
            jQuery(window).scroll(function(){
                fadein();
            });

            jQuery(".team-item").click(function(){
                jQuery(".team-item.active").removeClass("active");
                jQuery(this).addClass("active");
            });

            function fadein(){
                let nowp = jQuery(window).scrollTop();
                if(nowp >= 200){
                    jQuery(".family-title").addClass("fadein");
                }
                else{
                    jQuery(".family-title").removeClass("fadein");
                }
                for(let i=0;i<=2;i++){
                	if(jQuery("#step-"+i).length > 0){
		                let nowb = jQuery("#step-"+i);
		                if(nowp >= nowb.offset().top - 700){
			                nowb.find(".left , .right").addClass("fadein");
		                }
		                else if(nowp < nowb.offset().top - 1200){
			                nowb.find(".left , .right").removeClass("fadein");
		                }
                    }
                }
            }
        });
    },
}
</script>

<style lang="sass">
@import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css')
@import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css')

#block-family
    .fadein
        top: 0 !important
        opacity: 1 !important
        transition: all .5s ease-out
        .big_title
            transform: translateY(0) !important
            transition: all .5s ease-out
        img
            transform: translateY(0) !important
            transition: all .5s ease-out

    .slideshow
        &:after
            content: ""
            position: absolute
            width: 100%
            height: 100%
            background: url(/images/family_bg_back.png)
            top: 0
            left: 0
            background-repeat: no-repeat
            background-position: bottom
        .slider
            position: relative
            overflow: hidden
            height: 90vh
            clip-path: ellipse(80vw 55vh at 50vw 30vh)
            z-index: 2
            background-size: cover
            &:before
                background: rgba(74, 31, 12, 0.5)
                width: 100%
                height: 100%
                top: 0
                left: 0
                z-index: 1
            p
                z-index: 2
            .slide-title
                font-size: 110px
                font-weight: 600
            .slide-subtitle
                font-size: 42px
                font-weight: 500
            .slide-text
                font-size: 18px
                bottom: 18vh
                cursor: pointer
                &:before , &:after
                    content: ""
                    position: absolute
                    width: 2px
                    height: calc(11vh + 60px)
                    background: white
                    left: 50%
                    top: 50px
                &:before
                    opacity: 0.6
                &:after
                    height: 30px 
                    animation: scrolling 1.5s infinite ease-in-out
            &:before
                content: ""
                position: absolute
                width: 100%
                height: 100%
                background: rgba(56, 26, 2, 0.16)
    @keyframes scrolling
        100%
            top: calc(10vh + 30px)

    #family-intro
        .family-title 
            font-size: 45px
            padding-right: 10vw
            line-height: 67px
            position: relative
            margin-top: 80px
            padding-right: 80px
            top: 100px
            opacity: 0
            transition: all .3s ease-out
            &:before
                content: ""
                position: absolute
                width: 1.6px
                height: 50px
                background: #f26e22
                top: 14px
                right: 65px
        .family-step-list
            #step-0
                &:before
                    background-image: url(/images/family_bg1.png)
                    left: 0
                    top: -150%
            #step-1
                &:before
                    background-image: url(/images/family_bg2.png)
                    background-position: right
                    top: -80%
            #step-2
                &:before
                    background-image: url(/images/family_bg3.png)
                    top: -50%
            .family-step
                margin-bottom: 350px
                position: relative
                &:before
                    content: ""
                    position: absolute
                    width: 100%
                    background-size: contain
                    background-repeat: no-repeat
                    padding-top: 95%
                .left
                    flex: 6
                    opacity: 0
                    transition: all .6s ease-out
                    .big_title
                        z-index: 1
                        transform: translateY(350px)
                    img
                        transform: translateY(150px)
                        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1)
                .right
                    top: 300px
                    flex: 3
                    opacity: 0
                    transition: all .6s ease-out
                    .big_title
                        z-index: 1
                        transform: translateY(350px)
                    img
                        transform: translateY(150px)
                &:nth-child(2n)
                    flex-direction: row-reverse
                    .big_title
                        text-align: right
                    .big_title , .step-title , .subtitle , .desc
                        margin-right: 0
                        margin-left: auto
                .big_title , .step-title , .subtitle , .desc
                    font-weight: 500
                    width: 60%
                .big_title
                    opacity: 0.6
                    font-size: 250px
                    top: -210px
                    font-weight: 600
                    width: 100%
                    padding: 0 80px
                .step-title 
                    font-size: 35px
                    width: max-content
                    margin-bottom: 25px
                    padding-right: 45px
                    border-right: 1px solid
                    line-height: 45px
                .subtitle
                    font-size: 23px
                    margin-bottom: 40px
                .desc
                    color: gray
    
    #teams-say
        .teams-content
            min-height: 700px
            padding: 0 20vw
            background-repeat: no-repeat
            background-size: cover
            background-position: center
            transition: all .5s
            .team-content-texts
                width: 60%
            &:before
                content: ""
                position: absolute
                background: rgba(0, 0, 0, 0.3)
                width: 100%
                height: 100%
                left: 0
                top: 0
                z-index: 1
            &:after
                content: ""
                position: absolute
                top: calc(50% - 215px)
                left: 180px
                background-image: url(/images/q.png)
                background-repeat: no-repeat
                background-size: contain
                width: 332px
                height: 430px
            h3
                margin-bottom: 50px
                font-size: 40px
                z-index: 2
            .team-desc
                line-height: 40px
                font-size: 18px
                margin-bottom: 30px
                padding-left: 100px
                z-index: 2
                &:before
                    content: '“'
                    font-size: 150px
                    position: absolute
                    left: auto
                    top: 20px
                    color: #f26d22
                    transform: rotate(180deg)
                    transform-origin: 0 0
            .team-name
                font-size: 20px
                z-index: 2
        .teams
            .team-item
                height: 25vw
                cursor: pointer
                box-shadow: 10px 0px 40px rgba(0, 0, 0, 0.15)
                background-size: cover
                background-position: center
                @for $i from 0 through 3
                    &:nth-child(#{$i+1})
                        z-index: 3 - $i
                .team-title
                    font-size: 35px
                    color: #f26c24
                    z-index: 1
                &:before
                    content: ""
                    position: absolute
                    width: 100%
                    height: 100%
                    background: white
                &:hover , &.active
                    .team-title
                        color: white
                    &:before
                        background: rgba(242, 108, 36, 0.85)
                        transition: all .5s
        
    @keyframes swichAnimate
        100%
            opacity: 0        
                        
    @media only screen and (max-width: 991px)
        .slideshow 
            &:after
                display: none
            .slider 
                clip-path: none
                height: 220px
                padding-bottom: 10px
                .slide-title
                    font-size: 32px
                    letter-spacing: 5px
                    font-weight: 500
                    margin-bottom: 5px
                .slide-subtitle
                    font-size: 16px
                    text-align: center !important
        #family-intro 
            .family-step-list 
                .family-step 
                    margin: 50px 0 0 0
                    .left 
                        .big_title
                            font-size: 23px
                            top: 0
                            white-space: nowrap
                            padding: 0
                            font-weight: 400
                            opacity: 1
                            position: relative !important
                            text-align: center
                            margin-bottom: 25px
                        img
                            padding: 0 20px
                    .right
                        padding: 20px !important
                    .step-title , .subtitle , .desc
                        font-size: 16px
                        width: 100%
                    .step-title
                        padding: 0
                        margin: 0
                        border: none
                    .subtitle
                        margin-bottom: 15px
                    .desc
                        font-size: 14px
        
        #teams-say 
            margin-top: 50px
            h3
                font-size: 21px
                color: #f26e22
                text-align: center
                margin-bottom: 22px
            .teams-content
                padding: 0
                min-height: unset
                .team-content-texts
                    width: 100%
                    height: 300px
                    padding: 40px 20px
                    background-size: cover
                    background-position: 80px top
                .team-desc
                    padding: 0  
                    width: 60%
                    line-height: 20px
                    font-size: 14px
                    letter-spacing: 1px
                    &:before
                        display: none
                &:after
                    display: none
            .slick-dotted
                &.slick-slider
                    margin-bottom: 0
            .slick-dots
                bottom: 8px
                li
                    button
                        &:before
                            opacity: 1
                            color: white
                    &.slick-active 
                        button
                            &:before
                                opacity: 1
                                color: #eb5e00


</style>
