<template>
    <div class="logo container">
        <router-link to="/">
            <center><img src="../../../assets/imgs/POELogoHarvest.png" :alt="titulo" height="300" width="80%"></center>
        </router-link>
    </div>
</template>

<script>

    import { routes } from '../../../routes';
          
    export default {

        props: ['titulo']
    
    }
</script>

<style scoped>

</style>