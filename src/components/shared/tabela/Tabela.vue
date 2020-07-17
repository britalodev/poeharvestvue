<template>
  <div>
    <div v-if="seeds == null" class="text-center">
      <img src="../../../assets/imgs/carregando.gif"/>
    </div>

    <wild :seeds="seeds"/>
    <vivid :seeds="seeds"/>
    <primal :seeds="seeds"/>

  </div>
</template>

<script>

    import Wild from '../divs/Wild.vue'
    import Vivid from '../divs/Vivid.vue'
    import Primal from '../divs/Primal.vue'

    export default {

        props:['seeds'],

        components:{
            'wild': Wild,
            'vivid': Vivid,
            'primal': Primal
        },

        data() {
            return {
                'seeds' : null
            }
        }
    };
</script>

<style scoped>
</style>