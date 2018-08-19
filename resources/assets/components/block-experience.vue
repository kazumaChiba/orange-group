<template>
    <div id="block-experience" class="position-relative section text-white text-center h-100" :style="'background-image:url('+experience[index_old].url+')'">
        <div class="bg-transition bg-left" :class="{'active' : bgTransition}">
            <div class="bg-inner" :style="'background-image:url('+experience[experience_index].url+')'"></div>
        </div>
        <div class="bg-transition bg-right" :class="{'active' : bgTransition}">
            <div class="bg-inner" :style="'background-image:url('+experience[experience_index].url+')'"></div>
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
                        'title':'M One Cafe'
                    },
                    {
                        'url':'/images/bg_food_1.png',
                        'title':'橘色舒體'
                    },  
                ],
                experience_index: 0,
                index_old: 0,
            }
        },
        components: {
            'ex': {
                template: '<div>'+
                          '<h2 class="mb-4">橘色體驗</h2>'+
                          '<h5 class="mb-4"><span class="fs-inherit text-orange">橘色 </span>體驗</h5>'+
                          '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色體驗</router-link>'+
                          '</div>'
            },
            'pot': {
                template: '<div>'+
                          '<h2 class="mb-4">橘色鍋物</h2>'+
                          '<h5 class="mb-4"><span class="fs-inherit text-orange">橘色 </span>鍋物</h5>'+
                          '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色鍋物</router-link>'+
                          '</div>'
            },
            'coffee': {
                template: '<div>'+
                          '<h3 class="mb-4">M One Cafe</h3>'+
                          '<h5 class="mb-4"><span class="fs-inherit text-orange">M One </span>Cafe</h5>'+
                          '<router-link :to="\'\/\'\" class="left-line text-size-2">探索M One Cafe</router-link>'+
                          '</div>'
            },
            'spa': {
                template: '<div>'+
                          '<h2 class="mb-4">橘色舒體</h2>'+
                          '<h5 class="mb-4"><span class="fs-inherit text-orange">橘色 </span>舒體</h5>'+
                          '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色舒體</router-link>'+
                          '</div>'
            },
        },
        methods: {
            bgAnimated(index){
                this.bgTransition = true;
                setTimeout(()=>{
                    this.index_old = index;
                },1000);
                setTimeout(()=>{ 
                    this.bgTransition = false; 
                }, 1500);
            },
        },
}
</script>

<style lang="sass">
    #block-experience
        background-size: cover  
        &:before , .bg-transition.bg-left:before
            position: absolute
            width: 50%
            height: 100vh
            background: black
            content: ""
            left: 0
            opacity: 0.6
            top: calc(50% - 50vh)
            z-index: 0
            content: ""
            word-break: keep-all  
        .bg-transition.bg-left:before
            width: 100%
        .fp-scroller
            display: flex     
            flex-direction: column
            justify-content: center
        #content-experience
            // position: absolute  
            // left: calc(50% - 250px)
            .big_title
                font-size: 220px
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
                top: 100px
                .experience-item
                    transition: opacity .5s
                h5
                    letter-spacing: 4px
                    font-weight: 300
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
                top: calc(50% - 150px)
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
