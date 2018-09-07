<template>
    <div id="block-map-body"  v-if="mapItems[brand]">    
        <div class="map-list container">
            <div class="row d-flex justify-content-between ">
                <div 
                    class="map-item d-none d-md-block"
                    :class="mapIndex == $index ? 'active' : ''"
                    v-for="(item,$index) in mapItems[brand]"
                    :key="$index"
                    @click="mapIndex = $index"
                >
                    <p class="map-title">
                        <font-awesome-icon :icon="['fal','map-marker-alt']" />
                        <span class="text-orange">{{item.title}}</span>    
                    </p>
                    <p class="map-address font-weight-bold text-size-1">{{item.address}}</p>
                    <p class="map-infos text-gray text-size-1" v-html="item.infos"></p>
                </div>
            </div>
            <el-tabs 
                class="d-block d-md-none"
                @tab-click="tabMap"
            >
                <el-tab-pane 
                    v-for="(item,$index) in mapItems[brand]"
                    :key="$index"
                    :label="item.title" 
                >
                    <p class="map-address font-weight-bold text-size-1">{{item.address}}</p>
                    <p class="map-infos text-gray text-size-1" v-html="item.infos"></p>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="map-iframe">
            <iframe class="w-100" height="560" :src="'https://www.google.com/maps/embed/v1/search?&key=AIzaSyD-Yjh575xmaPu3O-gBx_kk4AZ1Nyx_GjI&q='+mapItems[brand][mapIndex].address"></iframe>
        </div>
    </div>
</template>
<script>
    export default {
        data: function() {
            return{
                mapItems: {
                    ['shabu']: [
                        {
                            title: '橘色一館',
                            address: '106台北市大安區大安路一段135號',
                            infos: '+886 2 8780 59559<br>service@group.com'
                        },
                        {
                            title: '橘色二館',
                            address: '106台北市大安區仁愛路四段29-2號',
                            infos: '+886 2 8780 59559<br>service@group.com'
                        },
                        {
                            title: '新光A9旗艦',
                            address: '110台北市信義區松壽路9號5樓',
                            infos: '+886 2 8780 59559<br>service@group.com'
                        }
                    ],
                },
                mapIndex: 0,
            }
        },
        methods: {
            tabMap(e){
                this.mapIndex = e.index;
            }
        },
        props: {
            brand: {
                type: String,
                default: 'shabu'
            }
        },
    }
</script>

<style lang="sass">   
    #block-map
        .map-list
            margin-bottom: 80px
            padding: 0 80px
            .map-item
                width: calc(100%/3)
                padding: 20px
                .map-title
                    font-size: 20px
                .map-address
                    &:after
                        content: ""
                        display: block
                        width: 50px
                        height: 1px
                        background: #f26c23
                        margin-top: 16px
                &:hover , &.active
                    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.1)
                    transition: all .3s
                    cursor: pointer
        .map-iframe
            border: none
            iframe
                display: block
                border: none

    @media only screen and (max-width: 991px)
        .map-list
            padding: 0 38px !important
            margin-bottom: 20px !important
            .el-tabs__nav-wrap
                &:after
                    display: none
                .el-tabs__item
                    font-size: 12px
                    &.is-active
                        color: #f26c23
                .el-tabs__nav-scroll
                    height: 65px
                    .el-tabs__nav
                        float: none
                        text-align: center
                .el-tabs__active-bar
                    background-color: #f26c23
                    height: 1px
                    bottom: 5px
                    left: 15px
                    &:before , &:after
                        content: ""
                        position: absolute
                        top: 0
                        background: #ef803a
                        left: 50%
                    &:before
                        width: 1px
                        height: 18px
                    &:after
                        border-radius: 100%
                        top: 20px
                        left: 50%
                        transform: translate(-50% , -50%)   
                        width: 3px
                        height: 3px
            .el-tabs__content
                text-align: center
                p
                    margin: 0
                    font-size: 12px !important
                    font-weight: 400 !important
                    line-height: 20px
                    color: #ef803a !important
            .el-tabs__header
                margin-bottom: 0

        .map-iframe
            margin-bottom: 50px
            iframe
                height: 180px
                padding: 0 38px

</style>
