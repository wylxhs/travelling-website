<template>
    <div class="home">
        <HomeHeader />
        <Swiper />
        <Icon />
        <Location />
        <Activity />
        <Hot />
    </div>
</template>

<script>
    import HomeHeader from './pages/Header'
    import Swiper from './pages/Swiper'
    import Icon from './pages/Icon'
    import Location from './pages/Location'
    import Activity from './pages/Activity'
    import Hot from './pages/Hot'

    export default {
        components: {
            HomeHeader,
            Swiper,
            Icon,
            Location,
            Activity,
            Hot
        }
   }
</script>
    
<style>
    .home{
        background: #e0e0e0;
    }
</style>
