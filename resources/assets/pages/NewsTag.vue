<template>
    <div class="position-relative">
        <banner title="<span class='text-orange'>搜尋</span>結果" img="/images/banner_news.png" :tag="this.$route.params.tag"></banner>
        <load-news :isTag="true" :tag="this.$route.params.tag"></load-news>
        <block-footer></block-footer>
    </div>
</template>

<script>
import Banner from 'components/block-banner'
import MenuHeader from 'components/block-menu-header'
import LoadNews from 'components/news-load'
import BlockFooter from 'components/block-footer'

export default {
    data: function () {
        return {

        }
    },
    components: {
        Banner,
        MenuHeader,
        LoadNews,
        BlockFooter,
    },
    mounted() {
       
    },
    methods: {
   
    },
}
</script>

<style lang="sass" scoped>
    
</style>
