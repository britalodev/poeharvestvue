<template>
  <div class="container">
    <div class="container">
      <logo :titulo="imgTitulo"/>
    </div>
    <div class="container">      
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  import Logo from './components/shared/logo/Logo.vue';

  export default {

    components: {
      'logo': Logo
    },

    data() {
      return {
        imgTitulo: 'Logo Path Of Exile Liga Harvest'
      }
    }
    
  };
</script>

<style scoped>    
</style>
