<template>
    <div class="icon">
        <swiper :options="swiperOption2" class="swiper-icon">
            <swiper-slide v-for="(item, index) in page" :key="index">
                <div class="icon-item" v-for="(icon, index) in item" :key="index">
                    <img :src="icon.iconImg" alt="">
                    <span>{{icon.title}}</span>
                </div>
            </swiper-slide>
            
        </swiper>
        <div class="swiper-pagination sw2" slot="pagination"></div> 
    </div>
</template>

<script>
    export default {
        data () {
            return {
                icons:[
                    {
                        id:'01',
                        iconImg: require('@/assets/icon/i1.png'),
                        title: '景点门票'
                    },
                    {
                        id:'02',
                        iconImg: require('@/assets/icon/i2.png'),
                        title: '度假'
                    },
                    {
                        id:'03',
                        iconImg: require('@/assets/icon/i3.png'),
                        title: '火车票'
                    },
                    {
                        id:'04',
                        iconImg: require('@/assets/icon/i4.png'),
                        title: '机票'
                    },
                    {
                        id:'05',
                        iconImg: require('@/assets/icon/i5.png'),
                        title: '酒店'
                    },
                    {
                        id:'06',
                        iconImg: require('@/assets/icon/i6.png'),
                        title: '海外酒店'
                    },
                    {
                        id:'07',
                        iconImg: require('@/assets/icon/i7.png'),
                        title: '低价机票'
                    },
                    {
                        id:'08',
                        iconImg: require('@/assets/icon/i8.png'),
                        title: '汽车票船票'
                    },
                    {
                        id:'09',
                        iconImg: require('@/assets/icon/i9.png'),
                        title: '自由行'
                    },
                    {
                        id:'10',
                        iconImg: require('@/assets/icon/i10.png'),
                        title: '攻略'
                    }
                ],
                swiperOption2: {
                    pagination: {
                        el: '.sw2',
                        clickable:true
                    },
                    autoplay: {
                        disableOnInteraction: false
                    },
                    loop: true
                }
            }
        },
        computed: {
            page() {
                let pages = []
                this.icons.forEach((item, index) => {
                    let idx = Math.floor(index / 8)
                    if (!pages[idx]) pages[idx] = []
                    pages[idx].push(item)
                })
                return pages
            }
        }
    }
</script>

<style>
    .icon{
        width: 100%;
        overflow: hidden;
        background: #fff;
        height: 0;
        padding-bottom: 60%;
        position: relative;
    }
    .icon-item{
        width: 25%;
        height: 0;
        padding-bottom: 25%;
        text-align: center;
        float: left;
    }
    .icon-item img{
        width: 1.1rem;
        height: 1.1rem;
        margin:  0 auto;
        text-align: center;
        padding-top: .2rem;
    }
    .icon-item span{
        font-size: .28rem;
        display: block;
        padding-top: .1rem;
        color: #212121;
    }
    .sw2{
        bottom: .16rem;
        width: 100%;
    }
    .swiper-pagination-bullet{
        margin-right: .16rem;
    }
</style>
