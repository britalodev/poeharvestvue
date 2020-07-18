<template>
    <div class="container">
        <div class="container">
            <btnWild/>
        </div>
        <div class="container">
            <btnVivid/>
        </div>
        <div class="container">
            <btnPrimal/>
        </div>
    </div>
</template>

<script>

    import { routes } from '../../routes';

    import Primal from '../shared/buttons/ButtonPrimal.vue';
    import Vivid from '../shared/buttons/ButtonVivid.vue';
    import Wild from '../shared/buttons/ButtonWild.vue';


    export default {

        components:{
            'btnPrimal': Primal,
            'btnVivid': Vivid,
            'btnWild': Wild
        },

        data() {
            return {
                routes,
            }
        },
        
        created() {
            background: {
                const image = document.getElementById('back');
                image.classList.remove('back-wild');
                image.classList.remove('back-vivid');
                image.classList.remove('back-primal');
                image.classList.add('back-home');
            }
        }
    }

</script>

<style>
    .back-home {
        background-image: url('../../assets/imgs/background-home.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed; 
      }
</style>