<template>
    <div id="block-family">
        <slick
            ref="slick"
            :options="slickOptions">
            <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
            <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
            <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
            <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
            <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
        </slick>
    </div>
</template>

<script>
import MenuHeader from 'components/block-menu-header'
import BlockFooter from 'components/block-footer'
import Slick from 'vue-slick'

export default {
    data: function () {
        return {
            
            slickOptions: {
                slidesToShow: 3,
            },
            
        }
    },
    components: {
        MenuHeader,
        BlockFooter,
        Slick
    },
    methods: {
        
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },
        
    },
}
</script>

<style lang="sass">

</style>
