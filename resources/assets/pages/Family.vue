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
                class="slider d-flex flex-column align-items-center justify-content-center" 
                :style="'background-image:url('+item.bg+')'"
            >
                <p class="slide-title text-white">{{item.title}}</p>
                <p class="slide-subtitle text-white" v-html="item.subtitle"></p>
                <p class="slide-text text-white position-absolute">{{item.scrollText}}</p>
            </div>
        </slick>
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
        .slider
            height: 100vh
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
                bottom: 8vh
                &:after
                    content: ""
                    position: absolute
                    width: 2px
                    height: calc(10vh + 30px)
                    background: white
                    left: 50%
                    top: 50px
            &:before
                content: ""
                position: absolute
                width: 100%
                height: 100%
                background: rgba(56, 26, 2, 0.16)
</style>
