<template>
    <div>
        <div class="container">
            <btnVivid/>            
            <btnPrimal/>
        </div>
        <div v-if="seeds == null" class="text-center">
            <img src="../../../assets/imgs/carregando.gif"/>
        </div>
        <div class="container">            
            <wild :seeds="seeds"/>
        </div>
    </div>
</template>

<script>
    import Wild from '../../shared/divs/Wild.vue'

        import Vivid from '../../shared/buttons/ButtonVivid.vue';
        import Primal from '../../shared/buttons/ButtonPrimal.vue';

    export default {

        components:{
            'wild': Wild,
            'btnVivid': Vivid,
            'btnPrimal': Primal
        },

        data() {
            return {
              'seeds' : null
            }
        },

        created() {
            let promisse = this.$http.get('https://poeharvest.herokuapp.com/seed/all');     
            promisse.then(res => res.json())
            .then(seed => this.seeds = seed, err => console.log(err));
        }

    };
</script>

<style>
    body {
        background-image: url('./background-wild.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed; 
    }
</style>