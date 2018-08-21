<template>
    <div>
        <div class="container" v-if="fields[brand]">
            <div class="row">
                <div id="contact-form-body" class="w-100">
                    <p class="contact-form-title mb-1" v-html="fields[brand].title"></p>
                    <p class="text-size-1 font-weight-bold">{{fields[brand].subtitle}}</p>
                    <form>
                        <div 
                            class="contact-form-field d-flex flex-column flex-wrap"
                        >
                            <div class="field-item field-user d-flex align-items-center position-relative">
                                <input placeholder="您的姓名">
                                <font-awesome-icon class="field-icon" :icon="['fal','user']" />
                            </div>
                            <div class="field-item field-envelop d-flex align-items-center position-relative">
                                <input placeholder="您的電子信箱">
                                <font-awesome-icon class="field-icon" :icon="['fal','envelope']" />
                            </div>
                            <div class="field-item field-phone d-flex align-items-center position-relative">
                                <input placeholder="您的電話">
                                <font-awesome-icon class="field-icon" :icon="['fal','phone']" />
                            </div>
                            <div class="field-item field-location d-flex align-items-center position-relative">
                                <input placeholder="欲聯繫的橘色分館">
                                <font-awesome-icon class="field-icon" :icon="['fal','map-marker']" />
                            </div>
                            <div class="field-item field-question d-flex align-items-center position-relative">
                                <input placeholder="欲詢問的問題類型">
                                <font-awesome-icon class="field-icon" :icon="['fal','question-circle']" />
                            </div>
                            <div class="field-item field-content d-flex align-items-center position-relative h-100">
                                <textarea placeholder="您的詢問內容"></textarea>
                                <font-awesome-icon class="field-icon" :icon="['fal','paper-plane']" />
                            </div>
                        </div>
                        <div class="mt-4 clearfix">
                            <span class="text-size-1 float-left text-gray w-50 pr-4">您所填寫的任何資料，我們都將遵循台灣隱私權相關法律規範，不提供與任何其他單位，請擔心提出您的問題，謝謝</span>
                            <input type="submit" value="發送訊息" class="btn-orange d-inline-block float-right">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div id="block-map">
            <block-map :brand="brand"></block-map>
        </div>
    </div>
</template>
<style lang="sass">   
    #contact-form
        #contact-form-body
            padding: 0 80px
            .field-item
                width: 50%
                .field-icon
                    position: absolute
                    top: 15px
                    &.fa-paper-plane
                        font-size: 60px
                        color: #f26c23
                        right: 0
                        top: -70px
        .contact-form-title
            font-size: 28px
        .contact-form-field
            height: 325px
            input , textarea
                width: calc(100% - 15px)
                border: none
                border-bottom: 1px solid #ccc
                padding: 10px 25px
                margin-bottom: 20px
                transition: all .3s
                &::placeholder
                    font-size: 12px
                &:focus
                    outline: none
                    border-bottom-color: #f26c23
                    &::placeholder
                        color: transparent
                        transition: all .3s
                    &+.field-icon
                        color: #f26c23
                &.btn-orange
                    font-size: 14px
                    padding: 10px 60px
                    box-shadow: 5px 5px 10px rgba(242, 108, 35, 0.3 )   
            textarea
                margin-left: 30px
                height: 100%
        form
            margin-bottom: 100px
                
</style>
<script>
    import BlockMap from 'components/block-map'

    export default {
        data: function() {
            return{
                fields:{
                    ['shabu']: {
                        title: '聯絡<span class="text-orange">橘色涮涮屋</span>',
                        subtitle: '隨時歡迎您與我們聯繫，無論是訂位餐飲或是任何其他相關問題，都可以提出詢問！',
                    },
                    ['extension_1']: {
                        title: '聯絡<span class="text-orange">Extension 1 By橘色</span>',
                        subtitle: '隨時歡迎您與我們聯繫，無論是訂位餐飲或是任何其他相關問題，都可以提出詢問！',                       
                    },     
                }
            }
        },
        components: {
            BlockMap,
        },
        props: {
            brand: {
                type: String,
                default: 'shabu',
            }
        },
    }
</script>
