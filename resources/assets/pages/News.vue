<template>
    <div class="position-relative">
        <banner title="<span class='text-orange'>橘色</span>新訊" img="/images/banner_news.png"></banner>
        <div id="block-news" class="news-body position-relative">
            <div id="block-news-lists" class="position-relative">
                <div id="block-news-filter">
                    <div class="container d-flex">
                        <div id="category-items" class="news-categories -category d-flex">
                            <div 
                                class="category-items mr-4 ml-4 d-flex align-items-center" 
                                :class="(category == '') ? 'active' : ''"
                                @click="filterCate('');"
                            >
                                全部新訊
                            </div>
                            <div 
                                v-for="(item,$index) in newsCategories" 
                                :key="$index" 
                                class="category-items mr-4 ml-4 d-flex align-items-center" 
                                :class="(category == item) ? 'active' : ''"
                                @click="filterCate(item);"
                            >
                                {{item}}
                            </div>
                        </div>
                        <div class="news-categories -date">
                            <div id="category-date" class="d-flex justify-content-end">
                                <div class="filter-date -cate position-relative d-block d-lg-none">
                                    <el-select v-model="category" @change="filterCate">
                                        <el-option :label="'全部新訊'" :value="''"></el-option>
                                        <el-option 
                                            v-for="(item,$index) in newsCategories"
                                            :key="$index" 
                                            :label="item" 
                                            :value="item"
                                        >
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="filter-date -year position-relative">
                                    <el-select v-model="year" @change="filterChange">
                                        <el-option :label="'2018'" :value="2018"></el-option>
                                        <el-option :label="'2015'" :value="2015"></el-option>
                                        <el-option :label="'2013'" :value="2013"></el-option>
                                    </el-select>
                                </div>
                                <div class="filter-date -month">
                                    <el-select v-model="month" @change="filterChange">
                                        <el-option :label="'月份'" :value="''"></el-option>
                                        <el-option :label="'10月'" :value="10"></el-option>
                                        <el-option :label="'9月'" :value="9"></el-option>
                                        <el-option :label="'8月'" :value="8"></el-option>
                                    </el-select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="block-news-items" class="news-list">
                    <div class="container">
                        <div class="row">
                            <!-- v-if="($index < viewIndex) && (item.category == newsCategories[newsIndex] || newsIndex == 0) && (newsYear(item.date) == year) && (newsMonth(item.date) == month || month == '')" -->
                            <div 
                                class="news-item col-12 col-md-3"
                                v-for="(item,$index) in newsItems.filter(filterNews)"
                                :key="$index"    
                                v-if="($index < viewIndex)"
                            >

                                <router-link :to="'/news/detail/'+item.id">
                                    <div class="news-head d-flex align-items-center justify-content-center position-relative" :style="'background-image: url(' + item.background + ')'">
                                        <span class="btn-border btn-readmore">了解更多</span>
                                    </div>
                                </router-link>
                                <div class="news-content text-center">
                                    <div>
                                        <span class="text-black text-size-1">{{item.date}}</span>
                                        <span class="text-orange text-size-1">{{item.category}}</span>
                                    </div>
                                    <router-link :to="'/news/detail/'+item.id" class="news-title" v-html="item.title"></router-link>
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
                },
                {
                    id: 2,
                    background: '/images/news_v3.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                },
                {
                    id: 3,
                    background: '/images/news_v5.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                },
                {
                    id: 4,
                    background: '/images/news_v2.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限 ',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                },
                {
                    id: 5,
                    background: '/images/news_v4.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                },
                {
                    id: 6,
                    background: '/images/news_v1.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                },
                {
                    id: 7,
                    background: '/images/news_v3.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
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
                    date: '2018/8/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限 ',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                },
                {
                    id: 10,
                    background: '/images/news_v4.png',
                    date: '2018/8/21',
                    category: '橘色涮涮屋',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                },
                {
                    id: 11,
                    background: '/images/news_v1.png',
                    date: '2018/10/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                },
                {
                    id: 12,
                    background: '/images/news_v2.png',
                    date: '2018/10/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                },
                {
                    id: 13,
                    background: '/images/news_v3.png',
                    date: '2018/12/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                },
                {
                    id: 14,
                    background: '/images/news_v4.png',
                    date: '2018/12/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                },
                {
                    id: 15,
                    background: '/images/news_v5.png',
                    date: '2018/12/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                },
            ],
            newsCategories: ['橘色涮涮屋','Extension 1 by 橘色'],
            viewIndex: 8,
	        year: 2018,
            month: '',
            category: '',
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
            let filterNewsLength = this.newsItems.filter(this.filterNews).length;
            this.viewIndex += 4;
            if(this.viewIndex >= filterNewsLength){
                this.loadEnd = true;
            }
        },
        newsYear(date){
            return date.split('/')[0];
        },
        newsMonth(date) {
            return date.split('/')[1];
        },
        filterNews(value) {
            return (value.category == this.category || this.category == '') 
                    && (this.newsMonth(value.date) == this.month || this.month == '')
                    && (this.newsYear(value.date) == this.year);
        },
        filterCate(value){
            this.category = value;
            this.filterChange();
        },
        filterChange() {
            this.viewIndex = 8;
            let filterNewsLength = this.newsItems.filter(this.filterNews).length;
            if(this.viewIndex >= filterNewsLength){
                this.loadEnd = true;
            }
            else{
                this.loadEnd = false;
            }
        },
    }
}
</script>

<style lang="sass"  scope>
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
        &:before
            background-attachment: fixed
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
                .news-head
                    padding-top: 120%
                    margin-bottom: 10px  
                    flex: 1
            
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
