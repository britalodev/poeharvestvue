<template>
    <div>
        <div class="container">
            <btnVivid/>            
            <btnWild/>
        </div>
        <div v-if="seeds == null" class="text-center">
            <img src="../../../assets/imgs/carregando.gif"/>
        </div>
        <div class="container">            
            <primal :seeds="seeds"/>
        </div>
    </div>
</template>

<script>
    import Primal from '../../shared/divs/Primal.vue'
    
    import Vivid from '../../shared/buttons/ButtonVivid.vue';
    import Wild from '../../shared/buttons/ButtonWild.vue';

    export default {

        components:{
            'primal': Primal,
            'btnVivid': Vivid,
            'btnWild': Wild
        },

        data() {
            return {
              'seeds' : null
            }
        },

        created() {
            carregaSeeds :{
                let promisse = this.$http.get('https://poeharvest.herokuapp.com/seed/all');     
                promisse.then(res => res.json())
                .then(seed => this.seeds = seed, err => console.log(err));
            }            

            background : 
            {
                const image = document.getElementById('back');
                image.classList.remove('back-wild');
                image.classList.remove('back-vivid');
                image.classList.remove('back-home');
                image.classList.add('back-primal');
            }
        }

    };
</script>

<style>
    .back-primal {
        background-image: url('./background-primal.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed; 
      }
</style>