<template>
    <div id="block-map-body"  v-if="mapItems[brand]">    
        <div class="map-list container">
            <div class="row d-flex justify-content-between ">
                <div 
                    class="map-item"
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
        </div>
        <div class="map-iframe">
            <iframe class="w-100" height="450" :src="'https://www.google.com/maps/embed/v1/search?&key=AIzaSyD-Yjh575xmaPu3O-gBx_kk4AZ1Nyx_GjI&q='+mapItems[brand][mapIndex].address"></iframe>
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
                            title: '橘色涮涮屋一館',
                            address: '106台北市大安區大安路一段135號',
                            infos: '+886 2 8780 59559<br>service@group.com'
                        },
                        {
                            title: '橘色涮涮屋二館',
                            address: '106台北市大安區仁愛路四段29-2號',
                            infos: '+886 2 8780 59559<br>service@group.com'
                        },
                        {
                            title: '橘色涮涮屋新光A9旗艦',
                            address: '110台北市信義區松壽路9號5樓',
                            infos: '+886 2 8780 59559<br>service@group.com'
                        }
                    ],
                },
                mapIndex: 0,
            }
        },
        methods: {

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
                max-width: calc(100%/3)
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
</style>
