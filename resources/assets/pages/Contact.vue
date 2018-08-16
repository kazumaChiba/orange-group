<template>
    <div id="block-contact">
        <banner title="聯絡<span class='text-orange'>我們</span>" img="/images/slideshow_1.jpg"></banner>
        <div id="header">
            <div class="mt-5 d-flex position-fixed w-100">
                <div class="logo">
                    <img src="/images/index_logo.png">
                </div>
                <div id="main-menu" class="d-flex justify-content-end align-items-start">
                    <menu-header></menu-header>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import MenuHeader from 'components/block-header-menu'
import Banner from 'components/block-banner'

export default {
    data: function () {
        return {

        }
    },
    components: {
        MenuHeader,
        Banner,
    },
}
</script>

<style lang="sass">

</style>
