<template>
    <div id="block-map-body"  v-if="mapItems[brand]" :class="brand">    
        <div class="map-list container">
            <div class="row d-flex justify-content-center ">
                <div 
                    class="map-item d-none d-md-block"
                    :class="{active : (mapIndex == $index) || (mapIndex > mapItems[brand].length && $index == 0)}"
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
            <!-- <iframe class="w-100" height="560" :src="'https://www.google.com/maps/embed/v1/search?&key=AIzaSyD-Yjh575xmaPu3O-gBx_kk4AZ1Nyx_GjI&q='+mapItems[brand][mapIndex].address"></iframe> -->
            <GmapMap v-if="brand == 'shabu'" ref="mapRef" :center="mapItems[brand][mapIndex].center" :zoom="14" style="width: 100%; height: 560px" :option="mapoption">
                <GmapMarker icon="/images/marker.png" :position="mapItems[brand][mapIndex].center" :clickable="false" :draggable="false"></GmapMarker>
            </GmapMap>
            
            <GmapMap v-else ref="mapRef" :center="mapItems[brand][0].center" :zoom="14" style="width: 100%; height: 560px" :option="mapoption">
                <GmapMarker icon="/images/marker.png" :position="mapItems[brand][0].center" :clickable="false" :draggable="false"></GmapMarker>
            </GmapMap>
        </div>
    </div>
</template>
<script>
    export default {
        data: function() {
            return{
                mapoption:{
                    zoomControl: false,
                    mapTypeControl: false,
                    streetViewControl: false
                },
                mapItems: {
                    ['shabu']: [
                        {
                            title: '橘色一館',
                            address: '106台北市大安區大安路一段135號',
                            infos: '+886 2 8780 59559<br>service@group.com',
                            center: {
                                lat: 25.038750, 
                                lng: 121.546168,
                            },
                        },
                        {
                            title: '橘色二館',
                            address: '106台北市大安區仁愛路四段29-2號',
                            infos: '+886 2 8780 59559<br>service@group.com',
                            center: {
                                lat: 25.038510, 
                                lng: 121.545324,
                            },
                        },
                        {
                            title: '新光A9旗艦',
                            address: '110台北市信義區松壽路9號5樓',
                            infos: '+886 2 8780 59559<br>service@group.com',
                            center: {
                                lat: 25.036681, 
                                lng: 121.566699,
                            },
                        }
                    ],
                    ['extension_1']: [
                        {
                            title: 'Extension 1 by 橘色',
                            address: '11492台北市內湖區瑞光路631號1樓',
                            infos: '+886 2 8780 59559<br>service@group.com',
                            center: {
                                lat: 25.036865,
                                lng: 121.567281,
                            },
                        }
                    ],
                    ['m_one_cafe']: [
                        {
                            title: 'M One Cafe',
                            address: '106台北市大安區仁愛路四段27巷6-1號',
                            infos: '+886 2 8780 59559<br>service@group.com',
                            center: {
                                lat: 25.038892,
                                lng: 121.545126,
                            },
                        }
                    ],
                    ['m_one_spa']: [
                        {
                            title: 'M One Spa',
                            address: '106台北市大安區仁愛路四段27巷6-1號B1',
                            infos: '+886 2 8780 59559<br>service@group.com',
                            center: {
                                lat: 25.038880, 
                                lng: 121.545117,
                            },
                        }
                    ],
                    ['sakura_spa']: [
                        {
                            title: 'SAKURA SPA',
                            address: '106台北市大安區仁愛路四段110號',
                            infos: '+886 2 8780 59559<br>service@group.com',
                            center: {
                                lat: 25.037052, 
                                lng: 121.549363,
                            },
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
            },
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
        #block-map-body 
            &:not(.shabu)
                .map-list 
                    .el-tabs__nav-wrap 
                        .el-tabs__active-bar
                            width: 100% !important
            .map-list
                padding: 0 38px !important
                margin-bottom: 20px !important
                .el-tabs__nav-wrap
                    &:after
                        display: none
                    .el-tabs__item
                        font-size: 12px
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
                        text-align: center
                        left: 15px
                        &:before
                            content: ""
                            width: 1px
                            height: 18px
                            background-color: #f26c23
                            display: inline-block
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
