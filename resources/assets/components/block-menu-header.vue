<template>
    <div class="menu-outer d-flex justify-content-end">
        <div class="menu-list">
            <router-link :to="'/'" class="menu-title">橘色體驗</router-link>
            <router-link :to="'/about'" class="menu-title">關於橘色</router-link>
            <router-link :to="'/news'" class="menu-title">橘色新訊</router-link>
            <router-link :to="'/family'" class="menu-title">橘色家庭</router-link>
            <router-link :to="'/contact'" class="menu-title">聯絡我們</router-link>
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
                .menu-title
                    display: inline-block
                    font-size: 14px
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

            }
        },
        methods: {

        },
        props: {

        },
    }
</script>
