<template>
    <div class="container">
        <div class="container">
            <btnVivid/>            
            <btnPrimal/>
        </div>
        <div class="container">            
            <wild/>
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
                'seeds': null
            }
        },

        created() {
            background: 
            {
                const image = document.getElementById('back');
                image.classList.remove('back-vivid');
                image.classList.remove('back-primal');
                image.classList.remove('back-home');
                image.classList.add('back-wild');
            }
        }

    };
</script>

<style>
    .back-wild {
        background-image: url('../../../assets/imgs/backgrounds/background-wild.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed; 
    }

</style>