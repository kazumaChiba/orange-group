<template>
    <div id="block-foods" class="section text-white position-relative">
        <div class="block-food-body d-flex bg-black-filter">
            <div class="bg-transition bg-left">
                <div class="bg-inner" 
                    :style="'background-image:url('+foodItems[food_index].url+')'"
                    :class="{'active' : bgTransition}"
                ></div>
            </div>
            <div class="content-food -left d-flex flex-column justify-content-between position-relative">
                <div class="mb-5" :class="{'fade' : addTransition}">
                    <p class="line-top text-size-2" v-html="foodItems[food_index].subTitle"></p>
                    <h1 class="big_title">{{foodItems[food_index].title}}</h1>
                </div>
                <div class="align-self-end mt-5">
                    <p class="text-size-2">探索更多橘色價值</p>
                    <div 
                        v-for="(item , $index) in foodItems" 
                        :key="$index" class="more-food-info" 
                        @click="food_index = $index;  bgAnimated($index); startAnimate('500')" 
                        :class="food_index == $index ? 'active' : ''"
                        :style="'background-image:url('+item.url+')'"
                    ></div>
                </div>
            </div>
            <div class="content-food -right d-flex flex-column justify-content-center position-relative">
                <svg class="loader" :class="{'active' : addTransition}">
                    <circle class="internal-circle" cx="30%" cy="55%" r="450"></circle>
                </svg>
                <h3 class="main-title text-black text-uppercase"><span class="fs-inherit text-orange">橘色 </span>價值<br><span class="text-size-3 sub-title">about value</span></h3>
                <div class="food-info-circle"></div>
                <div class="food-info-inner d-flex flex-column justify-content-center p-5">
                    <div :class="{'fade' : addTransition}" v-html="foodItems[food_index].content"></div>
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
                        title: '頂級食材1',
                        url: '/images/bg_food_1.png',
                        content: '<p class="text-size-2 mb-2">橘色美食背後的秘密</p><h4 class="text-food-title mb-4">食材的<span class="text-black">秘密</span></h4><p class="text-food-info">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>'
                    },
                    {
                        subTitle: '頂級食材源自產地與挑選<br>只願意提供最美好的食材給每位客戶',
                        title: '頂級食材2',
                        url: '/images/bg_brand_1.png',
                        content: '<p class="text-size-2 mb-2">橘色美食背後的秘密</p><h4 class="text-food-title mb-4">食材的<span class="text-black">秘密</span></h4><p class="text-food-info">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>'
                    },
                    {
                        subTitle: '頂級食材源自產地與挑選<br>只願意提供最美好的食材給每位客戶',
                        title: '頂級食材3',
                        url: '/images/slideshow_1.jpg',
                        content: '<p class="text-size-2 mb-2">橘色美食背後的秘密</p><h4 class="text-food-title mb-4">食材的<span class="text-black">秘密</span></h4><p class="text-food-info">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>'
                    },
                ],
                food_index: 0,
                
            }
        },
        methods: {
            bgAnimated(index){
                this.bgTransition = true;
                setTimeout(()=>{ 
                    this.bgTransition = false; 
                }, 800);
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

<style lang="sass">
    #block-foods
        &.active
            .block-food-body
                .content-food.-left , .content-food.-right
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
                    font-weight: 300
                .more-food-info
                    width: 100px
                    height: 100px
                    display: inline-block
                    border-radius: 100%
                    background-position: center
                    background-size: cover
                    cursor: pointer
                    margin-right: 25px
                    &.active
                        opacity: 0.8
                        box-shadow: 0 0 15px rgba(255, 255, 255, 0.21)
                        transition: all .3s
                >div
                    position: relative
                    z-index: 2   
                &.-left , &.-right
                    transition: all 1s
                    opacity: 0
                &.-left
                    background: transparent
                    transform: translateY(100%)
                    padding: 100px
                    .line-top
                        line-height: 25px
                &.-right
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
                        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3)
                        transition: all .5s
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
                        .internal-circle
                            stroke: #f26c23
                            stroke-dasharray: 55%,10%,25%
                            opacity: .4
                            transform-origin: 30% 55%
                        &.active
                            .internal-circle
                                transform: rotate(180deg)
                                transition: all .5s ease-in-out

</style>
