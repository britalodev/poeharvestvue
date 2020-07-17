<template>
    <div v-if="seeds != null" class="table-responsive-md">
        <button                  
            class="btn btn-primary opacidade"
            type="button"
            data-toggle="collapse"
            data-target="#wild"
            aria-expanded="false"
            aria-controls="#wild"
            style="width:100%; background-color:#603499; color:white"
        >
            <h1>WILD</h1>
        </button>
      
        <div id="wild" class="collapse">
        <center><input type="search" class="filtroNome" @input="filtroNome = $event.target.value" placeholder="Filtre pelo nome"></center>
        <table class="table table-hover table-bordered">
            <thead style="width:100%">
                <tr>
                    <th>TIER</th>
                    <th>TIPO SEED</th>
                    <th>NOME</th>
                    <th>DESCRICAO</th>
                    <th>CRAFTS</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="seed of seedsFiltro">
                    <td v-if="seed.tipoSeed=='WILD'" bgcolor="#BB97EB"> {{ seed.tier }} </td>
                    <td v-if="seed.tipoSeed=='WILD'" bgcolor="#BB97EB"> {{ seed.tipoSeed }} </td>
                    <td v-if="seed.tipoSeed=='WILD'" bgcolor="#BB97EB"> {{ seed.nome }} </td>
                    <td v-if="seed.tipoSeed=='WILD'" bgcolor="#BB97EB"> {{ seed.descricao }} </td>
                    <td v-if="seed.tipoSeed=='WILD'" bgcolor="#BB97EB">
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
        
        props: ['seeds'],

        data() {
            return {
                filtroNome: null,
                filtroEfeito: null,
                nomes: [],
                efeitos: []
            }
        },

        computed: {
            seedsFiltro() {
                if(this.filtroNome) {
                    let exp = new RegExp(this.filtroNome.trim(), 'i');
                    return this.seeds.filter(seed => exp.test(seed.nome));
                } else {
                    return this.seeds;
                }
            }                        
        }

    }
</script>

<style scoped>

    .opacidade {
        opacity: 0.7;
    }

    .filtro {
        display: block;
        width: 95%;
    }
    
    .filtroNome {
        display: inline-block;
        width: 95%;
        height: 50px;
        margin-left: 1%;        
        background-color: #4E2287;
        opacity: 0.8;
        border-style: solid;
        border-color: red;
        text-align: center;
        align-items: center;
        font-size: 45px;
        color: orange;
    }
    
    th {
        text-align: center;
        background-color: #BB97EB;
        color: black;
        text-decoration: bold;
        opacity: 0.7;
    }
    

</style>