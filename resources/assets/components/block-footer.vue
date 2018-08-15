<template>
    <div id="footer" class="section text-white text-center bg-black-cover" style="background-image:url('/images/bg_footer.png')">
        <div class="container h-100 section-pd">
            <div class="row h-100">
                <div class="footer footer-join position-relative d-flex align-items-center justify-content-between w-100">
                    <h4 class="text-left"><span>不僅僅只是台灣最棒的餐飲集團</span><br><span class="text-orange">還是實現自我未來的大家庭</span></h4>
                    <router-link :to="'/'" class="btn-orange">馬上加入我們</router-link>
                </div>
                <div class="footer footer-info position-relative d-flex justify-content-between align-items-center w-100">
                    <div class="text-size-2">
                        <p class="text-orange footer-info-title mb-4">聯絡我們</p>
                        <p>台北市大安區仁愛路四段37號3樓之B</p>
                        <p>Email:  service@orange.co<br>Phone:  02-2711-4636<br>Fax:  02-2711-4638</p>
                    </div>
                    <img class="logo" src="/images/index_logo.png">
                    <div class="text-size-2">
                        <p class="text-orange footer-info-title mb-4">橘色精神</p>
                        <p class="text-size-3">用心 · 貼心 · 安心<br>信心 · 一心 · 同理心</p>
                    </div>
                </div>
                <div class="footer footer-social position-relative d-flex flex-column align-items-center justify-content-center w-100">
                    <div class="mb-5">
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
        &:before
            background: rgba(0, 0, 0, 0.85)  
        .fp-tableCell
            position: relative
            z-index: 2
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            .footer-info-title
                letter-spacing: 5px
        .footer-social
            .footer-icons
                font-size: 20px
</style>
