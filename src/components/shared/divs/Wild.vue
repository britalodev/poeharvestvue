<template>
    <div v-if="seeds != null" class="table-responsive-md">
        <button                  
            class="btn btn-primary opacidade"
            type="button"
            data-toggle="collapse"
            data-target="#wild"
            aria-expanded="false"
            aria-controls="#wild"
            style="width:100%; background-color:#cc99ff"
        >
            <h1>WILD</h1>
        </button>
      
        <div id="wild" class="collapse">
        <input type="search" class="filtroNome" @input="filtro = $event.target.value" placeholder="Filtre pelo nome (Ainda não funciona)">
        <input type="search" class="filtroEfeito" @input="filtro = $event.target.value" placeholder="Filtre pelo efeito (Ainda não funciona)">
        <table class="table table-hover table-bordered">
            <thead bgcolor="#ccffcc" style="width:100%">
                <tr>
                    <th>TIER</th>
                    <th>TIPO SEED</th>
                    <th>NOME</th>
                    <th>DESCRICAO</th>
                    <th>CRAFTS</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="seed of seeds">
                    <td v-if="seed.tipoSeed=='WILD'" bgcolor="#cc99ff"> {{ seed.tier }} </td>
                    <td v-if="seed.tipoSeed=='WILD'" bgcolor="#cc99ff"> {{ seed.tipoSeed }} </td>
                    <td v-if="seed.tipoSeed=='WILD'" bgcolor="#cc99ff"> {{ seed.nome }} </td>
                    <td v-if="seed.tipoSeed=='WILD'" bgcolor="#cc99ff"> {{ seed.descricao }} </td>
                    <td v-if="seed.tipoSeed=='WILD'" bgcolor="#cc99ff">
                        <button class="btn btn-primary" type="button" data-toggle="collapse" :data-target="'#'+seed.nome" aria-expanded="false" :aria-controls="'#'+seed.nome">
                            CRAFTS
                            <i class="fas fa-angle-down"></i>
                        </button>
                        <div class="collapse" :id="seed.nome">
                            <div>
                                <ul>                                        
                                    <li v-for="crafte of seed.crafts"> {{ crafte.descricao }} </li>
                                </ul>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot></tfoot>
        </table>
      </div>
    </div>
</template>

<script>
    export default {
        
        props: ['seeds']

    }
</script>

<style scoped>

    .opacidade {
        opacity: 0.7;
    }

    .filtro {
        display: block;
        width: 100%;
    }
    
    .filtroNome {
        display: inline-block;
        width: 48%;
        margin-left: 1%;
    }

    .filtroEfeito {
        display: inline-block;
        width: 48%;
        margin-right: 1%;
    }
    
    th {
        text-align: center;
    }
</style>