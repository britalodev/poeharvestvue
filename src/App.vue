<template>
  <div>
    <div class="container">
      <logo :titulo="imgTitulo"/>
    </div>
    <div class="texto-logo">
      <h1> {{ titulo }} </h1>
    </div>
      <tabela :seeds="seeds"/>
  </div>
</template>

<script>

  import Logo from './components/shared/logo/Logo.vue';
  import Table from './components/shared/tabela/Tabela.vue';

  export default {

    components: {
      'logo': Logo,
      'tabela': Table
    },

    data() {
      return {
        titulo: "Seeds PoE",
        imgTitulo: 'Logo Path Of Exile Liga Harvest',
        seeds: null
      }
    },

    created() {
      let promisse = this.$http.get('https://poeharvest.herokuapp.com/seed/all');     
      promisse.then(res => res.json())
      .then(seed => this.seeds = seed, err => console.log(err));
    }
  };
</script>

<style scoped>

  .texto-logo {
    text-align: center;
    font-family: Helvetica, sans-serif;
    
  }

</style>
