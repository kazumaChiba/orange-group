<template>
    <div id="block-contact">
        <banner title="聯絡<span class='text-orange'>我們</span>" img="/images/banner_contact.png"></banner>
        <div id="block-contact-brands" class="position-relative">
            <div class="container">
                <div class="contact-brands-list d-flex flex-wrap">
                    <div class="contact-brands-item -intro-text d-flex justify-content-center align-items-center">
                        <div class="overflow-hidden">
                            <span class="text-orange text-line-left d-block position-relative">竭誠歡迎與我們聯繫</span>
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
                        <p class="text-orange brand-title position-relative text-center d-none d-md-block">{{item.title}}</p>
                        <div v-html="item.intro"></div>
                    </div>
                    <div class="contact-brands-item d-flex flex-column align-items-center justify-content-center">
                        <p class="text-orange brand-title position-relative text-center">人力招募</p>
                        <p class="text-size-2 font-weight-bold mb-0">即刻加入橘色大家庭</p>
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
                    img: '/images/icon_shabu.png',
                    hoverImg: '/images/contact_shabu_white.png',
                    title: '橘色涮涮屋',
                    intro: '',
                    name: 'shabu',
                },
                {
                    img: '/images/contact_extension.png',
                    hoverImg: '/images/',
                    title: 'EXTENSION 1 BY 橘色',
                    intro: '',
                    name: 'extension_1',
                },
                {
                    img: '/images/icon_cafe.png',
                    hoverImg: '/images/icon_cafe_white.png',
                    title: 'M ONE CAFE',
                    intro: '',
                    name: 'm_one_cafe',
                },
                {
                    img: '/images/contact_spa.png',
                    hoverImg: '/images/icon_spa_white.png',
                    title: 'M ONE SPA',
                    intro: '',
                    name: 'm_one_spa',
                },
                {
                    img: '/images/contact_sakura.png',
                    hoverImg: '/images/contact_sakura_white.png',
                    title: 'SAKURA SPA',
                    intro: '',
                    name: 'sakura_spa',
                },
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
    #block-contact
        #block-contact-brands
            transform: translateY(-150px)
            margin-bottom: -50px
            .contact-brands-list
                position: relative
                background: white
                .contact-brands-item
                    flex: 25%
                    box-shadow: -10px -10px 60px rgba(0, 0, 0, 0.1)
                    overflow: hidden
                    padding: 40px
                    position: relative
                    height: 250px
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
                        flex: 50%
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
                    font-size: 15px
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

        @media only screen and (max-width: 991px)
            #block-contact-brands 
                transform: translateY(0)
                margin: 50px 0  
                .contact-brands-list 
                    .contact-brands-item
                        flex: 50%
                        box-shadow: none
                        border: 1px solid #ccc
                        padding: 20px 0
                        height: auto
                        &.-intro-text
                            flex: 100%
                            border: none
                            padding: 0px
                            margin-bottom: 15px
                        &:nth-child(2n-1)
                            border-left: none
                        &:not(:last-child):not(:nth-last-child(2))
                            border-bottom: none
                        img
                            width: 50px
                    .text-line-left
                        text-align: center
                        margin-bottom: 10px
                        font-size: 12px
                        &:before
                            display: none
                    .brand-intro-title
                        font-size: 23px
                        text-align: center
                    .brand-intro-subtitle
                        font-size: 14px
                    .brand-title
                        font-size: 16px
                    .text-size-2
                        font-size: 12px !important
            
</style>
