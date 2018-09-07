<template>
    <div id="block-breadcrumb" class="position-relative w-100 d-flex align-items-center justify-content-center" :style="'background-image:url('+img+')'">
        <div class="position-relative text-white pt-4 pt-lg-0">
            <h2 class="mb-2 mb-lg-4 banner-title" v-html="title"></h2>
            <el-breadcrumb  separator-class="el-icon-arrow-right">
                <el-breadcrumb-item class="text-white" :to="'/'">首頁</el-breadcrumb-item>
                <el-breadcrumb-item v-if="item.name && item.path !== '/'"
                                    v-for="(item,index)  in $route.matched" :key="item.meta.id"
                                    :class="[{'no-redirect': (index<$route.matched.length-1 && $route.matched[index+1].path == ($route.matched[index].path+'/')) || index==$route.matched.length-1 || $route.matched[index].redirect != undefined}]">

                    <span v-if="(index<$route.matched.length-1 && $route.matched[index+1].path == ($route.matched[index].path+'/')) || index==$route.matched.length-1 || $route.matched[index].redirect != undefined" class="no-redirect">
                        {{item.name}}
                    </span>
                    <router-link v-else :to="item.redirect||item.path">{{item.name}}</router-link>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>
<style lang="sass">   
    #block-breadcrumb
        background-repeat: no-repeat
        background-size: cover
        background-position: center
        height: 50vh
        &:before
            content: ""
            position: absolute
            width: 100%
            height: 100%
            background: rgba(0, 0, 0, 0.5)
            top: 0

        @media only screen and (max-width: 991px)
            height: 220px
            .banner-title
                font-size: 28px
                span
                    color: white !important
</style>
<script>
    export default {
        data: function() {
            return{

            }
        },
        methods: {

        },
        props: {
            title: {
                type: String,
                default: 'title',
            },
            img: {
                type: String,
                default: '/images/slideshow_1.jpg',
            },
        },
    }
</script>
