<template>
    <div class="header-swiper">
        <swiper :options="swiperOption1">
            <swiper-slide v-for="(item, index) in swiperList" :key="index">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination sw1" slot="pagination"></div>         
        </swiper>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                swiperList: [
                    {
                        name: 'swiperSlide1',
                        imgUrl: require('@/assets/slide/s1.jpeg')
                    },
                    {
                        name: 'swiperSlide2',
                        imgUrl: require('@/assets/slide/s2.jpeg')
                    },
                    {
                        name: 'swiperSlide3',
                        imgUrl: require('@/assets/slide/s3.jpeg')
                    },
                    {
                        name: 'swiperSlide4',
                        imgUrl: require('@/assets/slide/s4.jpeg')
                    }
                ],
                swiperOption1: {
                    pagination: {
                        el: '.sw1',
                        clickable:true
                    },
                    autoplay: {
                        disableOnInteraction: true
                    },
                    loop: true
                }
            }
        }
    }
</script>

<style type="text/css" scoped>
    .header-swiper{
        height: 0;
        padding-bottom: 30.6%;
        background: #fff;
    }
    .swiper-img{
        height: 100%;
        width: 100%;
    }
    .header-swiper >>> .swiper-pagination-bullet-active{
        background: #fff;
    }
</style>
