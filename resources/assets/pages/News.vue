<template>
    <div class="position-relative">
        <banner title="<span class='text-orange'>橘色</span>新訊" img="/images/banner_news.png"></banner>
        <div id="block-news" class="news-body position-relative">
            <div id="block-news-lists" class="position-relative">
                <div id="block-news-filter">
                    <div class="container d-flex">
                        <div id="category-items" class="news-categories -category d-flex">
                            <div 
                                
                                v-for="(item,$index) in newsCategories" 
                                :key="$index" 
                                class="category-items mr-4 ml-4 d-flex align-items-center" 
                                :class="(newsIndex == $index) ? 'active' : ''"
                                @click="newsIndex = $index; category = newsCategories[newsIndex]"
                            >
                                {{item}}
                            </div>
                        </div>
                        <div class="news-categories -date">
                            <div id="category-date" class="d-flex justify-content-end">
                                <div class="filter-date -cate position-relative d-block d-lg-none">
                                    <el-select v-model="category"  @change="filterCate">
                                        <el-option 
                                            v-for="(item,$index) in newsCategories"
                                            :key="$index" 
                                            :label="item" 
                                            :value="$index"
                                            ></el-option>
                                    </el-select>
                                </div>
                                <div class="filter-date -year position-relative">
                                    <el-select v-model="year">
                                        <el-option :label="'2018'" :value="2018"></el-option>
                                        <el-option :label="'2015'" :value="2015"></el-option>
                                        <el-option :label="'2013'" :value="2013"></el-option>
                                    </el-select>
                                    <!--<el-dropdown trigger="click" class="text-white">
                                        <span class="el-dropdown-link">
                                            2018<i class="el-icon-arrow-down el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item>2018</el-dropdown-item>
                                            <el-dropdown-item>2015</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>-->
                                </div>
                                <div class="filter-date -month">
                                    <el-select v-model="month">
                                        <el-option :label="'月份'" :value="''"></el-option>
                                        <el-option :label="'10月'" :value="10"></el-option>
                                        <el-option :label="'9月'" :value="9"></el-option>
                                        <el-option :label="'8月'" :value="8"></el-option>
                                    </el-select>
                                    <!--<el-dropdown trigger="click" class="text-white">
                                        <span class="el-dropdown-link">
                                            9月<i class="el-icon-arrow-down el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item>10月</el-dropdown-item>
                                            <el-dropdown-item>11月</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="block-news-items" class="news-list">
                    <div class="container">
                        <div class="row">
                            <div 
                                class="news-item col-12 col-md-3"
                                v-for="(item,$index) in newsItems.slice(0,viewIndex)"
                                :key="$index"    
                                v-if="item.category == newsCategories[newsIndex] || newsIndex == 0"
                            >
                                <div class="news-head d-flex align-items-center justify-content-center position-relative" :style="'background-image: url(' + item.background + ')'">
                                    <router-link :to="'/news/detail/'+item.id" class="btn-border">了解更多</router-link>
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
                <a 
                    class="btn-load-more btn-orange fat" 
                    :class="{'no-more' : loadEnd}"
                    @click="loadMore"
                >
                    {{loadEnd ? '無更多新訊' : '載入更多'}}
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
                    id: 1,
                    background: '/images/news_v1.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail',
                },
                {
                    id: 2,
                    background: '/images/news_v3.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail',
                },
                {
                    id: 3,
                    background: '/images/news_v5.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
                {
                    id: 4,
                    background: '/images/news_v2.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限 ',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
                {
                    id: 5,
                    background: '/images/news_v4.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
                {
                    id: 6,
                    background: '/images/news_v1.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
                {
                    id: 7,
                    background: '/images/news_v3.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
                {
                    id: 8,
                    background: '/images/news_v5.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
                {
                    id: 9,
                    background: '/images/news_v2.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限 ',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
                {
                    id: 10,
                    background: '/images/news_v4.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
                {
                    id: 11,
                    background: '/images/news_v1.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
                {
                    id: 12,
                    background: '/images/news_v2.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
                {
                    id: 13,
                    background: '/images/news_v3.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
                {
                    id: 14,
                    background: '/images/news_v4.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/#/news/detail'
                },
                {
                    id: 15,
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
	        year: 2018,
            month: '',
            category: '全部新訊',
            loadEnd: false,
        }
    },
    components: {
        Banner,
        MenuHeader,
        BlockFooter,
    },
    mounted() {
        // this.$store.dispatch("update_news_items",this.newsItems);
        // console.log(this.$store.state.user.news_items[0].title);
    },
    methods: {
        loadMore(){
            this.viewIndex += 4;
            if(this.viewIndex >= this.newsItems.length){
                this.loadEnd = true;
            }
        },
        filterCate(index){
            this.newsIndex = index;
        }
    }
}
</script>
<style lang="sass" scope>
#block-news
    &:before
        background-attachment: fixed
</style>
<style lang="sass">
    .el-input__inner
        -webkit-appearance: none
        border-radius: 0
        border: unset
        background: transparent
        color: white
    .el-select__caret
        color: #fff
    #block-news
        margin-bottom: 180px
        .filter-date
            &.-year
                width: 90px
            &.-month
                width: 85px
        .btn-load-more
            &.no-more
                background: rgba(0, 0, 0, 0.6)
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
                        padding: 5px
                        background: #f26d23
                        cursor: pointer
                        &.-month
                            margin-right: 20px
                        &.-year , &.-cate
                            &:after
                                content: ""
                                position: absolute
                                height: 60%
                                width: 1px
                                background: rgba(255, 255, 255, 0.6)
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

    @media only screen and (max-width: 991px)
        #block-breadcrumb
            .banner-title
                font-size: 28px
        #block-news
            margin-bottom: 55px
            #block-news-lists
                margin-bottom: 0
            #block-news-filter
                .news-categories
                    padding: 30px 0
                    &.-category
                        display: none !important
                    &.-date
                        .filter-date
                            width: auto
                            flex: 2
                            &.-cate
                                flex: 3
                            &.-month
                                margin-right: 0 !important
</style>
