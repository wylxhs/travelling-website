<template>
    <div class="home">
        <HomeHeader />
        <Swiper />
        <Icon />
        <Location />
        <Activity />
    </div>
</template>

<script>
    import HomeHeader from './pages/Header'
    import Swiper from './pages/Swiper'
    import Icon from './pages/Icon'
    import Location from './pages/Location'
    import Activity from './pages/Activity'

    export default {
        components: {
            HomeHeader,
            Swiper,
            Icon,
            Location,
            Activity
        }
   }
</script>
    
<style>
    .home{
        background: #e0e0e0;
    }
</style>
