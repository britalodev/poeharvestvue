<template>
    <div>
        <div class="container">
            <btnWild/>            
            <btnPrimal/>
        </div>        
        <div v-if="seeds == null" class="text-center">
            <img src="../../../assets/imgs/carregando.gif"/>
        </div>
        <div class="container">            
            <vivid :seeds="seeds"/>
        </div>
    </div>
</template>

<script>
    import Vivid from '../../shared/divs/Vivid.vue'

    
    import Wild from '../../shared/buttons/ButtonWild.vue';
    import Primal from '../../shared/buttons/ButtonPrimal.vue';
    
    export default {

        components:{
            'vivid': Vivid,
            'btnWild': Wild,
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
        background-image: url('./background-vivid.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed; 
    }
</style>