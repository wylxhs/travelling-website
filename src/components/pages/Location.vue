<template>
    <div class="location border-top">
        <div class="loc border-right">
            <span class="iconfont">
                &#xe632;
            </span>
            <p class="title">河南南阳</p>
        </div>
        <div class="water">
            <span class="iconfont">
                &#xe844;
            </span>
            <p class="title">
                玩水季
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .location{
        background: #fff;
        font-size: .4rem;
        width: 100%;
        line-height: .9rem;
        text-align: center;
        display: flex;
        position: relative;
    }
    .loc{
        flex: 1;
        width: 50%;        
    }
    .water{
        flex: 1;
        width: 50%;
    }
    .iconfont{
        display: inline-block;
    }
    .title{
        display: inline-block;
    }
</style>
