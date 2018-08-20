<template>
    <div id="block-news">
        
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            
        }
    },
    component: {

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

</style>
