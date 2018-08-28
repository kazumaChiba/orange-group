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
            </div>
        </div>
        <transition-group
            name="fade"
            tag="div"
            class="news-list d-flex flex-column flex-wrap align-items-center">-->
            <div
                class="news-list d-flex justify-content-between w-100"
                v-for="(n,$groupIndex) in viewIndex+1"
                :key="$groupIndex">
                    <div class="block-list beside d-flex flex-column justify-content-between">
                        <div
                                class="news-item"
                                v-for="(item,$index) in newsItems.slice(viewIndex,viewIndex+2)"
                                :key="$index + 'a'"
                        >
                            <div class="news-head d-flex align-items-center justify-content-center position-relative" :style="'background-image: url(' + item.background + ')'">
                                <router-link :to="'/'" class="btn-border">了解更多</router-link>
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
                    <div class="block-list center d-flex flex-column justify-content-between">
                        <div
                                class="news-item d-flex flex-column h-100 w-100"
                        >
                            <div class="news-head d-flex align-items-center justify-content-center position-relative" :style="'background-image: url(' + newsItems[viewIndex+2].background + ')'">
                                <router-link :to="'/'" class="btn-border">了解更多</router-link>
                            </div>
                            <div class="news-content">
                                <div class="news-info">
                                    <span class="text-black text-size-1">{{newsItems[viewIndex+2].date}}</span>
                                    <span class="text-orange text-size-1">{{newsItems[viewIndex+2].category}}</span>
                                </div>
                                <a class="news-title" :href="newsItems[viewIndex+2].link" v-html="newsItems[viewIndex+2].title"></a>
                            </div>
                        </div>
                    </div>
                    <div class="block-list beside d-flex flex-column justify-content-between">
                        <div class="news-item"
                             v-for="(item, $index) in newsItems.slice(viewIndex + 3, viewIndex + 5)"
                             :key="$index"
                        >
                            <div class="news-head d-flex align-items-center justify-content-center position-relative" :style="'background-image: url(' + item.background + ')'">
                                <router-link :to="'/'" class="btn-border">了解更多</router-link>
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
                    background: '/images/bg_brand_1.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/'
                },
                {
                    background: '/images/bg_brand_1.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/'
                },
                {
                    background: '/images/bg_brand_1.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/'
                },
                {
                    background: '/images/bg_brand_1.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限 ',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/'
                },
                {
                    background: '/images/bg_brand_1.png',
                    date: '2018/3/21',
                    category: '橘色涮涮屋',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/'
                },
                {
                    background: '/images/bg_brand_1.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/'
                },
                {
                    background: '/images/bg_brand_1.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/'
                },
                {
                    background: '/images/bg_brand_1.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/'
                },
                {
                    background: '/images/bg_brand_1.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/'
                },
                {
                    background: '/images/bg_brand_1.png',
                    date: '2018/3/21',
                    category: 'Extension 1 by 橘色',
                    title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                    intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                    link: '/'
                },
            ],
            newsCategories: ['全部新訊','橘色涮涮屋','Extension 1 by 橘色','M One Cafe','M One Spa','Sakura Spa'],
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
    height: 100vh
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
</style>
