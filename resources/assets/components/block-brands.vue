<template>
    <div id="block-brands" class="section text-white position-relative text-center bg-black-cover" :style="'background-image: url(' + brandItems[delayIndex].url + ')'">
        <!-- <div class="bg-transition -old bg-black-cover"
             :class="{select: brandIndex == indexNew}"
             style="right: auto; left: 0"
             :style="'background-image: url(' + brandItems[brandIndex].url + ')'">
        </div> -->
        <div class="bg-transition -new bg-black-cover"
             :class="{select: bgActive}"
             style="right: 0; left: auto"
             :style="'background-image: url(' + brandItems[indexNew].url + ')'">
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
                <span class="brand-title btn-prev slick-arrow" @click="slickPrev">{{brandItems[indexPrev].title}}</span>
                <slick 
                    ref="slick"
                    id="slide-brands" 
                    class="content-brands d-flex align-items-center justify-content-between mt-5 mb-5"
                    :options="slickOptions"
                >
                    <div
                        class="slick-brands"
                        v-for="(item,$index) in brandItems"
                        :key="$index"
                    >
                        <div class="content-brands position-relative d-flex flex-column align-items-center justify-content-between" >
                            <img :src="item.logo" />
                            <!-- <span class="brand-title">
                                {{item.title}}
                            </span> -->
                            <div 
                                class="info-brands align-items-end position-relative d-flex justify-content-center text-left"
                            >
                                <a :href="brandItems[brandIndex].contact">聯絡我們</a>
                                <span>・</span>
                                <a :href="brandItems[brandIndex].book">線上訂位</a>
                            </div>
                            <!-- <div class="slick-brand-text">
                                <p class="text-title">{{item.title}}</p>
                                <p class="text-brand-info" v-html="item.text"></p>
                            </div> -->
                        </div>
                    </div>
                </slick>
                <span class="brand-title btn-next slick-arrow" @click="slickNext">{{brandItems[indexNext].title}}</span>
                <p class="text-brands" v-html="brandItems[indexNext].text" :class="{'fade' : addTransition}"></p>
            </div>
            <div id="slide-brands-mobile"  class="d-md-none d-block　position-relative">
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
    #app
        #block-brands
            background-size: cover
            background-position: center
            .slick-arrow
                position: absolute
                width: 150px
                height: 50px
                background: #f26b23
                display: flex
                align-items: center
                justify-content: center
                transition: all .3s
                top: 50%
                &:hover
                    background: rgba(0, 0, 0, 0.8)
                    cursor: pointer
                &.btn-next
                    right: 15px
                &.btn-prev
                    left: 15px
            #slide-brands
                width: 50%
                .slick-list
                    content: ""
                    width: 300px
                    height: 300px
                    position: absolute
                    left: calc(50% - 150px)
                    background: rgba(242, 106, 35, .1)
                    border-radius: 100%
                    border: 1px solid white
            .fp-slidesNav
                display: none
            #slide-brands-mobile
                margin-top: 30px
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
                    top: calc(50% + 210px)
                &.fp-prev
                    transform: rotate(45deg)
            .bg-black-cover
                width: 0
                height: 100vh
                transition: width 1.2s cubic-bezier(0.645, 0.045, 0.355, 1)
                background-position: center
                &.select
                    //transition: width 1s cubic-bezier(0.645, 0.045, 0.355, 1)
                    //width: 105vw
                    animation: bgActive 1s

            .container
                z-index: 2
                padding: 0 15px   
                .row
                    padding: 100px 0 
                    .slick-track
                        display: flex
                        align-items: center
                    .slick-slide
                        .content-brands
                            width: 300px
                            height: 300px
                            border-radius: 100%
                            border-color: white
                            transition: all .5s
                            padding: 80px 0
                            //background: rgba(242, 107, 35, 0.1)
                            // &:before
                            //     content: ""
                            //     position: absolute
                            //     background: rgba(242, 108, 35, 0.4)
                            //     width: 100%
                            //     height: 100%
                            //     background: rgba(242, 108, 35, 0.4)
                            //     border-radius: 100%
                            //     left: 0
                            //     z-index: -1
                            //     bottom: 0
                            img
                                width: 100px
                                height: auto
                                margin-bottom: 20px
                            .brand-title
                                display: none
                            .info-brands , img
                                display: flex !important

                .text-brands
                    font-size: 26px
                    letter-spacing: 18px
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
                    #slide-brands-mobile 
                        .content-brands 
                            .text-title
                                display: none
                            .info-brands
                                width: 250px
                                height: 250px
                                margin-bottom: 30px
                            .slick-brand-text
                                width: 250px
                                .text-brand-info
                                    line-height: 30px
    @keyframes bgActive
        0%
            width: 0
        100%
            width: 100vw
            display: none

</style>
<script>
import Slick from 'vue-slick'

export default {
        data: function () {
            return {
                addTransition: false,
                brandIndex: 0,
                indexNext: 1,
                indexPrev: 3,
                indexNew: 0,
                delayIndex: 0,
                bgActive: false,
                brandItems: [
                    {
                        url: '/images/bg_brand_1.png',
                        title: 'EXTENSION1',
                        text: '美食不孤單，小鍋<span class="text-orange">新</span>食尚！<br>享受一個人的自在、兩個人的美好、一群人的熱鬧！',
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
		                url: '/images/bg_brand_1.png',
		                title: '橘色鍋物',
                        text: '<span class="text-orange">橘色</span>鍋物<br>不管多少人都能吃得精彩！',
                        logo: '/images/icon_cafe.png',
                        contact: '#',
                        book: '#',
                    },
                    {
		                url: '/images/slideshow_1.jpg',
		                title: '橘色舒體',
                        text: '<span class="text-orange">橘色</span>舒體<br>測試描述文字',
                        logo: '/images/icon_m1spa.png',
                        contact: '#',
                        book: '#',
	                },
                ],
                slickOptions: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    centerMode: true,
                    draggable: false,
                    arrows: false,
                    // nextArrow: '<span class="brand-title btn-next">橘色鍋物</span>',
                    // prevArrow: '<span class="brand-title btn-prev">橘色鍋物</span>',
                    centerPadding: 0,

                    // asNavFor: '#slide-brands',
                },
            }
        },
        methods: {
            slickNext() {
                this.bgActive = true;
                this.indexNew = this.indexNext;
                this.brandIndex++;
                this.indexNext++;
                this.indexPrev++;
                if(this.brandIndex >= this.brandItems.length){
                    this.brandIndex = 0;
                }
                if(this.indexPrev >= this.brandItems.length){
                    this.indexPrev = 0;
                }
                if(this.indexNext >= this.brandItems.length){
                    this.indexNext = 0;
                }
                setTimeout(()=>{
                    this.delayIndex = this.brandIndex;
                },800);
                setTimeout(()=>{
                    this.bgActive = false;
                },1400);
                this.$refs.slick.next();
            },
            slickPrev() {
                this.bgActive = true;
                this.indexNew = this.indexPrev;
                this.brandIndex--;
                this.indexNext--;
                this.indexPrev--;
                if(this.brandIndex <= 0){
                    this.brandIndex = (this.brandItems.length - 1);
                }
                if(this.indexPrev <= 0){
                    this.indexPrev = (this.brandItems.length - 1);
                }
                if(this.indexNext <= 0){
                    this.indexNext = (this.brandItems.length - 1);
                }
                setTimeout(()=>{
                    this.delayIndex = this.brandIndex;
                },800);
                setTimeout(()=>{
                    this.bgActive = false;
                },1400);
                this.$refs.slick.prev();
            }
        },
        mounted: function() {
            // jQuery(document).ready(function(){
            //     jQuery(".content-brands").click(function(){
            //         jQuery("#slide-brands").slickPrev();
            //     })
            // });
        },
        components: {
            Slick,
        },
}
</script>