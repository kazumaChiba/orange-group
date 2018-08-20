<template>
    <div id="block-experience" class="position-relative section text-white text-center h-100">
        <div class="bg-transition bg-left" :class="{'active' : bgTransition}">
            <div 
                class="bg-inner position-absolute" 
                :class="{'active' : bgTransition}"
                :style="'background-image:url('+experience[experience_index].url+')'"
            ></div>
        </div>
        <div class="bg-transition bg-right">
            <div 
                class="bg-inner position-absolute" 
                :class="{'active' : bgTransition}"
                :style="'background-image:url('+experience[experience_index].url+')'"
            ></div>
        </div> 

        <div id="content-experience" class="position-relative">
            <h1 class="big_title">{{experience[experience_index].title}}</h1>
            <div class="experience-circle">
                <div class="circle-body"></div>
                <div class="circle-option" :class="'e_index_'+experience_index">
                    <a class="text-circle-option -left" @click="experience_view='ex'; experience_index = 0; bgAnimated(0)" :class="experience_index == 0 ? 'active' : ''">體驗</a>
                    <a class="text-circle-option -top" @click="experience_view='pot'; experience_index = 1; bgAnimated(1)" :class="experience_index == 1 ? 'active' : ''">鍋物</a>
                    <a class="text-circle-option -right" @click="experience_view='coffee'; experience_index = 2; bgAnimated(2)" :class="experience_index == 2 ? 'active' : ''">咖啡</a>
                    <a class="text-circle-option -bottom" @click="experience_view='spa'; experience_index = 3; bgAnimated(3)" :class="experience_index == 3 ? 'active' : ''">舒體</a>
                </div>
            </div>
            <div class="experience-inner position-relative">
                <transition name="fade" mode="out-in">
                    <component class="experience-item" v-bind:is="experience_view"></component>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
export default {
        data: function () {
            return {
                bgTransition: false,
                experience_view: 'ex',
                experience: [
                    {
                        'url':'/images/slideshow_1.jpg',
                        'title':'橘色體驗'
                    },
                    {
                        'url':'/images/bg_food_1.png',
                        'title':'橘色鍋物'
                    },
                    {
                        'url':'/images/bg_brand_1.png',
                        'title':'橘色咖啡'
                    },
                    {
                        'url':'/images/bg_food_1.png',
                        'title':'橘色舒體'
                    },  
                ],
                experience_index: 0,
            }
        },
        components: {
            'ex': {
                template: '<div>'+
                          '<h2 class="mb-4"><span class="fs-inherit text-orange">橘色</span> 體驗</h2>'+
                          '<h5 class="mb-4"><span class="fs-inherit">獨一無二的橘色價值<br>創造獨一無二的體驗</span></h5>'+
                          '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色體驗</router-link>'+
                          '</div>'
            },
            'pot': {
                template: '<div>'+
                          '<h2 class="mb-4"><span class="fs-inherit text-orange">橘色</span> 鍋物</h2>'+
                          '<h5 class="mb-4"><span class="fs-inherit">獨一無二的橘色價值<br>創造獨一無二的體驗</span></h5>'+
                          '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色鍋物</router-link>'+
                          '</div>'
            },
            'coffee': {
                template: '<div>'+
                          '<h3 class="mb-4"><span class="fs-inherit text-orange">橘色</span> 咖啡</h3>'+
                          '<h5 class="mb-4"><span class="fs-inheri">獨一無二的橘色價值<br>創造獨一無二的體驗</span></h5>'+
                          '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色咖啡</router-link>'+
                          '</div>'
            },
            'spa': {
                template: '<div>'+
                          '<h2 class="mb-4"><span class="fs-inherit text-orange">橘色</span> 舒體</h2>'+
                          '<h5 class="mb-4"><span class="fs-inherit">獨一無二的橘色價值<br>創造獨一無二的體驗</span></h5>'+
                          '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色舒體</router-link>'+
                          '</div>'
            },
        },
        methods: {
            bgAnimated(index){
                this.bgTransition = true;
                setTimeout(()=>{ 
                    this.bgTransition = false; 
                }, 800);
            },
        },
}
</script>

<style lang="sass">
    #block-experience
        background-size: cover  
        &.active
            .bg-transition 
                &.bg-left , &.bg-right , &.active
                    .bg-inner
                        background-position-y: 0

        &:before , .bg-transition.bg-left:before
            position: absolute
            width: 50%
            height: 100vh
            background: black
            content: ""
            left: 0
            opacity: 0.4
            top: calc(50% - 50vh)
            z-index: 4
            content: ""
            word-break: keep-all  
        .bg-transition
            &.bg-left , &.bg-right
                .bg-inner
                    background-position-y: -100vh
                    transition-delay: .3s
                    &.active
                        background-position-y: 0
                        opacity: 1
                        //transition: initial
            &.bg-right
                .bg-inner
                    &.active
                        background-position-y: 100vh
                        opacity: 0
            &.bg-left
                z-index: 3
                &:before
                    width: 100%
                .bg-inner
                    left: 0
                    &.active
                        background-position-y: -100vh
                        opacity: 0
            &.bg-right
                z-index: 2
                right: 0
                .bg-inner
                    right: 0
                    background-position-y: 100vh
        .fp-scroller
            display: flex     
            flex-direction: column
            justify-content: center
        #content-experience
            z-index: 4
            .big_title
                font-size: 200px
                letter-spacing: 30px
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
                .experience-item
                    transition: opacity .5s
                h5
                    letter-spacing: 4px
                    font-weight: 300
                    span
                        letter-spacing: 7px
                        line-height: 25px
                        font-size: 22px
                .left-line
                    &:before
                        content: ""
                        display: inline-block
                        width: 20px
                        height: 5px
                        background: #f26d23
                        margin-right: 10px
                        vertical-align: middle
            .experience-circle
                position: absolute
                top: calc(50% - 250px)
                left: calc(50% - 250px)
                .circle-option,.circle-body
                    position: absolute
                    width: 500px
                    height: 500px
                .circle-body
                    border-radius: 500px
                    border: 30px solid rgba(255, 113, 34, 0.76)
                    border-left-color: transparent
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
</style>
