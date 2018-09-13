<template>
    <div id="breadcrumb">
        <el-breadcrumb separator-class="el-icon-d-arrow-right">
            <el-breadcrumb-item :to="'/'">首頁</el-breadcrumb-item>
            <el-breadcrumb-item v-if="item.name && item.path !== '/'"
                                v-for="(item,index)  in $route.matched" :key="item.meta.id"
                                :class="[{'no-redirect': (index<$route.matched.length-1 && $route.matched[index+1].path == ($route.matched[index].path+'/')) || index==$route.matched.length-1 || $route.matched[index].redirect != undefined}]">

                    <span v-if="(index<$route.matched.length-1 && $route.matched[index+1].path == ($route.matched[index].path+'/')) || index==$route.matched.length-1 || $route.matched[index].redirect != undefined" class="no-redirect">
            {{item.name}}
          </span>
                <!--<span v-if="item.redirect==='noredirect' || index==$route.matched.length-1" class="no-redirect">
                  {{item.name}}
                </span>-->
                <router-link v-else :to="item.redirect||item.path">{{item.name}}</router-link>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<style lang="sass" rel="stylesheet/sass">
    #breadcrumb
        line-height: 1.5em
        .el-breadcrumb__item
            text-transform: uppercase

            .el-breadcrumb__inner
                color: black
                font-weight: bold

            a, .is-link , .el-breadcrumb__separator
                color: #9e9891

            .el-breadcrumb__separator
                transform: scale(0.75)

            a , .is-link
                &:hover
                    color: black
                // .el-breadcrumb__separator::before
                //     content: "/"
                //     color: #000
</style>
<script>
	export default {
		data: function () {
			return {

			}
		},
		computed: {

		},
		created() {
		},
		mounted: function () {
			//console.log(this.$route.matched)
		},
		methods: {

		},
		components: {

		}
	}

</script>