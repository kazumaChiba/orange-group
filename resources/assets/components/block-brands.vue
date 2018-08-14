<template>
    <div id="block-brands" class="section text-white position-relative text-center bg-black-cover" :style="'background: url(' + brandBg[brandIndex].background + ')'">
        <div class="container position-relative m-auto h-100 ">
            <div class="row h-100 flex-column align-items-center justify-content-center">
                <h3 class="main-title text-uppercase"><span class="fs-inherit text-orange">橘色</span>版圖<br><span class="text-size-3 sub-title">orange brands</span></h3>
                <div class="content-brands d-flex align-items-center justify-content-between w-100 mt-5 mb-5">
                    <span class="btn-orange"  @click="brandIndex = 0; startAnimate('500')">橘色涮涮屋</span>
                    <div class="info-brands border-radius-100 d-flex flex-column justify-content-center text-left">
                        <p :class="{'fade' : addTransition}">{{brandBg[brandIndex].title}}</p>
                        <div class="d-flex text-size-3" :class="{'fade' : addTransition}">
                            <router-link :to="brandBg[brandIndex].contact" class="brands-link">聯絡我們</router-link>
                            <span>・</span>
                            <router-link :to="brandBg[brandIndex].book" class="brands-link">線上訂位</router-link>
                        </div>
                    </div>
                    <span class="btn-orange" @click="brandIndex = 1; startAnimate('500')">M One Cafe</span>
                </div>
                <p class="text-brands" v-html="brandBg[brandIndex].text" :class="{'fade' : addTransition}"></p>
            </div>
        </div>
    </div> 
</template>
<style lang="sass">
    #block-brands
        background-repeat: no-repeat
        background-size: cover  
        .container
            z-index: 2
            .content-brands
                .info-brands
                    width: 300px
                    height: 300px
                    background: rgba(242, 108, 35, 0.4)
                    border: 1px solid white
                    padding: 0 40px
                    font-size: 30px
            .text-brands
                font-size: 30px
                letter-spacing: 20px
                line-height: 45px
                font-weight: lighter
                .text-orange
                    letter-spacing: 20px
</style>
<script>
export default {
        data: function () {
            return {
                addTransition: false,
                brandIndex: 0,
                brandBg: [
                    {
                        background: '/images/bg_brand_1.png',
                        title: 'EXTENSION1 by 橘色',
                        contact: '/',
                        book: '/',
                        text: '小鍋<span class="text-orange">新</span>時尚<br>不管多少人都能吃得精彩！',
                    },
                    {
                        background: '/images/bg_brand_1.png',
                        title: 'M One Cafe',
                        contact: '/',
                        book: '/',
                        text: 'M<span class="text-orange">One</span>Cafe<br>不管多少人都能吃得精彩！',
                    },
                ],
            }
        },
        methods: {
            startAnimate(time){
                this.addTransition = true;
                setTimeout(()=>{
                    this.addTransition = false;
                },parseInt(time));
            },
        },
}
</script>