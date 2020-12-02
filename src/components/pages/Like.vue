<template>
    <div class="like">
        <div class="like_header">
            <img src="../../assets/like/like.png" alt="">
            <span>猜你喜欢</span>
        </div>
        <div class="like_content">
            <ul>
                <li class="like_item border_bottom" v-for="(item, index) in likeList" :key="index">
                    <div class="like_img">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <div class="like_text">
                        <div class="like_title">{{item.title}}</div>
                        <div class="like_star_comment">
                            <span class="like_star">{{item.star}}/5分</span>
                            <span class="like_comment">{{item.comment}}条评论</span>
                        </div>
                        <div class="like_price_place">
                            <span class="like_price"><b>￥{{item.price}}</b>起</span>
                            <span class="like_place">{{item.place}}</span>
                        </div>                        
                    </div>
                </li>
            </ul>            
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                likeList: [
                    {
                        id:1,
                        imgUrl: require('@/assets/like/like1.jpg'),
                        title:'金海湖风景区',
                        star:'4.6',
                        comment:'1341',
                        price:'19',
                        place:'平谷区'
                    },
                    {
                        id:2,
                        imgUrl: require('@/assets/like/like2.jpg'),
                        title:'金海湖风景区',
                        star:'5',
                        comment:'1341',
                        price:'19',
                        place:'顺义区'
                    },
                     {
                        id:3,
                        imgUrl: require('@/assets/like/like3.jpg'),
                        title:'金海湖风景区',
                        star:'4.7',
                        comment:'1341',
                        price:'19',
                        place:'保定'
                    },
                    {
                        id:4,
                        imgUrl: require('@/assets/like/like4.jpg'),
                        title:'金海湖风景区',
                        star:'4.9',
                        comment:'1341',
                        price:'19',
                        place:'平谷区'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .like{
        background: #fff;
        margin-top: .2rem;
        font-size: .32rem;
        line-height: .42rem;
    }
    .like_header{
        height: 100%;
        width: 100%;
        padding-bottom: .4rem;
    }
    .like_header img{
        height:100%;
        width:.42rem;
        vertical-align: middle;
    }
    .like_header span{       
        height: 100%;
        display: inline-block;
        vertical-align: middle;
    }
    .like_content{
        height: 100%;
        width: 100%;
    }
    .like_item{
        position: relative;
        overflow: hidden;
        padding:.2rem;
    }
    .like_item .like_img{
        float: left;
    }
    .like_item .like_img img{
        height: 2.2rem;
        width: 2.2rem;;
    }
    .like_item .like_text{
        overflow: hidden;
        padding-left: .22rem;
    }
    .like_title{
        font-size: .36rem;
        margin-top: .4rem;
        color: #212121;
    }
    .like_star_comment{
        margin-top: .1rem;
    }
    .like_comment{
        color: #616161;
        font-size: .1rem;
    }
    .like_price_place{
        margin-top: .2rem;
        position: relative;
        color: #616161;
    }
    .like_price{
        font-size: .2rem;
    }
    .like_price b{
        font-size: .4rem;
        color: #ff7400;
    }
    .like_place{
        position: absolute;
        right: .1rem;
    }
</style>
