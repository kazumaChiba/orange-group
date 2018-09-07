<template>
    <div class="news-body w-100">
        <div class="news-categories d-flex justify-content-center text-size-2 mt-5 mb-3">
            <div 
                v-for="(item,$index) in newsCategories" 
                :key="$index" 
                class="category-items mr-4 ml-4" 
                :class="(newsIndex == $index) ? 'active' : ''"
                @click="newsIndex = $index"
            >
                {{item}}
            </div>
        </div>
        <transition-group
            name="fade"
            tag="div"
            class="news-list-outer d-flex flex-column flex-wrap align-items-center">
            <!-- <div 
                class="news-item"
                v-for="(item,$index) in newsItems"
                :key="$index"
                v-if="$index < 5"
            >
                <div class="news-head d-flex align-items-center justify-content-center position-relative" :style="'background-image: url(' + item.background + ')'">
                    <router-link :to="'/news/detail'" class="btn-border">了解更多</router-link>
                </div>
                <div class="news-content">
                    <div class="news-info">
                        <span class="text-black text-size-1">{{item.date}}</span>
                        <span class="text-orange text-size-1">{{item.category}}</span>
                    </div>
                    <a class="news-title" :href="item.link" v-html="item.title"></a>
                </div>
            </div> -->
            <div
                class="news-list d-flex flex-lg-row flex-column-reverse justify-content-between w-100 "
                v-for="(n,$groupIndex) in viewIndex+1"
                :key="$groupIndex">
                    <div class="block-list beside flex-row flex-lg-column d-flex justify-content-between justify-content-lg-start">
                        <div
                            class="news-item"
                            v-for="(item,$index) in newsItems.slice(viewIndex,viewIndex+2)"
                            :key="$index + 'a'"
                            v-if="newsCategories[newsIndex] == item.category || newsIndex == 0"
                        >
                            <div class="news-head d-flex align-items-center justify-content-center position-relative" :style="'background-image: url(' + item.background + ')'">
                                <router-link :to="'/news/detail'" class="btn-border">了解更多</router-link>
                            </div>
                            <div class="news-content">
                                <div class="news-info">
                                    <span class="text-black text-size-1">{{item.date}}</span>
                                    <span class="text-orange text-size-1">{{item.category}}</span>
                                </div>
                                <a class="news-title" :href="item.link" v-html="item.title"></a>
                            </div>
                        </div>
                    </div>
                    <div class="block-list center flex-column justify-content-between">
                        <div
                            class="news-item d-flex flex-column h-100 w-100"
                            v-if="newsCategories[newsIndex] == newsItems[viewIndex+2].category || newsIndex == 0"
                        >
                            <div class="news-head d-flex align-items-center justify-content-center position-relative" :style="'background-image: url(' + newsItems[viewIndex+2].background + ')'">
                                <router-link :to="'/news/detail'" class="btn-border">了解更多</router-link>
                            </div>
                            <div class="news-content">
                                <div class="news-info">
                                    <span class="text-black text-size-1">{{newsItems[viewIndex+2].date}}</span>
                                    <span class="text-orange text-size-1">{{newsItems[viewIndex+2].category}}</span>
                                </div>

                                    <a class="news-title" :href="newsItems[viewIndex+2].link" v-html="newsItems[viewIndex+2].title"></a>
                                    <p class="mt-3">
                                        {{newsItems[viewIndex+2].intro}}
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div class="block-list beside flex-column justify-content-between">
                        <div class="news-item"
                             v-for="(item, $index) in newsItems.slice(viewIndex + 3, viewIndex + 5)"
                             :key="$index"
                             v-if="newsCategories[newsIndex] == item.category || newsIndex == 0"
                        >
                            <div class="news-head d-flex align-items-center justify-content-center position-relative" :style="'background-image: url(' + item.background + ')'">
                                <router-link :to="'/news/detail/1'" class="btn-border">了解更多</router-link>
                            </div>
                            <div class="news-content">
                                <div class="news-info">
                                    <span class="text-black text-size-1">{{item.date}}</span>
                                    <span class="text-orange text-size-1">{{item.category}}</span>
                                </div>
                                <a class="news-title" :href="item.link" v-html="item.title"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </transition-group>
    </div>
</template>

<script>
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
                    link: '/',
                    feature: true,
                },
                {
                    background: '/images/news_v3.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '橘色公告－員工旅遊<br>謝謝辛勤付出的每一位夥伴<br>2018/05/20(日)',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/',
                    feature: false,
                },
                {
                    background: '/images/news_v5.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/',
                    feature: false,
                },
                {
                    background: '/images/news_v2.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限 ',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/',
                    feature: false,
                },
                {
                    background: '/images/news_v4.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/',
                    feature: false,
                },
                {
                    background: '/images/news_v1.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/',
                    feature: false,
                },
                {
                    background: '/images/news_v2.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
	                title: '橘色公告－員工旅遊<br>謝謝辛勤付出的每一位夥伴<br>2018/05/20(日)～2018/05/24(四)<br>員工旅遊 暫停營業',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/',
                    feature: false,
                },
                {
                    background: '/images/news_v3.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/',
                    feature: false,
                },
                {
                    background: '/images/news_v4.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/',
                    feature: false,
                },
                {
                    background: '/images/news_v5.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/',
                    feature: false,
                },
            ],
            newsCategories: ['全部新訊','橘色涮涮屋','Extension 1 by 橘色'],
            newsIndex: 0,
            viewIndex: 0,
        }
    },
    methods: {

    }
}
</script>

<style lang="sass">

#block-news
    .fp-tableCell
        height: auto !important
    >div
        z-index: 3
        position: relative
    .news-list
        transition: all .5s
        .block-list
            width: 20%
            &.center
                width: 50%

@media only screen and (max-width: 991px)
    .section-pd
        padding: 0
    #app 
        #block-news
            padding: 80px 0px
            .main-title 
                .text-orange
                    color: #f26e22 !important
            .news-categories
                margin-top: 0 !important
                display: none !important
            .news-list 
                .block-list
                    width: auto
                    &:last-child
                        display: none
                    &.beside
                        .news-item
                            flex: 1
                            &:first-child
                                margin-right: 5px
                            &:last-child
                                margin-left: 5px

</style>
