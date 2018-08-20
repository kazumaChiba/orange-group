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
                            v-html="fields[brand].content" 
                        >
                        </div>
                        <div class="mt-4 clearfix">
                            <span class="text-size-1 w-25 float-left text-gray">您所填寫的任何資料，我們都將遵循台灣隱私權相關法律規範，不提供與任何其他單位，請擔心提出您的問題，謝謝</span>
                            <input type="submit" value="發送訊息" class="btn-orange w-50 d-inline-block float-right">
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
        .contact-form-title
            font-size: 28px
        .contact-form-field
            height: 325px
            input , textarea
                width: calc(50% - 15px)
                border: none
                border-bottom: 1px solid #ccc
                padding: 10px 0
                margin-bottom: 20px
                transition: all .3s
                &::placeholder
                    font-size: 14px
                &:focus
                    outline: none
                    border-bottom-color: #f26c23
                    &::placeholder
                        color: transparent
                        transition: all .3s
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
                        content:
                                '<input placeholder="您的姓名">'+
                                '<input placeholder="您的電子信箱">'+
                                '<input placeholder="您的電話">'+
                                '<input placeholder="欲聯繫的橘色分館">'+
                                '<input placeholder="欲詢問的問題類型">'+
                                '<textarea placeholder="您的詢問內容"></textarea>',
                        
                    },
                    ['extension_1']: {
                        title: '聯絡<span class="text-orange">Extension 1 By橘色</span>',
                        subtitle: '隨時歡迎您與我們聯繫，無論是訂位餐飲或是任何其他相關問題，都可以提出詢問！',
                        content:
                                '<input placeholder="您的姓名">'+
                                '<input placeholder="您的電子信箱">'+
                                '<input placeholder="您的電話">'+
                                '<input placeholder="欲聯繫的extension 1分館">'+
                                '<input placeholder="欲詢問的問題類型">'+
                                '<textarea placeholder="您的詢問內容"></textarea>',
                        
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
