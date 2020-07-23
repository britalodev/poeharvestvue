<template>
    <div class="container">
        <div class="container">
            <btnVivid/>            
            <btnWild/>
        </div>        
        <div class="container">            
            <primal/>
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

        created() {
            background : {
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
        background-image: url('../../../assets/imgs/backgrounds/background-primal.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed; 
      }
</style>