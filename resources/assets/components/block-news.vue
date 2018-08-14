<template>
    <div id="block-news" class="section text-black position-relative text-center">
        <div class="container position-relative m-auto section-pd">
            <div class="row flex-column align-items-center justify-content-center flex-nowrap">
                <h3 class="main-title text-uppercase"><span class="fs-inherit text-orange">橘色</span>新訊<br><span class="text-size-3 sub-title">events & news</span></h3>
                <div class="news-body w-100">
                    <div class="news-categories d-flex justify-content-center text-size-2 mt-5 mb-3">
                        <div v-for="(item,$index) in newsCategories" :key="$index" class="category-items mr-4 ml-4">{{item}}</div>
                    </div>
                    <div class="news-list d-flex flex-column flex-wrap align-items-center">
                        <div v-for="(item,$index) in newsItems" :key="$index" class="news-item" :class="$index%6 == 2 ? 'd-flex flex-column' : ''">
                            <div class="news-head d-flex align-items-center justify-content-center position-relative" :style="'background: url(' + item.background + ')'">
                                <router-link :to="'/'" class="btn-border">了解更多</router-link>
                            </div>
                            <div class="news-content">
                                <div>
                                    <span class="text-black text-size-1">{{item.date}}</span>
                                    <span class="text-orange text-size-1">{{item.category}}</span>
                                </div>
                                <a class="news-title" :href="item.link" v-html="item.title"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <router-link :to="'/'" class="btn-orange">更多橘色新訊</router-link>
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
                ],
                newsCategories: ['全部新訊','橘色涮涮屋','Extension 1 by 橘色','M One Cafe','M One Spa','Sakura Spa'],
                
            }
        }
}
</script>

<style lang="sass">
#block-news
    // height: auto !important
    // overflow: scroll
    // .fp-tableCell
    //     height: auto !important
    &:before ,  &:after 
        content: ""
        position: absolute
        width: 100%
        height: 400px
        left: 0
        top: 0
    &:before
        background-size: 25px 25px
        background-image: radial-gradient(#0000000d 20%, transparent 15%), radial-gradient(#0000000d 20%, transparent 20%)
        background-position: 10px 25px
    &:after 
        background: linear-gradient(transparent , white)
    >div
        z-index: 3
        position: relative
    .news-body
        .category-items
            cursor: pointer
            transition: all .3s
            &:hover
                color: #f26e22
        .news-list
            height: 1100px
            overflow: hidden
            .news-item
                width: 25%
                margin-bottom: 50px
                height: 500px
                max-height: 500px
                overflow: hidden
                &:nth-child(6n-3)
                    width: calc(50% - 60px)
                    margin: 0 30px 50px 30px
                    max-height: 1100px
                    height: 1100px
                    .news-head
                        height: auto
                        flex: 1
                .news-head
                    height: 350px
                    margin-bottom: 15px  
                    &:before
                        content: ""
                        background: #f26d23
                        position: absolute
                        width: 100%
                        height: 100%
                        opacity: 0
                        transition: all .3s
                    &:hover
                        &:before
                            opacity: 0.6
                        a
                            display: block
                    a
                        display: none
                        z-index: 2
                    .text-size-1
                        font-size: 13px !important
                .news-title
                    color: black
                    &:hover
                        color: #f26e22
    .btn-orange
        &:hover
            background: #f26d23
            color: white
</style>
