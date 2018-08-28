<template>
    <div id="block-experience" class="position-relative section text-white text-center h-100" :style="'background-image:url('+experience[experience_index_old].url+')'">
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
                <div class="circle-body position-relative" :class="{'active' : bgTransition}">
                    <div class="circle-line left"></div>
                    <div class="circle-line right"></div>
                </div>
                <div class="circle-option position-absolute" :class="'e_index_'+experience_index">
                    <a class="text-circle-option left" @click="experience_view='ex'; experience_index = 0; bgAnimated(800)" :class="experience_index == 0 ? 'active' : ''">體驗</a>
                    <a class="text-circle-option top" @click="experience_view='pot'; experience_index = 1; bgAnimated(800)" :class="experience_index == 1 ? 'active' : ''">鍋物</a>
                    <a class="text-circle-option right" @click="experience_view='coffee'; experience_index = 2; bgAnimated(800)" :class="experience_index == 2 ? 'active' : ''">咖啡</a>
                    <a class="text-circle-option bottom" @click="experience_view='spa'; experience_index = 3; bgAnimated(800)" :class="experience_index == 3 ? 'active' : ''">舒體</a>
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
                        'url':'/images/bg_footer.png',
                        'title':'橘色舒體'
                    },  
                ],
                experience_index: 0,
                experience_index_old: 0,
            }
        },
        components: {
            'ex': {
                template: '<div>'+
                          '<h2 class="mb-4 text-center"><span class="fs-inherit text-orange">橘色</span> 體驗</h2>'+
                          '<h5 class="mb-4"><span class="fs-inherit">獨一無二的橘色價值<br>創造獨一無二的體驗</span></h5>'+
                          '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色體驗</router-link>'+
                          '</div>'
            },
            'pot': {
                template: '<div>'+
                          '<h2 class="mb-4 text-center"><span class="fs-inherit text-orange">橘色</span> 鍋物</h2>'+
                          '<h5 class="mb-4"><span class="fs-inherit">獨一無二的橘色價值<br>創造獨一無二的體驗</span></h5>'+
                          '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色鍋物</router-link>'+
                          '</div>'
            },
            'coffee': {
                template: '<div>'+
                          '<h2 class="mb-4 text-center"><span class="fs-inherit text-orange">橘色</span> 咖啡</h2>'+
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
            bgAnimated(time){
                this.bgTransition = true;
                setTimeout(()=>{ 
                    this.bgTransition = false; 
                }, parseInt(time));
                setTimeout(()=>{ 
                    this.experience_index_old = this.experience_index;
                }, parseInt(time) + 800);
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

        .bg-transition
            &.bg-left , &.bg-right
                &:before
                    position: absolute
                    width: 50%
                    height: 100vh
                    background: black
                    content: ""
                    left: 0
                    opacity: 0.8
                    top: calc(50% - 50vh)
                    z-index: 4
                    content: ""
                    word-break: keep-all  
            &.bg-right
                &:before
                    width: 100%
                    opacity: 0.4
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
                .circle-option
                    position: absolute
                    width: 500px
                    height: 500px
                .circle-body
                    transform: rotate(12deg)
                    width: 500px
                    height: 500px
                    &.active
                        .circle-line
                            &.left
                                &:after
                                    transform: rotate(320deg)
                                    transition: all .8s
                                    opacity: 1
                    .circle-line
                        position: absolute
                        width: 50%
                        height: 100%
                        overflow: hidden
                        &:before , &.left:after
                            content: ""
                            display: block
                            width: 200%
                            height: 100%
                            border: 28px solid rgba(242, 109, 35, 0.8)
                            border-radius: 100%
                        &.left
                            left: 0
                            &:before , &:after
                                border-bottom-color: transparent
                                border-left-color: transparent
                                transform: rotate(-40deg)
                                clip-path: polygon(50% -18%, 100% 20%, 50% 100%, 0% 60%)
                        &.right
                            right: 0
                            transform: rotate(180deg)
                .circle-option
                    transition: all 2s
                    transform: rotate(0)
                    top: 0
                    &.active
                        opacity: 0
                        transition: opacity .3s
                    .text-circle-option
                        position: absolute
                        &:hover
                            cursor: pointer
                            color: #f26d23
                        &.top
                            top: calc(-40px - 12px)
                            left: calc(50% - 18px)
                        &.bottom
                            bottom: calc(-40px - 12px)
                            left: calc(50% - 18px)
                        &.right
                            top: calc(50% - 18px)
                            right: calc(-40px - 12px)
                        &.left
                            top: calc(50% - 18px)
                            left: calc(-40px - 12px)
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
