<template>
    <div id="block-family">
        <slick
            class="slideshow"
            ref="slick"
            :options="slickOptions"
        >
            <div 
                v-for="(item,$index) in slick_items"
                :key="$index"
                class="slider position-relative d-flex flex-column align-items-center justify-content-center" 
                :style="'background-image:url('+item.bg+')'"
            >
                <p class="slide-title text-white">{{item.title}}</p>
                <p class="slide-subtitle text-white" v-html="item.subtitle"></p>
                <p class="slide-text text-white position-absolute">{{item.scrollText}}</p>
            </div>
        </slick>
        <div id="family-intro">
            <h2 class="family-title text-orange text-right">橘色<br>引領你築夢踏實<br>一步一步達成夢想</h2>
            <div class="family-step-list">
                <div 
                    class="family-step d-flex"
                    v-for="(item,$index) in family_steps"
                    :key="$index"
                >
                    <div class="left position-relative">
                        <h1 class="big_title text-orange position-absolute">{{item.bigTitle}}</h1>
                        <img class="w-100" :src="item.img" />
                    </div>
                    <div class="right p-5 d-flex flex-column justify-content-center">
                        <p class="step-title text-orange">{{item.title}}</p>
                        <p class="subtitle">{{item.subtitle}}</p>
                        <p class="desc" v-html="item.desc"></p>
                    </div>
                </div>
            </div>
        </div>
        <div id="teams-say">
            <div class="teams-content text-white position-relative" :style="'background-image:url('+slick_teams[teamIndex].img_big+')'">
                <div class="team-content-texts position-relative">
                    <h3 class="">看看我們的夥伴們怎麼說</h3>
                    <p class="team-desc position-relative" v-html="slick_teams[teamIndex].text"></p>
                    <span class="team-name d-block text-right">- {{slick_teams[teamIndex].team}} {{slick_teams[teamIndex].member}}</span>
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
                    :style="'background-image:url('+item.img+')'"
                    @click="teamIndex = $index"
                >
                    <p class="team-title text-center">{{item.team}}<br>{{item.member}}</p>
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
            slickOptions: {
                slidesToShow: 1,
                arrows: true,
            },
            slick_items: [
                {
                    bg: '/images/slideshow_1.jpg',
                    title: '實現你未來的夢想',
                    subtitle: '踏足餐飲業的堅實第一步<br>橘色大家庭為你實現',
                    scrollText: '讓我們帶你實現夢想!',
                },
                {
                    bg: '/images/bg_brand_1.png',
                    title: '實現你未來的夢想',
                    subtitle: '踏足餐飲業的堅實第一步<br>橘色大家庭為你實現',
                    scrollText: '讓我們帶你實現夢想!',
                },
            ],
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
            },
            slick_teams: [
                {
                    team: '橘色公關團隊1',
                    member: '某某某',
                    text: '「測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字」',
                    img: '/images/family_s1.png',
                    img_big: '/images/family_b1.png',
                },
                {
                    team: '橘色公關團隊2',
                    member: '某某某',
                    text: '「測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字」',
                    img: '/images/family_s1.png',
                    img_big: '/images/family_b1.png',
                },
                {
                    team: '橘色公關團隊3',
                    member: '某某某',
                    text: '「測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字」',
                    img: '/images/family_s1.png',
                    img_big: '/images/family_b1.png',
                },
                {
                    team: '橘色公關團隊4',
                    member: '某某某',
                    text: '「測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字」',
                    img: '/images/family_s1.png',
                    img_big: '/images/family_b1.png',
                },
                {
                    team: '橘色公關團隊5',
                    member: '某某某',
                    text: '「測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字」',
                    img: '/images/family_s1.png',
                    img_big: '/images/family_b1.png',
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
        handleInit(event, slick) {
            console.log('handleInit', event, slick);
        },
        
    },
}
</script>

<style lang="sass">
@import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css')
@import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css')

#block-family
    .slideshow
        &:before , &:after
            content: ""
            position: absolute
            border-radius: 100%
        &:before
            background: #f36f1b
            width: 120vw
            height: 65vw
            bottom: 0vw
            right: -20vw
            z-index: 1
        &:after
            width: 120vw
            height: 74vw
            background: #ffaa85
            left: -13vw
            top: -19vh
            z-index: 0
        .slick-list
            overflow: visible
            overflow-x: hidden
            z-index: 2
        .slick-next, .slick-prev
            z-index: 2
            color: white
            font-size: 12px
            letter-spacing: 2px
            width: auto
            padding: 15px 20px
            transition: all .3s
            text-transform: uppercase
            font-family: "PingFang SC",微軟正黑體
            font-weight: 300
            &:hover
                background: white
                color: #f36e1b
                font-weight: 500
            &:before
                content: none
        .slick-prev
            left: 20px
        .slick-next
            right: 20px
        .slick-slide
            position: relative
            overflow: hidden
            .slider
                height: 110vh
                clip-path: circle(150vh at 54vw -42vh)
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
                    &:before , &:after
                        content: ""
                        position: absolute
                        width: 2px
                        height: calc(20vh + 30px)
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
            &:before
                content: ""
                position: absolute
                width: 1.6px
                height: 50px
                background: #f26e22
                top: 14px
                right: 65px
        .family-step-list
            .family-step
                margin-bottom: 270px
                .left
                    flex: 6
                    img
                        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1)
                .right
                    flex: 3
                &:nth-child(2n)
                    flex-direction: row-reverse
                .big_title , .step-title , .subtitle , .desc
                    font-weight: 500
                    width: 60%
                .big_title
                    opacity: 0.5
                    font-size: 220px
                    top: -180px
                    left: 80px
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
            padding: 200px 300px
            background-repeat: no-repeat
            background-size: cover
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
            &:after
                content: "Q"
                font-size: 430px
                position: absolute
                top: -10px
                left: 180px
                opacity: 0.4
            h3
                margin-bottom: 50px
                font-size: 40px
            .team-desc
                line-height: 40px
                font-size: 18px
                margin-bottom: 30px
                padding-left: 100px
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
        .teams
            .team-item
                height: 25vw
                cursor: pointer
                box-shadow: 10px 0px 40px rgba(0, 0, 0, 0.15)
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
                &:hover
                    .team-title
                        color: white
                    &:before
                        background: rgba(242, 108, 36, 0.85)
                        transition: all .5s
        
            
                        

</style>
