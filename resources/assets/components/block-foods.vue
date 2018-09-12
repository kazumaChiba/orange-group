<template>
    <div id="block-foods" class="section text-white position-relative" :style="'background-image:url('+foodItems[food_index_old].url+')'">
        <div class="block-food-body d-flex bg-black-filter">
            <div class="bg-transition bg-left">
                <div class="bg-inner"
                    :style="'background-image:url('+foodItems[food_index].url+')'"
                    :class="{active : bgTransition}"
                ></div>
             </div>
            <div class="content-food left-content d-md-flex flex-column justify-content-between justify-content-md-center position-relative m-auto">
                <div class="mb-5" :class="{fade: addTransition}">
                    <p class="line-top text-size-2" v-html="foodItems[food_index].subTitle"></p>
                    <h1 class="big_title">{{foodItems[food_index].title}}</h1>
                 </div>
                 <div class="align-self-end mt-5">
                    <p class="text-size-2">探索更多橘色價值</p>
                    <div
                        v-for="(item , $index) in foodItems"
                        :key="$index" class="more-food-info"
                        @click="food_index = $index;  bgAnimated(100); startAnimate(500)"
                        :class="food_index == $index ? 'active' : ''"
                        :style="'background-image:url('+item.url+')'"
                    ></div>
                 </div>
            </div>
            <div class="content-food right-content d-flex flex-column justify-content-center position-relative text-md-left text-center">
                <svg 
                    :class="{'active' : addTransition}"
                    class="loader" 
                    viewBox="0 0 850 850" 
                >
                <g id="Content-Menu-3" style="opacity:0.3;">
                    <g id="Group-2">
                        <path id="Path-7" style="fill:none;stroke:#EB5E00;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;" d="M694.2,99.9
                            c27.2,23.1,46.5,43.1,57.8,60.2"/>
                        <path id="Path-6" style="fill:none;stroke:#EB5E00;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;" d="M122.8,124
                            c41.4-46.8,92.6-79.2,153.5-97"/>
                        <path id="Path-8" style="fill:none;stroke:#EB5E00;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;" d="M807.9,593.7
                            C739.6,735,629.3,817.4,477,840.9"/>
                    </g>
                </g>
                </svg>
                <h3 class="main-title text-black text-uppercase w-100">
                    <span class="fs-inherit text-orange">橘色</span>價值
                </h3>
                <span class="sub-title text-black w-100">about value</span>
                <div class="food-info-circle"></div>
                <div class="food-info-inner d-flex flex-column justify-content-center p-5">
                    <div :class="{fade : addTransition}" v-html="foodItems[food_index].content"></div>
                </div>
                <div class="d-flex mt-5 w-100 justify-content-between justify-content-md-center">
                    <div
                        v-for="(item , $index) in foodItems"
                        :key="$index" 
                        class="more-food-info position-relative"
                        @click="food_index = $index;  bgAnimated(100); startAnimate(500)"
                        :class="food_index == $index ? 'active' : ''"
                        :style="'background-image:url('+item.url+')'"
                    >
                        <span class="position-absolute w-100 text-center">{{item.title}}</span>
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>
<script>
	export default {
        data: function () {
            return {
                bgTransition: false,
                addTransition: false,
                foodItems: [
                    {
                        subTitle: '頂級食材源自產地與挑選<br>只願意提供最美好的食材給每位客戶',
                        title: '顧客導向',
                        url: '/images/bg_food_1.png',
                        content: '<p class="text-size-2 mb-2">橘色美食背後的秘密</p><h4 class="text-food-title mb-4">食材的<span class="text-black">秘密</span></h4><p class="text-food-info">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>'
                    },
                    {
                        subTitle: '頂級食材源自產地與挑選<br>只願意提供最美好的食材給每位客戶',
                        title: '優雅空間',
                        url: '/images/bg_brand_1.png',
                        content: '<p class="text-size-2 mb-2">橘色美食背後的秘密</p><h4 class="text-food-title mb-4">食材的<span class="text-black">秘密</span></h4><p class="text-food-info">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>'
                    },
                    {
                        subTitle: '頂級食材源自產地與挑選<br>只願意提供最美好的食材給每位客戶',
                        title: '專業服務',
                        url: '/images/slideshow_1.jpg',
                        content: '<p class="text-size-2 mb-2">橘色美食背後的秘密</p><h4 class="text-food-title mb-4">食材的<span class="text-black">秘密</span></h4><p class="text-food-info">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>'
                    },
                ],
                food_index: 0,
                food_index_old: 0,

            }
        },
        methods: {
            bgAnimated(time){
                this.bgTransition = true;
                setTimeout(()=>{
                    this.bgTransition = false;
                }, parseInt(time));
                setTimeout(()=>{
                    this.food_index_old = this.food_index;
                },parseInt(time) + 800);
            },
            startAnimate(time){
                this.addTransition = true;
                setTimeout(()=>{
                    this.addTransition = false;
                },parseInt(time));
            },
        }
    }
</script>
<style lang="sass" rel="stylesheet/sass">
    #block-foods
        background-size: cover
        background-position: 0
        &.active
            .block-food-body
                .content-food
                    &.left-content, &.right-content
                        transition-delay: .3s
                        transform: translateY(0)
                        opacity: 1
                .bg-left
                    .bg-inner
                        transition-delay: .3s
                        background-position-y: center
        .line-top
            &:before
                content: ""
                background: #f46f1b
                width: 60px
                height: 1px
                display: block
                margin-bottom: 20px
        .block-food-body
            background-repeat: no-repeat
            background-size: cover
            height: 100vh
            &:after
                content: ""
                position: absolute
                left: 0
                width: 100%
                height: 100%
                background: rgba(0, 0, 0, 0.6)
            .bg-left
                .bg-inner
                    background-position: center
                    background-size: cover
                    background-position-y: 100vh
                    transition: all .5s
                    &.active
                        background-position-y: 100vh
                        transition: initial
            .content-food
                flex: 1
                padding: 0 100px
                overflow: hidden
                z-index: 2
                .big_title
                    font-size: 140px
                    font-weight: 600
                .more-food-info
                    width: 100px
                    height: 100px
                    display: inline-block
                    border-radius: 100%
                    background-position: center
                    background-size: cover
                    cursor: pointer
                    margin-right: 25px
                    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5)
                    &.active , &:hover
                        opacity: 0.8
                        box-shadow: 0px 0px 20px rgba(0, 0, 0, 1)
                        transition: all .3s
                > div
                    position: relative
                    z-index: 2
                &.left-content, &.right-content
                    transition: transform 1s, opacity 1s
                    opacity: 0
                &.left-content
                    background: transparent
                    //transform: translateY(100%)
                    padding: 100px
                    .line-top
                        line-height: 25px
                &.right-content
                    background: white
                    z-index: 2   
                    transform: translateY(-100%)
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
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3)
                        transition: all .5s
                        .text-food-info
                            font-weight: 300
                            letter-spacing: 2px
                    .loader
                        position: absolute
                        width: auto
                        height: 100vh
                        bottom: -30px
                        left: -140px 
                        &.active
                            transform: rotate(360deg)
                            transition: all .5s ease-in-out
                                
                    .more-food-info
                        display: none

    @media only screen and (max-width: 991px)
        #app 
            #block-foods 
                .bg-transition
                        width: 100vw
                .block-food-body 
                    .content-food 
                        h3 , span
                            color: white !important
                            letter-spacing: 5px
                            text-align: center
                        h3
                            font-size: 28px
                            z-index: 2
                            
                        .sub-title
                            font-size: 12px

                        &.left-content
                            display: none !important
                        &.right-content
                            background: transparent
                            padding: 90px 20px 23px 20px
                            align-items: center
                            .more-food-info
                                display: block
                            .food-info-inner
                                height: 300px
                                width: 300px
                                background: rgba(242, 109, 35, 0.8)
                                .text-food-title
                                    font-size: 21px
                                .text-food-info
                                    font-size: 12px
                        .more-food-info
                            margin: 0 20px
                            width: 68px
                            height: 68px
                            border: 1px solid #f26b23
                            &:last-child
                                margin-right: 0
                            span
                                left: 0
                                bottom: -25px
                                font-size: 12px
                                letter-spacing: 2px
                        .loader
                            width: 100vw
                            left: 15%
    
    @media only screen and (max-width: 420px)
        #app 
            #block-foods 
                .block-food-body 
                    .content-food 
                        &.right-content
                            padding: 25px 20px
                        .loader
                            circle
                                transform: scale(0.6)
                            &.active
                                circle
                                    transform: rotate(180deg) scale(0.6)


</style>
