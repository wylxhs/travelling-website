<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">
                &#xe743;
            </span>            
        </div>
        <div class="header-search">
            <span class="iconfont">
                &#xe602;                
            </span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            北京<span class="iconfont">
                &#xe688;
            </span>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .header{
        height: .88rem;
        width: 100%;
        background: #17c0c8;
        color:#fff;
        font-size: 36rem;
        display: flex;
    }
    .header-left{
        padding: 0 .4rem;
        width: .4rem;
        font-weight: bold;
        text-align: center;
        font-size: .7rem;
    }
    .header-search{
        flex: 1;
        background: #fff;
        color: #ccc;
        font-size: .3rem;
        height: .6rem;
        margin: .15rem 0 .07rem 0;
        border-radius: .1rem;
        line-height: .6rem;
        padding: 0 .28rem;
    }
    .header-right{
        width: 1.5rem;
        font-size: .35rem;
        margin: .27rem 0 .25rem .25rem;
    }
</style>
