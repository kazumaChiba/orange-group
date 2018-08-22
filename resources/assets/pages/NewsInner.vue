<template>
    <div id="block-news-item" class="bg-black-cover position-relative" :style="'background-image:url(/images/bg_brand_1.png)'">
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
        <div class="text-white align-items-end d-flex position-relative">
            <div class="container">
                <div class="row">
                    <div class="news-item-head flex-column position-relative w-100">
                        <h2 class="news-item-title">新光三越旗艦店開幕<br>全店享九折優惠</h2>
                        <div class="news-item-info d-flex">
                            <div class="news-info -date d-flex flex-column mr-5">
                                <span class="info-title">發佈日期</span>
                                <span class="info-text">2018/3/21</span>
                            </div>
                            <div class="news-info -group d-flex flex-column mr-5">
                                <span class="info-title">發佈單位</span>
                                <span class="info-text text-orange">橘色涮涮屋</span>
                            </div>
                            <div class="news-info -cate d-flex flex-column mr-5">
                                <span class="info-title">發佈類別</span>
                                <span class="info-text">最新消息</span>
                            </div>
                        </div>
                        <div class="news-item-breadcrumb">
                            <el-breadcrumb  separator-class="el-icon-arrow-right">
                                <el-breadcrumb-item class="text-white" :to="'/'">首頁</el-breadcrumb-item>
                                <el-breadcrumb-item v-if="item.name && item.path !== '/'"
                                                    v-for="(item,index)  in $route.matched" :key="item.meta.id"
                                                    :class="[{'no-redirect': (index<$route.matched.length-1 && $route.matched[index+1].path == ($route.matched[index].path+'/')) || index==$route.matched.length-1 || $route.matched[index].redirect != undefined}]">

                                    <span v-if="(index<$route.matched.length-1 && $route.matched[index+1].path == ($route.matched[index].path+'/')) || index==$route.matched.length-1 || $route.matched[index].redirect != undefined" class="no-redirect text-white">
                                        {{item.name}}
                                    </span>
                                    <router-link v-else :to="item.redirect||item.path">{{item.name}}</router-link>
                                </el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                    </div>
                    <div class="item-news-body w-100">
                        <div class="item-news-content">
                            <p class="item-intro-text">測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱</p>
                            <h3 class="text-big-orange">”用心。貼心。安心，打造最美好的火鍋體驗“</h3>
                            <p class="text-intro-small text-center">橘色創辦人 袁永定</p>
                            <p>測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>
                            <h3 class="text-intro-title">測試描述標題文字</h3>
                            <p>測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>
                            <img class="img-fullwidth" src="/images/slideshow_1.jpg" />
                            <p class="text-center text-img">測試描述文字測試描述文字測試描述文字測試描述</p>
                            <h3 class="text-intro-title">測試描述標題文字</h3>
                            <p>測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>
                            <img src="/images/bg_brand_1.png">
                            <img src="/images/bg_food_1.png">
                            <h3 class="text-intro-title">測試描述標題文字</h3>
                            <p>測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>
                        </div>
                        <div class="item-news-foot w-100 d-flex justify-content-between">
                            <div class="item-tags-list">
                                <span class="item-tag">橘色涮涮屋</span>
                                <span class="item-tag">新店</span>
                                <span class="item-tag">新光三越</span>
                            </div>
                            <div class="item-social-list">
                                <span>社群分享</span>
                                <div class="item-social">

                                </div>
                            </div>
                        </div>
                        <div class="item-relatives w-100 d-flex justify-content-between">
                            <div class="item-relative -pre">
                                <span>上一則訊息</span>
                                <p>消息標題文字</p>
                            </div>
                            <div class="item-relative -next">
                                <span>下一則訊息</span>
                                <p>消息標題文字</p>
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
import BlockFooter from 'components/block-footer'

export default {
    data: function () {
        return {
            
        }
    },
    components: {
        MenuHeader,
        BlockFooter,
    },
}
</script>

<style lang="sass">
    #block-news-item
        height: 110vh
        .news-item-head
            margin-top: 60vh
            .news-item-title
                font-size: 60px
                margin-bottom: 70px
            .news-item-info
                margin-bottom: 70px
        .item-news-body
            background: white
            color: black
            margin-top: 30px
            .item-intro-text
                font-size: 22px
                line-height: 35px
            .item-news-content
                line-height: 28px
                padding: 100px 180px
                p , span , ul
                    margin: 30px 0
                    font-size: 15px
                    font-weight: 500
                img
                    width: 100%
                    margin: 30px 0px 20px 0
                .text-img
                    margin-top: 0
                    font-size: 18px
                .text-big-orange
                    font-size: 38px
                    color: #f26e22
                    text-align: center
                    padding: 40px 0
                    margin: 15px 0
                    position: relative
                    &:after
                        content: ""
                        width: 30px
                        height: 1px
                        background: #f26e22
                        position: absolute
                        bottom: 0
                        left: calc(50% - 15px)
                .text-intro-small
                    font-size: 14px
                    font-weight: 600
                .text-intro-title
                    font-size: 33px
                    color: #f26e22
                    padding: 20px 0
                    margin: 15px 0
        .item-news-foot
            padding-bottom: 30px
            margin-bottom: 30px
            border-bottom: 1px solid #ccc
            .item-tags-list
                .item-tag
                    border: 1px solid #ccc
                    color: #ccc
                    padding: 5px
                    font-size: 12px
                    margin-right: 5px
                    &:hover
                        border-color: #f26d23
                        color: #f26d23
                        transition: all .3s
                        cursor: pointer
        

</style>
