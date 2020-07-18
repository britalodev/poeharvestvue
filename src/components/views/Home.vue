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
            routes
        }

    }

</script>

<style>
    body {
        background-image: url('../../assets/imgs/background-home.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed; 
      }
</style>