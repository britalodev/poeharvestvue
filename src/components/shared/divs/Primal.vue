<template>            
    <div v-if="seeds != null" class="table-responsive-md">
        <button                  
            class="btn btn-primary opacidade"
            type="button"
            data-toggle="collapse"
            data-target="#primal"
            aria-expanded="false"
            aria-controls="#primal"
            style="width:100%; background-color:#3DC7F4; color:white"
        >
            <h1>PRIMAL</h1>
        </button>
      
        <div id="primal" class="collapse">
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
                    <td v-if="seed.tipoSeed=='PRIMAL'" bgcolor="#809fff"> {{ seed.tier }} </td>
                    <td v-if="seed.tipoSeed=='PRIMAL'" bgcolor="#809fff"> {{ seed.tipoSeed }} </td>
                    <td v-if="seed.tipoSeed=='PRIMAL'" bgcolor="#809fff"> {{ seed.nome }} </td>
                    <td v-if="seed.tipoSeed=='PRIMAL'" bgcolor="#809fff"> {{ seed.descricao }} </td>
                    <td v-if="seed.tipoSeed=='PRIMAL'" bgcolor="#809fff">
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
                filtroEfeito: null
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

    .filtroNome {
        display: inline-block;
        width: 48%;
        margin-left: 1%;
    }
   .filtroNome {
        display: inline-block;
        width: 95%;
        height: 50px;
        margin-left: 1%;        
        background-color: #00AEEF;
        opacity: 0.7;
        border-style: solid;
        border-color: orange;
        text-align: center;
        align-items: center;
        font-size: 45px;
        color: black;
    }
    
    th {
        text-align: center;
        background-color: #8ED8F8;
        color: black;
        text-decoration: bold;
        opacity: 0.7;
    }

</style>