<template>
    <div class="hot">
        <div class="hot-top">
            <img src="../../assets/fire/fire.jpg" alt="">
            <span class="top-left">本周热门榜单</span>
            <span class="top-right">全部榜单 ></span>
        </div>
        <ul class="hot-list">
            <li class="hot-item" v-for="(item, index) in hotPlaces" :key="index">
                <img :src="item.imgUrl" alt="">
                <p>
                    {{item.title}}
                </p>
                <p>
                    <span class="hot-mark">￥{{item.price}}</span>
                    起
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                hotPlaces: [
                    {
                        imgUrl: require('@/assets/hot/hot1.jpg'),
                        title: '拉萨',
                        price: '20'
                    },
                    {
                        imgUrl: require('@/assets/hot/hot2.jpg'),
                        title: '成都',
                        price: '20'
                    },
                    {
                        imgUrl: require('@/assets/hot/hot3.jpg'),
                        title: '长白山',
                        price: '20'
                    },
                    {
                        imgUrl: require('@/assets/hot/hot4.jpg'),
                        title: '三亚',
                        price: '20'
                    },
                    {
                        imgUrl: require('@/assets/hot/hot5.jpg'),
                        title: '西双版纳',
                        price: '20'
                    },
                    {
                        imgUrl: require('@/assets/hot/hot6.jpg'),
                        title: '昆明',
                        price: '20'
                    },
                    {
                        imgUrl: require('@/assets/hot/hot8.jpg'),
                        title: '哈尔滨',
                        price: '20'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="stylus">
@import '~css/common.styl'
    .hot{
        margin-top: .2rem;
        font-size: .28rem;
        background: #fff;
        height: 4.3rem;
    }
    .hot-top{
        padding-top: .2rem;
        position: relative;
        font-size: .32rem;        
    }
    .hot-top img{
        height: .38rem;
        width: .38rem;
        vertical-align: middle;
    }
    .top-left{
        color: #212121;
    }
    .top-right{
        position: absolute;
        right: .2rem;        
        color: #616161;
    }
    .hot-list{
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        margin-top: .32rem;
        padding: .3rem 0;
    }
    .hot-item{
        padding: 0 .2rem;
        width: 2rem;
        height: 2rem;
        display: inline-block;
    }
    .hot-item img{
        height: 100%;
        width: 100%;
    }
    .hot-item p{
        margin-top: .1rem;
        font-size: .28rem;
        text-align: center;
        height: .32rem;
        line-height: .32rem;
        textOverflow();
    }
    .hot-item span{
        vertical-align: middle;
    }
    .hot-item span.hot-mark{
        color: #ff7400;
    }
</style>
