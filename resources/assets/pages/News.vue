<template>
    <div id="block-news" class="position-relative">
        <banner title="<span class='text-orange'>橘色</span>新訊" img="/images/slideshow_1.jpg"></banner>
        <div id="header" class="position-absolute w-100">
            <div class="mt-5 d-flex w-100">
                <div class="logo">
                    <img class="position-relative" src="/images/index_logo.png">
                </div>
                <div id="main-menu" class="d-flex justify-content-end align-items-start">
                    <menu-header></menu-header>
                </div>
            </div>
        </div> 
        <div id="block-news-body" class="news-body position-relative">
            <div id="block-news-lists" class="position-relative">
                <div id="block-news-filter">
                    <div class="container">
                        <div class="news-categories row">
                            <div 
                                id="category-items"
                                v-for="(item,$index) in newsCategories" 
                                :key="$index" 
                                class="category-items mr-4 ml-4" 
                                :class="(newsIndex == $index) ? 'active' : ''"
                                @click="newsIndex = $index"
                            >
                                {{item}}
                            </div>
                            <div id="category-date">
                                <div class="filter-date -year">
                                    <el-dropdown trigger="click">
                                        <span class="el-dropdown-link">
                                            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item>黄金糕</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                                <div class="filter-date -month">
                                    <el-dropdown trigger="click">
                                        <span class="el-dropdown-link">
                                            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item>黄金糕</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
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
                                v-for="(item,$index) in newsItems"
                                :key="$index"    
                            >
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from 'components/block-banner'
import MenuHeader from 'components/block-menu-header'

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
        }
    },
    components: {
        Banner,
        MenuHeader,
    },
    methods: {
        loadMore(){
            this.viewIndex++;
            fullpage_api.reBuild();
        }
    }
}
</script>

<style lang="sass">
    #header
        top: 0
    #block-news-body
        &:before , &:after
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
            background: linear-gradient(transparent, white)
        #block-news-lists
            z-index: 2
    #block-breadcrumb
        .banner-title
            font-size: 90px
            font-weight: 300
</style>
