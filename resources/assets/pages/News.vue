<template>
    <div class="position-relative">
        <banner title="<span class='text-orange'>橘色</span>新訊" img="/images/slideshow_1.jpg"></banner>
        <div id="block-news" class="news-body position-relative">
            <div id="block-news-lists" class="position-relative">
                <div id="block-news-filter">
                    <div class="container">
                        <div class="row">
                            <div class="news-categories -category d-flex">
                                <div 
                                    id="category-items"
                                    v-for="(item,$index) in newsCategories" 
                                    :key="$index" 
                                    class="category-items mr-4 ml-4 d-flex align-items-center" 
                                    :class="(newsIndex == $index) ? 'active' : ''"
                                    @click="newsIndex = $index"
                                >
                                    {{item}}
                                </div>
                            </div>
                            <div class="news-categories -date">
                                <div id="category-date" class="d-flex">
                                    <div class="filter-date -year">
                                        <el-dropdown trigger="click" class="text-white">
                                            <span class="el-dropdown-link">
                                                2018<i class="el-icon-arrow-down el-icon--right"></i>
                                            </span>
                                            <el-dropdown-menu slot="dropdown">
                                                <el-dropdown-item>年</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </el-dropdown>
                                    </div>
                                    <div class="filter-date -month">
                                        <el-dropdown trigger="click" class="text-white">
                                            <span class="el-dropdown-link">
                                                9月<i class="el-icon-arrow-down el-icon--right"></i>
                                            </span>
                                            <el-dropdown-menu slot="dropdown">
                                                <el-dropdown-item>月</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </el-dropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="block-news-items" class="news-list">
                    <div class="container">
                        <div class="row">
                            <div 
                                class="news-item"
                                v-for="(item,$index) in newsItems.slice(0,viewIndex)"
                                :key="$index"    
                                v-if="item.category == newsCategories[newsIndex] || newsIndex == 0"
                            >
                                <div class="news-head d-flex align-items-center justify-content-center position-relative" :style="'background-image: url(' + item.background + ')'">
                                    <router-link :to="'/news/detail'" class="btn-border">了解更多</router-link>
                                </div>
                                <div class="news-content text-center">
                                    <div>
                                        <span class="text-black text-size-1">{{item.date}}</span>
                                        <span class="text-orange text-size-1">{{item.category}}</span>
                                    </div>
                                    <a class="news-title" :href="item.link" v-html="item.title"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn-load-more text-center">
                <a class="btn-load-more btn-orange fat" @click="loadMore">
                    載入更多
                </a>
            </div>
        </div>
        <block-footer></block-footer>
    </div>
</template>

<script>
import Banner from 'components/block-banner'
import MenuHeader from 'components/block-menu-header'
import BlockFooter from 'components/block-footer'

export default {
    data: function () {
        return {
            newsItems: [
                {
                    background: '/images/news_v1.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
                {
                    background: '/images/news_v2.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
                {
                    background: '/images/news_v3.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
                {
                    background: '/images/news_v4.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限 ',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
                {
                    background: '/images/news_v5.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
                {
                    background: '/images/news_v1.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
                {
                    background: '/images/news_v2.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
                {
                    background: '/images/news_v3.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
                {
                    background: '/images/news_v4.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
                {
                    background: '/images/news_v5.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
            ],
            newsCategories: ['全部新訊','橘色涮涮屋','Extension 1 by 橘色'],
            newsIndex: 0,
            viewIndex: 8,
        }
    },
    components: {
        Banner,
        MenuHeader,
        BlockFooter,
    },
    methods: {
        loadMore(){
            this.viewIndex += 4;
        }
    }
}
</script>

<style lang="sass">
    #header
        top: 0
    #block-news
        margin-bottom: 180px
        #block-news-lists
            z-index: 2
            margin-bottom: 80px
            #block-news-filter
                .news-categories
                    padding: 55px 0
                    font-size: 14px 
                    &.-category
                        flex: 1
                    .filter-date
                        padding: 15px 20px
                        background: #f26d23
                        cursor: pointer
                        &.-month
                            margin-right: 20px
                        &.-year
                            position: relative
                            &:after
                                content: ""
                                position: absolute
                                height: 60%
                                width: 1px
                                background: #bfbfbf
                                right: 0
                                top: 20%

        #block-news-items
            .news-item
                width: 25%
                padding: 0 16px
            
    #block-breadcrumb
        .banner-title
            font-size: 90px
            font-weight: 300
</style>
