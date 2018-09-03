<template>
    <div id="footer" class="section text-white text-center bg-black-cover position-relative d-flex flex-column justify-content-center" style="background-image:url('/images/footer.png')">
        <div class="footer footer-join position-relative d-flex align-items-center justify-content-between w-100">
            <div class="container">
                <div class="row d-flex justify-content-between align-items-center flex-column flex-lg-row">
                    <div class="join-us-slogan text-left">
                        不僅僅只是台灣最棒的餐飲集團<br>
                        <span class="text-orange">還是實現自我未來的大家庭</span>
                    </div>
                    <router-link :to="'/'" class="btn-orange fat">馬上加入我們</router-link>
                </div>
            </div>
        </div>
        <div class="footer container">
            <div class="d-flex flex-column justify-content-end h-100">
                <div class="row mb-lg-5 pb-lg-5 flex-wrap-reverse flex-lg-row">
                    <div class="col col-contact-us">
                        <div class="footer-text-left text-center text-lg-left pt-5">
                            <div class="d-inline-block text-center">
                                <p class="text-orange footer-info-title mb-4">聯絡我們</p>
                                <p>台北市大安區仁愛路四段37號3樓之B</p>
                                <p>Email:  service@orange.co<br>Phone:  02-2711-4636<br>Fax:  02-2711-4638</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <img class="logo" src="/images/index_logo.png">
                    </div>
                    <div class="col">
                        <div class="footer-text-right text-center text-lg-right pt-0 pt-lg-5">
                            <div class="d-inline-block text-center">
                                <p class="text-orange footer-info-title mb-4">橘色精神</p>
                                <p class="footer-info-subtitle">用心 · 貼心 · 安心<br>信心 · 一心 · 同理心</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--<div class="footer-info position-relative d-flex justify-content-between align-items-center w-100">
                    <div class="footer-text-left text-left">
                        <div class="d-inline-block text-center">
                            <p class="text-orange footer-info-title mb-4">聯絡我們</p>
                            <p>台北市大安區仁愛路四段37號3樓之B</p>
                            <p>Email:  service@orange.co<br>Phone:  02-2711-4636<br>Fax:  02-2711-4638</p>
                        </div>
                    </div>
                    <img class="logo" src="/images/index_logo.png">
                    <div class="footer-text-right text-right">
                        <div class="d-inline-block text-center">
                            <p class="text-orange footer-info-title mb-4">橘色精神</p>
                            <p class="footer-info-subtitle">用心 · 貼心 · 安心<br>信心 · 一心 · 同理心</p>
                        </div>
                    </div>
                </div>-->
                <div class="position-relative d-flex flex-column align-items-center justify-content-center w-100 pt-4">
                    <!-- <div class="footer-social">
                        <a class="footer-icons mr-3 ml-3" href="#"><font-awesome-icon :icon="['fab','facebook-f']" /></a>
                        <a class="footer-icons mr-3 ml-3" href="#"><font-awesome-icon :icon="['fab','twitter']" /></a>
                    </div> -->
                    <p id="copyright" class="footer mb-5 position-relative w-100 text-size-1 d-flex align-items-end justify-content-center">
                        <span>
                            2018 <a class="link-orange"> 橘色涮涮屋 </a> 版權所有. Designed by&ensp;<a class="link-orange" href="www.daydream-lab.com">Daydream Lab</a>
                        </span>
                    </p>
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
        height: 100vh
        .container
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
                font-weight: 500
                font-size: 15px
        .footer-social
            .footer-icons
                font-size: 20px
        .footer
            flex: 2
            .footer-info
                margin-bottom: 100px
                line-height: 25px
                font-size: 14px
                font-weight: 100
                div
                    flex: 1
                p
                    margin-bottom: 30px
                .footer-text-right
                    .footer-info-subtitle
                        font-size: 18px
                        font-weight: 100
                        line-height: 30px
            &.footer-join
                flex: 1
                &:before
                    content: ""
                    position: absolute
                    width: 100%
                    height: 100%
                    background: rgba(0, 0, 0, 0.8)
                    top: 0px
            .btn-orange
                &:hover
                    background: white
                    color: #f26d23 !important
                    font-weight: 500

    @media only screen and (max-width: 991px)
        #app 
            #footer 
                .footer
                    .col-contact-us
                        flex: 100%
                .container 
                    .join-us-slogan 
                        line-height: 45px
                        margin-bottom: 50px
                        span
                            font-size: 28px
                .logo
                    height: 100px
            
            .btn-orange
                &.fat
                    padding: 20px 45px

    @media only screen and (max-width: 420px)
        #app 
            #footer 
                height: auto
                .container 
                    padding: 50px 40px
                    .join-us-slogan 
                        font-size: 18px
                        line-height: 30px
                        margin-bottom: 30px
                        span
                            font-size: 18px
                #copyright , #copyright a
                    white-space: normal
                        
                .footer
                    margin-bottom: 0 !important
                    .col
                        p
                            font-size: 13px !important
                .btn-orange
                    &.fat
                        padding: 12px 30px
                        font-size: 13px
</style>
