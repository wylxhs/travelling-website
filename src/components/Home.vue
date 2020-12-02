<template>
    <div class="home">
        <HomeHeader />
        <Swiper />
        <Icon />
        <Location />
        <Activity />
        <Hot />
        <Like />
        <Vacation />
    </div>
</template>

<script>
    import HomeHeader from './pages/Header'
    import Swiper from './pages/Swiper'
    import Icon from './pages/Icon'
    import Location from './pages/Location'
    import Activity from './pages/Activity'
    import Hot from './pages/Hot'
    import Like from './pages/Like'
    import Vacation from './pages/Vacation'

    export default {
        components: {
            HomeHeader,
            Swiper,
            Icon,
            Location,
            Activity,
            Hot,
            Like,
            Vacation
        }
   }
</script>
    
<style>
    .home{
        background: #e0e0e0;
    }
</style>
