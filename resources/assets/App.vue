<template>
    <div id="app">
        <div 
            v-if="$route.path != '/'" 
            id="header" 
            class="w-100"
        >
            <div class="d-flex w-100">
                <div class="logo">
                    <img class="position-relative" src="/images/index_logo.png">
                </div>
                <div id="main-menu" class="d-flex justify-content-end align-items-center">
                    <menu-header></menu-header>
                </div>
            </div>
        </div> 
        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue'
import MenuHeader from 'components/block-menu-header'

export default {
    name: "app",
    mounted: function () {

    },
    methods:{

    },
    components: {
        MenuHeader,
    },
    mounted: function() {
        jQuery(document).ready(function(){
            jQuery(window).scroll(function(){
                if(jQuery(window).scrollTop() > 0){
                    jQuery("#header").addClass("position-fixed");
                }
                else{
                    jQuery("#header").removeClass("position-fixed");
                }
            });
        });
    },
};
</script>
