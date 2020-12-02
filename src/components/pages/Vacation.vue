<template>
    <div class="vacation">
        <div class="vacation_header">周末去哪儿</div>
        <ul>
            <li class="vacation_item" v-for="(item, index) in vacationList" :key="index">
                <div class="vacation_img">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="vacation_text">
                    <p class="vacation_title">{{item.title}}</p>
                    <p class="vacation_content">{{item.content}}</p>
                </div>                
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                vacationList:[
                    {
                        id:1,
                        imgUrl: require('@/assets/vacation/vacation1.jpg'),
                        title:'漂流勇近 烧烤露营',
                        content:'轻松水上漂，任我乐逍遥'
                    },
                    {
                        id:2,
                        imgUrl: require('@/assets/vacation/vacation2.jpg'),
                        title:'漂流勇近 烧烤露营',
                        content:'轻松水上漂，任我乐逍遥'
                    },
                    {
                        id:3,
                        imgUrl: require('@/assets/vacation/vacation3.jpg'),
                        title:'漂流勇近 烧烤露营',
                        content:'轻松水上漂，任我乐逍遥'
                    },
                    {
                        id:4,
                        imgUrl: require('@/assets/vacation/vacation4.jpg'),
                        title:'漂流勇近 烧烤露营',
                        content:'轻松水上漂，任我乐逍遥'
                    },
                    {
                        id:5,
                        imgUrl: require('@/assets/vacation/vacation5.jpg'),
                        title:'漂流勇近 烧烤露营',
                        content:'轻松水上漂，任我乐逍遥'
                    }
                ]
            }
        }
    }
</script>

<style>
.vacation_header{
    font-size: .32rem;
    padding: .24rem;
}
.vacation_item{
    background: #fff;
}
.vacation_img{
    width: 100%;
    height: 0;
    padding-bottom: 37.4375%;
    overflow: hidden;
}
.vacation_img img{
    width: 100%;
}
.vacation_text{
    padding: .3rem .2rem;
}
.vacation_title{
    font-size: .28rem;
    margin-bottom: .2rem;
}
.vacation_content{
    font-size: .24rem;
    color: #616161;
}
</style>
