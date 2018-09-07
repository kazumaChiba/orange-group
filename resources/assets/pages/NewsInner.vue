<template>
    <div id="block-news-item" class="bg-black-cover position-relative" :style="'background-image:url(/images/bg_brand_1.png)'"> 
        <div class="text-white align-items-end d-flex position-relative">
            <div class="container">
                <div class="row">
                    <div class="news-item-head flex-column position-relative w-100">
                        <h2 class="news-item-title">新光三越旗艦店開幕<br>全店享九折優惠</h2>
                        <div class="news-item-info d-flex flex-column flex-lg-row">
                            <div class="news-info -date d-flex flex-column mr-5">
                                <span class="info-title">發佈日期：</span>
                                <span class="info-text">2018/3/21</span>
                            </div>
                            <div class="news-info -group d-flex flex-column mr-5">
                                <span class="info-title">發佈單位：</span>
                                <span class="info-text text-orange">橘色涮涮屋</span>
                            </div>
                            <div class="news-info -cate d-flex flex-column mr-5">
                                <span class="info-title">發佈類別：</span>
                                <span class="info-text">最新消息</span>
                            </div>
                        </div>
                        <div class="news-play text-white">
                            <span class="btn-play d-inline-flex align-items-center">播放媒體影音</span>
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
                        <div class="item-news-foot w-100 d-flex justify-content-between flex-column flex-lg-row">
                            <div class="item-tags-list">
                                <span class="item-tag">橘色涮涮屋</span>
                                <span class="item-tag">新店</span>
                                <span class="item-tag">新光三越</span>
                            </div>
                            <div class="item-social-list d-flex">
                                <span class="d-inline-flex align-items-center mr-3">社群分享</span>
                                <div class="item-social">
                                    <a class="social-icons facebook d-inline-flex align-items-center justify-content-center" href="#"><font-awesome-icon :icon="['fab','facebook-f']" /></a>
                                    <a class="social-icons twitter d-inline-flex align-items-center justify-content-center" href="#"><font-awesome-icon :icon="['fab','twitter']" /></a>
                                    <a class="social-icons google d-inline-flex align-items-center justify-content-center" href="#"><font-awesome-icon :icon="['fab','google']" /></a>
                                    <a class="social-icons linkedin-in d-inline-flex align-items-center justify-content-center" href="#"><font-awesome-icon :icon="['fab','linkedin-in']" /></a>
                                </div>
                            </div>
                        </div>
                        <div class="item-relatives w-100 d-flex justify-content-between">
                            <div class="item-relative -pre text-left">
                                <span class="title-relative">上一則訊息</span>
                                <a class="position-relative" href="#">消息標題文字</a>
                            </div>
                            <div class="item-relative -next text-right">
                                <span class="title-relative">下一則訊息</span>
                                <a class="position-relative" href="#">消息標題文字</a>
                            </div>
                        </div>
                    </div>
                </div>
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
            
        }
    },
    components: {
        MenuHeader,
        BlockFooter,
    },
    watch: {
        $route(to, from) {
            this.init();
        }
    }
}
</script>

<style lang="sass">

    #block-news-item
        height: 95vh
        .news-item-head
            margin-top: 25vh
            .news-item-title
                font-size: 60px
                margin-bottom: 70px
            .news-item-info
                margin-bottom: 50px
                .info-title
                    font-size: 13px
                    color: #b3b3b3
      
        .item-news-body
            background: white
            color: black
            margin-top: 30px
            .item-relatives
                margin: 45px 0
                .item-relative
                    &.-pre
                        padding-left: 30px
                        a
                            &:before
                                right: auto
                                left: -25px
                                transform: rotate(180deg)
                    &.-next
                        padding-right: 30px
                    a
                        &:before
                            content: "➔"
                            position: absolute
                            top: 0
                            right: -25px
                    
                .title-relative
                    font-size: 13px
                    color: gray
                a
                    display: block
                    color: black
                    margin-top: 5px
                    &:hover
                        color: #f36f1b
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
            .item-social-list
                span
                    font-size: 13px
                    color: gray
            .item-tags-list
                .item-tag
                    border: 1px solid #ccc
                    color: gray
                    padding: 5px 15px
                    font-size: 12px
                    margin-right: 5px
                    &:hover
                        border-color: #f26d23
                        color: #f26d23
                        transition: all .3s
                        cursor: pointer
            .item-social
                .social-icons
                    width: 30px
                    height: 30px
                    border-radius: 100%
                    &:hover
                        color: white
                    &.facebook
                        background-color: #3b5999
                    &.twitter
                        background-color: #53acee
                    &.google
                        background-color: #dd4a3a
                    &.linkedin-in
                        background-color: #0076b4
        .el-breadcrumb
            justify-content: left

        @media only screen and (max-width: 991px)    
            .news-item-head 
                margin-top: 120px
                .news-item-title
                    margin-bottom: 20px
                    font-size: 32px
                .news-item-info
                    margin-bottom: 20px
                    .news-info
                        margin-bottom: 10px
                .btn-play
                    margin-bottom: 40px

            .item-news-body 
                .item-news-content
                    padding: 0 25px
                    p
                        line-height: 25px
                    .text-big-orange , .text-intro-title
                        font-size: 20px
                        padding: 10px 0
                .item-tags-list
                    margin-bottom: 30px
</style>
