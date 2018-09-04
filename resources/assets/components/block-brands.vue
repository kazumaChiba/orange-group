<template>
    <div id="block-brands" class="section text-white position-relative text-center">
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
                <div class="content-brands w-100 d-flex align-items-center justify-content-between mt-5 mb-5">
                    <span class="btn-orange"  @click="brandIndex = 0; startAnimate('500')">橘色涮涮屋</span>
                    <div 
                        class="info-brands border-radius-100 d-flex flex-column justify-content-center text-left position-relative"
                        :style="'background-image: url(' + brandItems[brandIndex].logo + ')'"
                    >    
                    </div>
                    <span class="btn-orange" @click="brandIndex = 1; startAnimate('500')">M One Cafe</span>
                </div>
                <p class="text-brands" v-html="brandItems[brandIndex].text" :class="{'fade' : addTransition}"></p>
            </div>
            <div class="d-block d-md-none">
                <h3 class="main-title text-uppercase">
                    <span class="fs-inherit text-orange">
                        橘色</span>版圖<br>
                </h3>
                <span class="sub-title">orange brands</span>
                <slick
                    class="slick-brands"
                    ref="slick"
                    :options="slickOptions"
                >
                    <div 
                        v-for="(item,$index) in brandItems"
                        :key="$index"
                        class="content-brands position-relative d-flex flex-column align-items-center justify-content-center" 
                    >
                        <div 
                            class="info-brands position-relative border-radius-100 d-flex flex-column justify-content-center text-left"
                            :style="'background-image: url(' + item.logo + ')'"
                        >
                        </div>
                        <div class="slick-brand-text">
                            <p class="text-title">{{item.title}}</p>
                            <p class="text-brand-info" v-html="item.text"></p>
                        </div>
                    </div>
                </slick>
            </div>
        </div>
    </div> 
</template>
<style lang="sass">

    // @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css')
    // @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css')

    #app
        #block-brands
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
                padding: 100px 15px    
                .content-brands
                    .info-brands
                        width: 300px
                        height: 300px
                        border: 1px solid white
                        padding: 0 40px
                        font-size: 30px
                        background-size: 80%
                        background-repeat: no-repeat
                        background-position: center
                        &:before
                            content: ""
                            position: absolute
                            background: rgba(242, 108, 35, 0.4)
                            width: 100%
                            height: 100%
                            background: rgba(242, 108, 35, 0.4)
                            border-radius: 100%
                            left: 0
                .text-brands
                    font-size: 30px
                    letter-spacing: 20px
                    line-height: 45px
                    font-weight: lighter
                    .text-orange
                        letter-spacing: 20px

        @media only screen and (max-width: 991px)
            .slick-brands
                margin: 50px 0
        
        @media only screen and (max-width: 768px)
            #block-brands 
                .container 
                    .content-brands 
                        .info-brands
                            width: 250px
                            height: 250px
                            margin-bottom: 50px


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
                        text: '小鍋<span class="text-orange">新</span>時尚<br>不管多少人都能吃得精彩！',
                        logo: '/images/home3_icon1.png',
                    },
                    {
                        url: '/images/slideshow_1.jpg',
                        title: 'M One Cafe',
                        text: 'M<span class="text-orange">One</span>Cafe<br>不管多少人都能吃得精彩！',
                        logo: '/images/home3_icon2.png',
                    },
	                {
		                url: '/images/slideshow_1.jpg',
		                title: '橘色鍋物',
                        text: 'M<span class="text-orange">One</span>Cafe<br>不管多少人都能吃得精彩！',
                        logo: '/images/home3_icon3.png',
	                },
                ],
                slickOptions: {
                    slidesToShow: 1,
                },
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
        components: {
            Slick,
        },
}
</script>