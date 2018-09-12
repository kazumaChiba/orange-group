<template>
    <div class="news-body w-100">
            <div class="block-news-outer position-relative">
                <div class="block-news-lists position-relative">
                    <div class="block-news-filter">
                        <div class="news-categories -category justify-content-center d-none d-md-flex">
                            <div 
                                class="category-items mr-4 ml-4 d-flex align-items-center" 
                                :class="(category == '') ? 'active' : ''"
                                @click="category = ''"
                            >
                                全部新訊
                            </div>
                            <div 
                                v-for="(item,$index) in newsCategories" 
                                :key="$index" 
                                class="category-items mr-4 ml-4 d-flex align-items-center" 
                                :class="(category == item) ? 'active' : ''"
                                @click="category = item"
                            >
                                {{item}}
                            </div>
                        </div>
                        <el-select class="d-block d-md-none" v-model="category" @change="filterCate">
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
                    <div id="block-news-items" class="news-list">
                        <div class="d-flex flex-column flex-wrap align-items-center h-100">
                            <div 
                                class="news-item"
                                :class="{'feature' : $index == 2}"
                                v-for="(item,$index) in newsItems.filter(filterNews)"
                                :key="$index"    
                                v-if="($index < 5)"
                            >
                                
                                <div v-if="$index == 2 && newsItems.filter(filterFeature)[0]">
                                    <router-link :to="'/news/detail/'+item.id">
                                        <div class="news-head d-flex align-items-center justify-content-center position-relative" :style="'background-image: url(' + newsItems.filter(filterFeature)[0].background + ')'">
                                            <router-link :to="'/news/detail/'+newsItems.filter(filterFeature)[0].id" class="btn-border btn-readmore">了解更多</router-link>
                                        </div>
                                    </router-link>
                                    <div class="news-content text-center">
                                        <div>
                                            <span class="text-black text-size-1">{{newsItems.filter(filterFeature)[0].date}}</span>
                                            <span class="text-orange text-size-1">{{newsItems.filter(filterFeature)[0].category}}</span>
                                        </div>
                                        <router-link :to="'/news/detail/'+newsItems.filter(filterFeature)[0].id" class="news-title" v-html="newsItems.filter(filterFeature)[0].title"></router-link>
                                        <p class="news-desc" v-html="newsItems.filter(filterFeature)[0].intro"></p>
                                    </div>
                                </div>
                                <div v-else>
                                    <router-link :to="'/news/detail/'+item.id">
                                        <div class="news-head d-flex align-items-center justify-content-center position-relative" :style="'background-image: url(' + item.background + ')'">
                                            <router-link :to="'/news/detail/'+item.id" class="btn-border btn-readmore">了解更多</router-link>
                                        </div>
                                    </router-link>
                                    <div class="news-content text-center">
                                        <div>
                                            <span class="text-black text-size-1">{{item.date}}</span>
                                            <span class="text-orange text-size-1">{{item.category}}</span>
                                        </div>
                                        <router-link :to="'/news/detail/'+item.id" class="news-title" v-html="item.title"></router-link>
                                        <p class="news-desc" v-if="$index == 2" v-html="item.intro"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn-load-more text-center">
                    <router-link :to="'/news/'" class="news-title">更多橘色新訊</router-link>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            newsItems: [
                {
                    id: 0,
                    background: '/images/news_v1.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    feature: true,
                },
                {
                    id: 1,
                    background: '/images/news_v3.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '橘色公告－員工旅遊<br>謝謝辛勤付出的每一位夥伴<br>2018/05/20(日)',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    feature: true,                     
                },
                {
                    id: 2,
                    background: '/images/news_v5.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    feature: false,
                },
                {
                    id: 3,
                    background: '/images/news_v2.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限 ',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    feature: false,
                },
                {
                    id: 4,
                    background: '/images/news_v4.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    feature: false,
                },
                {
                    id: 5,
                    background: '/images/news_v1.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    feature: false,
                },
                {
                    id: 6,
                    background: '/images/news_v2.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
	                title: '橘色公告－員工旅遊<br>謝謝辛勤付出的每一位夥伴<br>2018/05/20(日)～2018/05/24(四)<br>員工旅遊 暫停營業',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    feature: false,
                },
                {
                    id: 7,
                    background: '/images/news_v3.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    feature: false,
                },
                {
                    id: 8,
                    background: '/images/news_v4.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    feature: false,
                },
                {
                    id: 9,
                    background: '/images/news_v5.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    feature: false,
                },
            ],
            newsCategories: ['全部新訊','橘色涮涮屋','Extension 1 by 橘色'],
            newsIndex: 0,
            viewIndex: 0,
            newsCategories: ['橘色涮涮屋','Extension 1 by 橘色'],
            category: '',
        }
    },
    methods: {
        filterCate(value) {
            this.category = value;
        },
        filterNews(value) {
            return (value.category == this.category || this.category == '');
        },
        filterFeature(value) {
            return (value.category == this.category || this.category == '') && (value.feature == true);
        },
    }
}
</script>

<style lang="sass" scoped>
#block-news
    .block-news-outer
        .block-news-filter
            margin-bottom: 20px
            margin-top: 40px
            .news-categories
                font-size: 14px
    .news-list
        transition: all .5s
        height: 985px
        .news-item 
            width: calc(25% - 40px)
            max-height: 450px
            &.feature
                width: 50%
                max-height: unset
            .news-head
                padding-top: 130%
            .news-content
                padding: 10px 0
                .news-desc
                    margin-top: 20px
                    height: 73px
                    overflow: hidden
                    font-size: 14px
                    line-height: 24px
                    text-align: center
                    color: #797979

@media only screen and (max-width: 991px)
    .section-pd
        padding: 0
    #app 
        #block-news
            .news-categories
                margin-top: 0 !important
            .news-list 
                height: auto
                .news-item
                    width: 100%
                    max-height: unset

                    

</style>
