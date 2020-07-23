<template>
    <div class="container">
        <div class="container">
            <btnWild/>            
            <btnPrimal/>
        </div>      
        <div class="container">
            <vivid/>
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

        created() {

            background : 
            {
                const image = document.getElementById('back');
                image.classList.remove('back-wild');
                image.classList.remove('back-primal');
                image.classList.remove('back-home');
                image.classList.add('back-vivid');
            }
        }

    };
</script>

<style>
    .back-vivid {
        background-image: url('./Background-vivid.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed; 
    }

    .carregou {
        display: none;
    }
</style>