<template>
    <div class="activity border_top">
        <div class="act border_right">
            <img src="../../assets/activity/a1.jpg" alt="">
        </div>
        <div class="water">
            <img src="../../assets/activity/a2.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .activity{
        background: #fff;
        font-size: .4rem;
        width: 100%;
        line-height: .9rem;
        text-align: center;
        display: flex;
        position: relative;
        margin-top: .2rem;
    }
    .activity img{
        width: 100%;
        height: 100%;
    }
    .act{
        flex: 1;
        width: 50%;        
    }
    .water{
        flex: 1;
        width: 50%;
    }
    .iconfont{
        display: inline-bactk;
    }
    .title{
        display: inline-bactk;
    }
</style>
