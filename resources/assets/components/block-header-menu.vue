<template>
    <div id="main-menu" class="d-flex justify-content-end">
        <router-link :to="'/'" class="menu-title">橘色體驗</router-link>
        <router-link :to="'/about'" class="menu-title">關於橘色</router-link>
        <router-link :to="'/news'" class="menu-title">橘色新訊</router-link>
        <router-link :to="'/family'" class="menu-title">橘色家庭</router-link>
        <router-link :to="'/contact'" class="menu-title">聯絡我們</router-link>
    </div>
</template>
<style lang="sass">
    #main-menu
        width: 50%
        margin-left: auto
        .menu-title
            display: inline-block
            font-size: 16px
            font-weight: 500
            padding: 0 20px

</style>
<script>
    export default {
        methods: {

        },
        props: {

        },
    }
</script>
