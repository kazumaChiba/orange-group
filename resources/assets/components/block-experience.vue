<template>
    <div id="block-experience" class="position-relative section text-white text-center h-100" :style="'background-image:url('+experience[experience_index_old].url+')'">
        <div class="bg-transition bg-left" :class="{'active' : bgTransition}">
            <div 
                class="bg-inner position-absolute bg-black-cover" 
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

        <div id="content-experience" class="position-relative" >
            <h1 class="big_title d-none d-lg-block">{{experience[experience_index].title}}</h1>
            <div class="experience-inner position-relative">
                <transition name="fade" mode="out-in">
                    <component class="experience-item" v-bind:is="experience_view"></component>
                </transition>
            </div>
            <div class="experience-circle" @mouseenter="onStopStep()"  @mouseleave="onContinueStep()">
                <!--<svg x="0px" y="0px" width="150px" height="150px" viewBox="0 0 150 150" enable-background="new 0 0 150 150" xml:space="preserve">

                                 <path fill="#EA5514" d="M0,0v150h150V0H0z M65.926,139.659c-4.896,0-9.664-0.536-14.263-1.531l-2.54-8.654
                    c5.33,1.568,10.965,2.423,16.803,2.423c32.828,0,59.44-26.609,59.44-59.439c0-32.827-26.612-59.44-59.44-59.44
                    c-17.96,0-34.049,7.978-44.948,20.571l-2.546-8.674c12.159-12.147,28.949-19.66,47.494-19.66c37.115,0,67.203,30.088,67.203,67.203
                    C133.129,109.573,103.041,139.659,65.926,139.659z"/>


                </svg>
                <div style="width: 150px; height: 150px; clip-path: url(#circle);    background: red;"></div>
                <svg x="0px" y="0px" width="150px" height="150px" viewBox="0 0 150 150" enable-background="new 0 0 150 150" xml:space="preserve">
                     <rect x="0" y="0" width="150" height="150" style="fill: 336699;clip-path: url(#circle)"/>
<clipPath id="circle">
                <path fill="#EA5514" d="M63.984-0.125c-20.732,0-39.501,8.397-53.095,21.977l2.848,9.696C25.922,17.472,43.906,8.553,63.984,8.553
                    c36.698,0,66.448,29.752,66.448,66.448c0,36.701-29.75,66.447-66.448,66.447c-6.525,0-12.825-0.955-18.784-2.709l2.841,9.676
                    c5.141,1.111,10.47,1.711,15.943,1.711c41.49,0,75.125-33.633,75.125-75.125C139.109,33.51,105.475-0.125,63.984-0.125z"/>
</clipPath>
                    <circle  stroke-dasharray="85,471" cx="75" cy="75" r="75" style="    stroke: #00acc1;
    stroke-width: 2;
    stroke-linecap: square;
    fill: none;
    animation: circle-chart-fill 2s reverse;
    transform: rotate(-90deg);
    transform-origin: center;"></circle>
                </svg>-->
                <div class="circle-body position-relative" :class="{'active' : bgTransition}">
                    <svg id="loading-circle" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 150 150" enable-background="new 0 0 150 150" xml:space="preserve">
                         <rect x="0" y="0" width="100%" height="100%" fill="#f26e22" style="clip-path: url(#circle)"/>
              <circle class="loading-bar" :stroke-dasharray=" circle_dasharray +',471'" :stroke-opacity="(circle_dasharray/300)" :class="{run: is_run, rotate: is_rotate}" cx="75" cy="75" r="70.5"></circle>
                        <clipPath id="circle">
             <path fill="#f26e22" d="M75.1-0.1c-20.7,0-39.5,8.4-53.1,22l2.8,9.7C37,17.5,55,8.6,75,8.6c36.7,0,66.4,29.8,66.4,66.4
		c0,36.7-29.8,66.4-66.4,66.4c-6.5,0-12.8-1-18.8-2.7l2.8,9.7c5.1,1.1,10.5,1.7,15.9,1.7c41.5,0,75.1-33.6,75.1-75.1
		C150.2,33.5,116.6-0.1,75.1-0.1L75.1-0.1z"/>
                        </clipPath>
                         <clipPath id="circle2" style="transform: rotate(135deg);transform-origin: center;">
             <path fill="#f26e22" d="M75.1-0.1c-20.7,0-39.5,8.4-53.1,22l2.8,9.7C37,17.5,55,8.6,75,8.6c36.7,0,66.4,29.8,66.4,66.4
		c0,36.7-29.8,66.4-66.4,66.4c-6.5,0-12.8-1-18.8-2.7l2.8,9.7c5.1,1.1,10.5,1.7,15.9,1.7c41.5,0,75.1-33.6,75.1-75.1
		C150.2,33.5,116.6-0.1,75.1-0.1L75.1-0.1z"/>
                        </clipPath>
                    </svg>
                    <!--<div class="circle-line left"></div>
                    <div class="circle-line right"></div>-->
                </div>
                <div class="circle-option position-absolute" :class="'e_index_'+experience_index" :style="'transform: scale(1.05) rotate('+rotate+'deg)'">
                    <a class="text-circle-option left" @mouseenter="onStopStep()"  @mouseleave="onContinueStep()" @click="onClickCircleItem(0, 'ex')" :class="experience_index == 0 ? 'active' : ''">體驗</a>
                    <a class="text-circle-option top" @mouseenter="onStopStep()"  @mouseleave="onContinueStep()" @click="onClickCircleItem(1, 'pot')" :class="experience_index == 1 ? 'active' : ''">鍋物</a>
                    <a class="text-circle-option right" @mouseenter="onStopStep()"  @mouseleave="onContinueStep()" @click="onClickCircleItem(2, 'coffee')" :class="experience_index == 2 ? 'active' : ''">咖啡</a>
                    <a class="text-circle-option bottom" @mouseenter="onStopStep()"  @mouseleave="onContinueStep()" @click="onClickCircleItem(3, 'spa')" :class="experience_index == 3 ? 'active' : ''">舒體</a>
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
                experience_view: 'ex',
                experience: [
                    {
                        'url':'/images/home1_ex.png',
                        'title':'橘色體驗'
                    },
                    {
                        'url':'/images/home1_pot.png',
                        'title':'橘色鍋物'
                    },
                    {
                        'url':'/images/home1_coffee.png',
                        'title':'橘色咖啡'
                    },
                    {
                        'url':'/images/home1_spa.png',
                        'title':'橘色舒體'
                    },  
                ],
                experience_index: 0,
                experience_index_old: 0,
	            is_run: false,
                is_rotate: false,
	            circle_stop: false,
                circle_dasharray: 0,
                rotate: 0,
            }
        },
        components: {
            'ex': {
                template: '<div>'+
                          '<h2 class="mb-2 mb-md-4 text-center"><span class="fs-inherit text-orange">橘色</span> 體驗</h2>'+
                          '<h5 class="mb-4"><span class="fs-inherit">獨一無二的橘色價值<br>創造獨一無二的體驗</span></h5>'+
                          '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色體驗</router-link>'+
                          '</div>'
            },
            'pot': {
                template: '<div>'+
                          '<h2 class="mb-2 mb-md-4  text-center"><span class="fs-inherit text-orange">橘色</span> 鍋物</h2>'+
                          '<h5 class="mb-4"><span class="fs-inherit">獨一無二的橘色價值<br>創造獨一無二的體驗</span></h5>'+
                          '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色鍋物</router-link>'+
                          '</div>'
            },
            'coffee': {
                template: '<div>'+
                          '<h2 class="mb-2 mb-md-4 text-center"><span class="fs-inherit text-orange">橘色</span> 咖啡</h2>'+
                          '<h5 class="mb-4"><span class="fs-inheri">獨一無二的橘色價值<br>創造獨一無二的體驗</span></h5>'+
                          '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色咖啡</router-link>'+
                          '</div>'
            },
            'spa': {
                template: '<div>'+
                          '<h2 class="mb-2 mb-md-4 "><span class="fs-inherit text-orange">橘色</span> 舒體</h2>'+
                          '<h5 class="mb-4"><span class="fs-inherit">獨一無二的橘色價值<br>創造獨一無二的體驗</span></h5>'+
                          '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色舒體</router-link>'+
                          '</div>'
            },
        },
        mounted(){
        	setTimeout(()=>{
		        setInterval(()=>{
			        this.is_run = true;
			        //this.onPlusStep()
                },300)
            },1300)
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
            onClickCircleItem(index, view){
                
                console.log(index);
                switch(index){
                    case 0:
                        this.rotate += 90*this.experience_index;
                        break;
                    case 1:
                        if(this.experience_index == 0){
                            this.rotate += 270;
                        }
                        else if(this.experience_index == 2){
                            this.rotate += 90;
                        }
                        else if(this.experience_index == 3){
                            this.rotate += 180;
                        }
                        break;
                    case 2:
                        if(this.experience_index == 0){
                            this.rotate += 180;
                        }
                        else if(this.experience_index == 1){
                            this.rotate += 270;
                        }
                        else if(this.experience_index == 3){
                            this.rotate += 90;
                        }
                        break;
                    case 3:
                        if(this.experience_index == 0){
                            this.rotate += 90;
                        }
                        else if(this.experience_index == 1){
                            this.rotate += 180;
                        }
                        else if(this.experience_index == 3){
                            this.rotate += 270;
                        }
                        break;
                }
                console.log(this.rotate);
                this.experience_view = view;
	            this.experience_index = index;
	            this.bgAnimated(800)

	            this.onStartRotate();
            },
	        onPlusStep(){
            	if(!this.is_rotate && !this.circle_stop){
		            this.circle_dasharray = this.circle_dasharray + 19;
                }

		        if(this.circle_dasharray > 320 && !this.is_rotate && !this.circle_stop){

                    this.onStartRotate();

			        if(this.experience_index == 0){
				        this.onClickCircleItem(1, 'pot')
                    }else if(this.experience_index == 1){
				        this.onClickCircleItem(2, 'coffee')
                    }else if(this.experience_index == 2){
				        this.onClickCircleItem(3, 'spa')
			        }else{
			        	this.onClickCircleItem(0, 'ex')
                    }
                }
            },
	        onStopStep(){
            	this.circle_stop = true
            },
	        onContinueStep(){
		        this.circle_stop = false
	        },
            onStartRotate(){
	            this.is_rotate = true;

	            setTimeout(()=>{
		            this.circle_dasharray = 0;
	            },600);

	            setTimeout(()=>{
		            this.is_rotate = false;
	            },1200)
            }
        },
}
</script>

<style lang="sass">
    #loading-circle
        .loading-bar
            stroke: #732A0A
            stroke-width: 9px
            stroke-linecap: square
            fill: none
            transform-origin: center center 0px
            clip-path: url(#circle2)
            opacity: 0.5
            transform: rotate(225deg)
            transition: stroke-dasharray 0.3s linear, stroke 5s linear
            //stroke-dasharray: 0,471
            &.run
                stroke: #732A0A
                //stroke-dasharray: 295,471
                //transition: stroke-dasharray 6s cubic-bezier(0.47, 0, 0.745, 0.715), stroke 6s cubic-bezier(0.215, 0.61, 0.355, 1)
            &.rotate
                stroke: #f26d23
                transition: stroke-dasharray 0.3s, stroke-opacity 1.2s
                //stroke-dasharray: 295,471
                //transition: stroke 1s
    #block-experience
        background-size: cover  
        &:before
            position: absolute
            width: 100%
            height: 100vh
            background: black
            content: ""
            left: 0
            opacity: 0.5
            top: calc(50% - 50vh)
            z-index: 4
            content: ""
            word-break: keep-all  
        &.active
            .bg-transition 
                &.bg-left , &.bg-right , &.active
                    .bg-inner
                        background-position-y: 0
                        transition: all .8s
                        background-position: 50% center

        .bg-transition
            &.bg-left , &.bg-right
                .bg-inner
                    background-position-y: -100vh
                    transition-delay: .3s
                    &.active
                        background-position-y: 0
                        opacity: 1
            &.bg-right
                z-index: 2
                right: 0
                .bg-inner
                    right: 0
                    background-position-y: 100vh
                &:before
                    width: 100%
                    opacity: 0.4
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
                white-space: nowrap
                pointer-events: none
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
                    width: 500px
                    opacity: 0.75
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
                    transform: rotate(0) scale(1.2)
                    top: 0
                    &.active
                        opacity: 0
                        transition: opacity .3s
                    .text-circle-option
                        position: absolute
                        width: 36px
                        height: 36px
                        display: flex
                        align-items: center
                        &:hover
                            cursor: pointer
                            color: #f26d23
                        &.top
                            top: calc(-40px - 18px)
                            left: calc(50% - 18px)
                        &.bottom
                            bottom: calc(-40px - 18px)
                            left: calc(50% - 18px)
                        &.right
                            top: calc(50% - 18px)
                            right: calc(-40px - 18px)
                        &.left
                            top: calc(50% - 18px)
                            left: calc(-40px - 18px)

                        a
                            word-break: keep-all
                        &.active
                            opacity: 0
                            transition: opacity 1s  
                            transition-delay: .5s
                    @for $i from 0 through 3
                        &.e_index_#{$i}
                            //transform: rotate($i*(-90deg)) scale(1.05)
                            a
                                transition: all .3s 
                                transform: rotate($i*90deg) !important

    @media only screen and (max-width: 767px)
        #block-experience 
            .bg-inner
                &.bg-black-cover
                    &:before
                        opacity: 0
            #content-experience 
                transform: scale(0.55)
                .experience-inner
                    h5
                        span
                            font-size: 28px
                            line-height: 45px
                    a
                        font-size: 23px !important
                        letter-spacing: 3px
                .experience-circle 
                    .circle-option 
                        .text-circle-option
                            a
                                font-size: 22px
                            &.top
                                top: calc(-10px - 18px - 20px)
                                left: calc(50% - 18px)
                            &.bottom
                                bottom: calc(-10px - 18px - 20px)
                                left: calc(50% - 18px)
                            &.right
                                top: calc(50% - 18px)
                                right: calc(-10px - 18px - 20px)
                            &.left
                                top: calc(50% - 18px)
                                left: calc(-10px - 18px - 20px)
                        @for $i from 0 through 3
                            &.e_index_#{$i}
                                a
                                    transform: rotate($i*90deg) scale(1.7) !important
    
    @media only screen and (max-width: 420px)
        #block-experience 
            #content-experience 
                transform: scale(0.45)
</style>
