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
        imgTitulo: 'Logo Path Of Exile Liga Harvest',
        'seeds': null
      }
    },

    created() {
      carregaSeeds :{
                let promisse = this.$http.get('https://poeharvest.herokuapp.com/seed/all');     
                promisse.then(res => res.json())
                .then(seed => this.seeds = seed, err => console.log(err));
            }
    }
    
  };
</script>

<style scoped>    
</style>
