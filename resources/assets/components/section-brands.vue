<template>
    <div id="block-brands" class="section text-white position-relative text-center bg-black-cover" :style="'background: url(' + brandBg[brandIndex].background + ')'">
        <div class="container position-relative m-auto h-100 ">
            <div class="row h-100 flex-column align-items-center justify-content-center">
                <h3 class="main-title text-uppercase"><span class="fs-inherit text-orange">橘色</span>版圖<br><span class="text-size-3 sub-title">orange brands</span></h3>
                <div class="content-brands d-flex align-items-center justify-content-between w-100 mt-5 mb-5">
                    <span class="btn-orange"  @click="brandIndex = 0; startAnimate('500')">橘色涮涮屋</span>
                    <div class="info-brands border-radius-100 d-flex flex-column justify-content-center text-left">
                        <p :class="{'fade' : addTransition}">{{brandBg[brandIndex].title}}</p>
                        <div class="d-flex text-size-3" :class="{'fade' : addTransition}">
                            <router-link :to="brandBg[brandIndex].contact" class="brands-link">聯絡我們</router-link>
                            <span>・</span>
                            <router-link :to="brandBg[brandIndex].book" class="brands-link">線上訂位</router-link>
                        </div>
                    </div>
                    <span class="btn-orange" @click="brandIndex = 1; startAnimate('500')">M One Cafe</span>
                </div>
                <p class="text-brands" v-html="brandBg[brandIndex].text" :class="{'fade' : addTransition}"></p>
            </div>
        </div>
    </div> 
<template>

