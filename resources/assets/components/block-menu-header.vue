<template>
    <div class="menu-outer d-flex justify-content-end">
        <div class="menu-list d-none d-lg-block">
            <router-link :to="'/'" exact class="menu-title">橘色體驗</router-link>
            <router-link :to="'/about'" class="menu-title">關於橘色</router-link>
            <router-link :to="'/news'" class="menu-title">橘色新訊</router-link>
            <router-link :to="'/family'" class="menu-title">橘色家庭</router-link>
            <router-link :to="'/contact'" class="menu-title">聯絡我們</router-link>
        </div>
        <div id="mobile-menu">
            <span class="buger-icon d-flex flex-column align-items-center justify-content-center" @click="open = !open">
                <span></span>
                <span></span>
                <span></span>
            </span>
            <div 
                class="menu-list d-lg-none d-flex flex-column align-items-center justify-content-center h-100"
                :class="open ? '' : 'fade'"
            >
                <router-link :to="'/'" exact class="menu-title">橘色體驗</router-link>
                <router-link :to="'/about'" class="menu-title">關於橘色</router-link>
                <router-link :to="'/news'" class="menu-title">橘色新訊</router-link>
                <router-link :to="'/family'" class="menu-title">橘色家庭</router-link>
                <router-link :to="'/contact'" class="menu-title">聯絡我們</router-link>
            </div>
        </div>
    </div>
</template>
<style lang="sass">   
    #header
        .logo
            padding-left: 35px
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
                .menu-list
                    transition: all .5s ease-in-out
                #mobile-menu
                    width: 100vw
                    height: 100vh
                    position: fixed
                    top: 0
                    left: 0
                    .menu-list
                        background-color: white
                    .menu-title
                        color: black
                        padding: 20px
                        font-size: 22px
                        &.router-link-active
                            color: #f26e22  
                    .buger-icon
                        position: absolute
                        width: 50px
                        height: 40px
                        background: rgba(235, 94, 0, 0.8)
                        right: 23px
                        top: 28px
                        z-index: 2
                        span
                            width: 60%
                            height: 2px
                            background: white
                            display: block
                            margin: 3px 0
                .menu-title
                    display: inline-block
                    font-size: 15px
                    font-weight: 500
                    padding: 0 20px
                &.menu-shadow
                    .menu-list
                        background: rgba(0, 0, 0, 0.3)

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
