<template>
    <div id="block-brands" class="section text-white position-relative text-center">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css">
        <div class="bg-transition -old bg-black-cover"
             :class="{'active' : addTransition, select: brandIndex == 0}"
             style="right: auto; left: 0"
             :style="'background-image: url(' + brandItems[0].url + ')'">
        </div>
        <div class="bg-transition -new bg-black-cover"
             :class="{'active' : addTransition, select: brandIndex == 1}"
             style="right: 0; left: auto"
             :style="'background-image: url(' + brandItems[1].url + ')'">
        </div>
        <div class="container position-relative m-auto h-100 justify-content-center d-flex align-items-center">
            <div class="row h-100 w-100 flex-column align-items-center justify-content-between d-md-flex d-none">
                <div>
                    <h3 class="main-title text-uppercase">
                        <span class="fs-inherit text-orange">
                            橘色</span>版圖<br>
                    </h3>
                    <span class="sub-title">orange brands</span>
                </div>
                <div id="slide-brands" class="content-brands w-100 d-flex align-items-center justify-content-between mt-5 mb-5">
                    <!-- <span class="btn-orange"  @click="brandIndex = 0; startAnimate('500')">橘色涮涮屋</span> -->
                    <!-- <div 
                        class="info-brands align-items-end border-radius-100 d-flex justify-content-center text-left position-relative"
                        :style="'background-image: url(' + brandItems[brandIndex].logo + ')'"
                    >    
                        <a :href="brandItems[brandIndex].contact">聯絡我們</a>
                        <span>・</span>
                        <a :href="brandItems[brandIndex].book">線上訂位</a>
                    </div> -->
                    <!-- <span class="btn-orange" @click="brandIndex = 1; startAnimate('500')">M One Cafe</span> -->
                    <span>zzz</span>
                    <span>zzz</span>
                </div>
                <p class="text-brands" v-html="brandItems[brandIndex].text" :class="{'fade' : addTransition}"></p>
            </div>
            <div class="d-md-none d-block　position-relative">
                <div>
                    <h3 class="main-title text-uppercase">
                        <span class="fs-inherit text-orange">
                            橘色</span>版圖<br>
                    </h3>
                    <span class="sub-title">orange brands</span>
                </div>
                <div
                    class="slide slick-brands"
                    v-for="(item,$index) in brandItems"
                    :key="$index"
                >
                    <div class="content-brands position-relative d-flex flex-column align-items-center justify-content-center" >
                        <div 
                            class="info-brands align-items-end position-relative border-radius-100 d-flex justify-content-center text-left"
                            :style="'background-image: url(' + item.logo + ')'"
                        >
                            <a :href="brandItems[brandIndex].contact">聯絡我們</a>
                            <span>・</span>
                            <a :href="brandItems[brandIndex].book">線上訂位</a>
                        </div>
                        <div class="slick-brand-text">
                            <p class="text-title">{{item.title}}</p>
                            <p class="text-brand-info" v-html="item.text"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<style lang="sass">
    
    // @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css')
    // @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css')

    #app
        #block-brands
            .fp-controlArrow
                &.fp-next , &.fp-prev
                    border: 3px solid white
                    width: 20px
                    height: 20px
                    border-radius: 5px 0 5px 0px
                    border-top-color: transparent
                    border-right-color: transparent
                    transform: rotate(225deg)
                    position: absolute
                    bottom: 90px
                    top: unset
                &.fp-prev
                    transform: rotate(45deg)
            .bg-black-cover
                width: 0
                height: 100vh
                transition: width 1.2s cubic-bezier(0.645, 0.045, 0.355, 1)
                background-position: center
                &.select
                    transition: width 1s cubic-bezier(0.645, 0.045, 0.355, 1)
                    width: 105vw

            .container
                z-index: 2
                padding: 0 15px   
                .row
                    padding: 100px 0 
                .content-brands
                    .info-brands
                        width: 300px
                        height: 300px
                        border: 1px solid white
                        padding: 60px 40px
                        font-size: 30px
                        background-size: 100px
                        background-repeat: no-repeat
                        background-position: center 50px
                        &:before
                            content: ""
                            position: absolute
                            background: rgba(242, 108, 35, 0.4)
                            width: 100%
                            height: 100%
                            background: rgba(242, 108, 35, 0.4)
                            border-radius: 100%
                            left: 0
                            z-index: -1
                            bottom: 0
                        a , span
                            font-size: 16px
                            
                .text-brands
                    font-size: 30px
                    letter-spacing: 20px
                    line-height: 45px
                    font-weight: lighter
                    .text-orange
                        letter-spacing: 20px

        @media only screen and (max-width: 991px)
            .slick-brands
                // margin: 50px 0
        
        @media only screen and (max-width: 768px)
            #block-brands 
                .fp-slides
                    height: calc(100vh - 200px)
                .fp-tableCell
                    height: 100% !important
                .container 
                    .content-brands 
                        .info-brands
                            width: 250px
                            height: 250px
                            margin-bottom: 50px
                        .slick-brand-text
                            width: 250px
                            .text-brand-info
                                line-height: 30px


</style>
<script>
import Slick from 'vue-slick'

export default {
        data: function () {
            return {
                addTransition: false,
                brandIndex: 0,
                brandIndex_old: 0,
                brandItems: [
                    {
                        url: '/images/bg_brand_1.png',
                        title: 'EXTENSION by 橘色',
                        text: '美食不孤單，小鍋新<span class="text-orange">新</span>食尚！<br>享受一個人的自在、兩個人的美好、一群人的熱鬧！',
                        logo: '/images/home3_icon1.png',
                        contact: '#',
                        book: '#',
                    },
                    {
                        url: '/images/slideshow_1.jpg',
                        title: 'M One Cafe',
                        text: 'M<span class="text-orange">One</span>Cafe<br>不管多少人都能吃得精彩！',
                        logo: '/images/home3_icon2.png',
                        contact: '#',
                        book: '#',
                    },
	                {
		                url: '/images/slideshow_1.jpg',
		                title: '橘色鍋物',
                        text: '<span class="text-orange">橘色</span>鍋物<br>不管多少人都能吃得精彩！',
                        logo: '/images/icon_cafe.png',
                        contact: '#',
                        book: '#',
                    },
                    {
		                url: '/images/slideshow_1.jpg',
		                title: '橘色舒體',
                        text: '<span class="text-orange">橘色</span>舒體',
                        logo: '/images/icon_m1spa.png',
                        contact: '#',
                        book: '#',
	                },
                ],
            }
        },
        methods: {
            startAnimate(time){
                this.addTransition = true;
                setTimeout(()=>{
                    this.addTransition = false;
                    this.brandIndex_old = this.brandIndex;
                },parseInt(time));
            },
        },
        mounted: function() {
            jQuery(document).ready(function(){
                jQuery("#slide-brands").slick({
                    slidesToScroll: 1,
                    slidesToShow: 1,
                });
            });
        },
        components: {
            Slick,
        },
}
</script>