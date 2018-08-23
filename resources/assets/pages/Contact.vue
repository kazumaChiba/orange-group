<template>
    <div id="block-contact">
        <banner title="聯絡<span class='text-orange'>我們</span>" img="/images/slideshow_1.jpg"></banner>
        <div id="block-contact-brands" class="position-relative">
            <div class="container">
                <div class="row">
                    <div class="contact-brands-item -intro-text d-flex justify-content-center align-items-center">
                        <div>
                            <span class="text-orange text-size-2 text-line-left d-block position-relative">竭誠歡迎與我們聯繫</span>
                            <p class="brand-intro-title">橘色餐飲集團</p>
                            <p class="brand-intro-subtitle">請選擇您想聯繫的集團單位<br>我們會儘速與您聯絡，謝謝。</p>
                        </div>
                    </div>
                    <div 
                        class="contact-brands-item d-flex flex-column align-items-center justify-content-center"
                        v-for="(item,$index) in brandItems"
                        :key="$index"
                        :class="brandName == item.name ? 'active' : ''"
                        @click="brandName = item.name"
                    >
                        <img class="position-relative mb-2" :src="item.img">
                        <p class="text-orange brand-title position-relative text-center">{{item.title}}</p>
                        <div v-html="item.intro"></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="contact-form">
            <contact-form :brand="brandName"></contact-form>
        </div>
        
        <block-footer></block-footer>
    </div>
</template>

<script>
import MenuHeader from 'components/block-menu-header'
import Banner from 'components/block-banner'
import ContactForm from 'components/contact-form'
import BlockFooter from 'components/block-footer'

export default {
    data: function () {
        return {
            brandItems: [
                {
                    img: '/images/index_logo.png',
                    title: '橘色涮涮屋',
                    intro: '',
                    name: 'shabu',
                },
                {
                    img: '/images/index_logo.png',
                    title: 'EXTENSION 1 BY 橘色',
                    intro: '',
                    name: 'extension_1',
                },
                {
                    img: '/images/index_logo.png',
                    title: 'M ONE CAFE',
                    intro: '',
                    name: 'm_one_cafe',
                },
                {
                    img: '/images/index_logo.png',
                    title: 'M ONE SPA',
                    intro: '',
                    name: 'm_one_spa',
                },
                {
                    img: '/images/index_logo.png',
                    title: 'SAKURA SPA',
                    intro: '',
                    name: 'sakura_spa',
                },
                {
                    img: '/images/index_logo.png',
                    title: '人力招募',
                    intro: '<p class="text-size-2 font-weight-bold">即刻加入橘色大家庭</p>',
                    name: 'join',
                }
            ],
            brandName: '',
        }
    },
    components: {
        MenuHeader,
        Banner,
        ContactForm,
        BlockFooter,
    },
}
</script>

<style lang="sass">
    #header
        top: 0
    #block-contact
        #block-contact-brands
            transform: translateY(-150px)
            margin-bottom: -50px
            .row
                height: 500px
                position: relative
                background: white
                .contact-brands-item
                    width: 25%
                    box-shadow: -10px -10px 60px rgba(0, 0, 0, 0.1)
                    overflow: hidden
                    padding: 40px
                    position: relative
                    &:before , &:after
                        content: ""
                        width: 100%
                        height: 100%
                        position: absolute
                        opacity: 0
                        transition: all .3s
                    &:before
                        background-image: url(/images/bg_brand_1.png)
                        background-repeat: no-repeat
                        background-position: center
                        background-size: cover
                    &:after
                        background: #f26d23
                    &.-intro-text
                        width: 50%
                    img
                        width: 80px
                    >*
                        z-index: 2
                    &:not(.-intro-text)
                        &:hover , &.active
                            cursor: pointer
                            .brand-title , p
                                color: white !important
                            &:before
                                opacity: 1
                            &:after
                                opacity: 0.5
                .brand-intro-title
                    font-size: 38px
                    font-weight: 500
                    margin-bottom: 10px
                .brand-intro-subtitle
                    font-size: 22px
                    color: gray
                    font-weight: 500
                .text-line-left
                    margin-bottom: 20px
                    font-weight: 500
                    &:before
                        content: ""
                        position: absolute
                        width: 50%
                        height: 1px
                        background: #f26d23
                        top: 50%
                        left: calc(-50% - 20px)
                .brand-title
                    font-size: 22px
                    font-weight: 500
                    margin-bottom: 0                
</style>
