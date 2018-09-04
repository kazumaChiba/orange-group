<template>
    <div class="menu-outer d-flex justify-content-end">
        <div class="menu-list d-lg-block">
            <router-link :to="'/'" exact class="menu-title">橘色體驗</router-link>
            <router-link :to="'/about'" class="menu-title">關於橘色</router-link>
            <router-link :to="'/news'" class="menu-title">橘色新訊</router-link>
            <router-link :to="'/family'" class="menu-title">橘色家庭</router-link>
            <router-link :to="'/contact'" class="menu-title">聯絡我們</router-link>
        </div>
        <div id="mobile-menu"  :class="open ? 'menu-open' : ''">
            <span class="buger-icon d-flex flex-column align-items-center justify-content-center" @click="open = !open">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </span>
            <div 
                class="menu-list d-lg-none d-flex flex-column align-items-center justify-content-center h-100"
                :class="open ? '' : 'fade'"
            >
                <img class="logo" src="/images/index_logo.png">
                <span @click="open = false">
                    <router-link :to="'/'" exact class="menu-title">橘色體驗</router-link>
                </span>
                <span @click="open = false">
                    <router-link :to="'/about'" class="menu-title">關於橘色</router-link>
                </span>
                <span @click="open = false">
                    <router-link :to="'/news'" class="menu-title">橘色新訊</router-link>
                </span>
                <span @click="open = false">
                    <router-link :to="'/family'" class="menu-title">橘色家庭</router-link>
                </span>
                <span @click="open = false">
                    <router-link :to="'/contact'" class="menu-title">聯絡我們</router-link>
                </span>
            </div>
        </div>
    </div>
</template>
<style lang="sass">   
    #header
        .logo
            padding-left: 35px
            img
                width: 140px
        #main-menu
            width: 50%
            margin-left: auto
            overflow: hidden
            position: relative
            padding-right: 35px
            margin-right: 35px
            flex: 1
            .menu-outer
                overflow: hidden
                &.menu-close
                    .menu-list
                        transform: translateX(100%)
                        transition: all .3s ease-in-out
                .menu-list
                    transform: translateX(0%)
                    transition: all .3s ease-in-out
                .menu-title
                    display: inline-block
                    font-size: 15px
                    font-weight: 500
                    padding: 0 20px
                &.menu-shadow
                    .menu-list
                        background: rgba(0, 0, 0, 0.3)
                
                /* 手機版選單 */
                #mobile-menu
                    width: 100vw
                    height: 0
                    position: fixed
                    top: 0
                    left: 0
                    transition: all .3s
                    display: none
                    &.menu-open
                        height: 100vh
                        .buger-icon
                            span
                                transform: rotate(0)
                                opacity: 1
                                &:first-child , &:last-child
                                    opacity: 0
                                &:nth-child(2)
                                    transform: rotate(45deg)
                                &:nth-child(3)
                                    transform: rotate(-45deg)
                        .menu-list
                            transform: translateX(0)
                    .buger-icon
                        position: absolute
                        width: 50px
                        height: 40px
                        background: rgba(235, 94, 0, 0.8)
                        right: 23px
                        top: 28px
                        z-index: 2
                        span
                            position: absolute
                            top: 50%
                            margin: 0
                            width: 60%
                            height: 2px
                            background: white
                            display: block
                            transition: all .3s
                            &:first-child
                                top: calc(50% - 8px)
                            &:last-child
                                top: calc(50% + 8px)
                    .menu-list
                        background-color: white
                        transform: translateY(-100%)
                        overflow: hidden
                    .menu-title
                        color: black
                        padding: 20px
                        font-size: 22px
                        &.router-link-active
                            color: #f26e22  

    @media only screen and (max-width: 768px)
        #app 
            #header 
                .logo 
                    img
                        width: 50px
                #main-menu
                    .menu-outer 
                        .menu-list
                            display: none
                        #mobile-menu
                            display: block
                            .logo
                                height: 75px
                                top: 28px
                                left: 23px
                                padding: 0
                
            #burger-menu
                display: none !important

</style>
<script>
    export default {
        data: function() {
            return{
                open: false,
            }
        },
        methods: {

        },
        props: {

        },
    }
</script>
