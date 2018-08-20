<template>
    <div id="footer" class="section text-white text-center bg-black-cover position-relative" style="background-image:url('/images/bg_footer.png')">
        <div class="footer footer-join position-relative d-flex align-items-center justify-content-between w-100">
            <div class="container">
                <div class="row d-flex justify-content-between align-items-center">
                    <div class="join-us-slogan text-left">
                        不僅僅只是台灣最棒的餐飲集團<br>
                        <span class="text-orange">還是實現自我未來的大家庭</span>
                    </div>
                    <router-link :to="'/'" class="btn-orange">馬上加入我們</router-link>
                </div>
            </div>
        </div>
        <div class="footer container">
            <div class="row d-flex flex-column justify-content-between">
                <div class="footer-info position-relative d-flex justify-content-between align-items-center w-100">
                    <div class="footer-text-left">
                        <p class="text-orange footer-info-title mb-4">聯絡我們</p>
                        <p>台北市大安區仁愛路四段37號3樓之B</p>
                        <p>Email:  service@orange.co<br>Phone:  02-2711-4636<br>Fax:  02-2711-4638</p>
                    </div>
                    <img class="logo" src="/images/index_logo.png">
                    <div class="footer-text-right align-self-baseline">
                        <p class="text-orange footer-info-title mb-4">橘色精神</p>
                        <p class="footer-info-subtitle">用心 · 貼心 · 安心<br>信心 · 一心 · 同理心</p>
                    </div>
                </div>
                <div class="footer position-relative d-flex flex-column align-items-center justify-content-center w-100">
                    <div class="footer-social">
                        <a class="footer-icons mr-3 ml-3" href="#"><font-awesome-icon :icon="['fab','facebook-f']" /></a>
                        <a class="footer-icons mr-3 ml-3" href="#"><font-awesome-icon :icon="['fab','twitter']" /></a>
                    </div>
                    <p id="copyright" class="footer position-relative w-100 text-size-1 d-flex align-items-end justify-content-center">2018 <a class="link-orange"> 橘色涮涮屋 </a> 版權所有. Designed by <a class="link-orange" href="www.daydream-lab.com"> Daydream Lab</a></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
        data: function () {
            return {
               
                
            }
        }
}
</script>

<style lang="sass">
    #footer
        .container
            padding: 60px 0 20px 0
            .join-us-slogan
                font-size: 28px
                font-weight: lighter
                span
                    font-size: 48px
                    line-height: 40px
                    font-weight: bold
        .footer-social
            margin-bottom: 60px
        &:before
            background: rgba(0, 0, 0, 0.85)  
        .fp-tableCell
            position: relative
            z-index: 2
            display: flex
            flex-direction: column
            justify-content: space-between
            align-items: center
            .footer-info-title
                letter-spacing: 6px
                font-weight: 400
                font-size: 15px
        .footer-social
            .footer-icons
                font-size: 20px
        .btn-orange
            padding: 30px 65px
        .footer
            .footer-info
                margin-bottom: 100px
                line-height: 25px
                font-size: 14px
                font-weight: 100
                p
                    margin-bottom: 30px
                .footer-text-right
                    .footer-info-subtitle
                        font-size: 18px
                        font-weight: 100
                        line-height: 30px
            &.footer-join
                &:before
                    content: ""
                    position: absolute
                    width: 100%
                    height: calc(100% + 150px)
                    background: rgba(0, 0, 0, 0.4)
                    z-index: -1
                    top: -100px

</style>
