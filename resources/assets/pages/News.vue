<template>
    <div class="position-relative">
        <banner title="<span class='text-orange'>橘色</span>新訊" img="/images/banner_news.png"></banner>
        <load-news></load-news>
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
        // this.$store.dispatch("update_news_items",this.newsItems);
        // console.log(this.$store.state.user.news_items[0].title);
    },
    methods: {
        
    }
}
</script>

<style lang="sass" scoped>

</style>
