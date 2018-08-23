<template>
    <div id="block-family">
        
    </div>
</template>

<script>
import MenuHeader from 'components/block-menu-header'
import BlockFooter from 'components/block-footer'
//import Slick from 'vue-slick'

export default {
    data: function () {
        return {
            /*
            slickOptions: {
                slidesToShow: 3,
            },
            */
        }
    },
    component: {
        MenuHeader,
        BlockFooter
    },
    methods: {
        /*
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },
        */
    },
}
</script>

<style lang="sass">
@import url('node_modules/slick-carousel/slick/slick.css')
</style>
