<template>
        <div v-if="seeds != null" class="table-responsive-md">
        <div id="vivid">
        <center>
            <div class="filtrando">
                <i class='filtroNomeLupa fas fa-search'/>
                <input type="search" class="filtroNome fas" @input="filtroNome = $event.target.value" placeholder="Filtre pelo nome">
            </div>            
        </center>
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
                <tr v-for="seed of seedsFiltro" :key="seed">
                    <td v-if="seed.tipoSeed=='VIVID'" bgcolor="#ffffb3"> {{ seed.tier }} </td>
                    <td v-if="seed.tipoSeed=='VIVID'" bgcolor="#ffffb3"> {{ seed.tipoSeed }} </td>
                    <td v-if="seed.tipoSeed=='VIVID'" bgcolor="#ffffb3"> {{ seed.nome }} </td>
                    <td v-if="seed.tipoSeed=='VIVID'" bgcolor="#ffffb3"> {{ seed.descricao }} </td>
                    <td v-if="seed.tipoSeed=='VIVID'" bgcolor="#ffffb3">
                        <button class="btn btn-primary" type="button" data-toggle="collapse" :data-target="'#'+seed.nome" aria-expanded="false" :aria-controls="'#'+seed.nome">
                            CRAFTS
                            <i class="fas fa-angle-down"></i>
                        </button>
                        <div class="collapse" :id="seed.nome">
                            <div>
                                <ul>                                        
                                    <li v-for="crafte of seed.crafts" :key="crafte"> {{ crafte.descricao }} </li>
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

    .filtro {
        display: block;
        width: 100%;
    }
    
    .filtroNome {
        display: inline-block;
        width: 93%;
        height: 50px;
        margin-left: 1%;        
        background-color: #FFFCB2;
        opacity: 1;
        border-style: none;
        text-align: center;
        align-items: center;
        font-size: 45px;
        color: #E73121;
        font-family: OFL;
    }

    .filtroNomeLupa {        
        width: 5%;
        height: 50px;      
        background-color: #FFFCB2;
        opacity: 0.7;        
        font-size: 45px;
        color: black;
        margin: 0 0 0 0;
    }

    .filtrando {
        background-color: #FFFCB2;
        border-style: solid;
        border-color: #E73121;
        width: 95%;
        margin-top: 2px;
        margin-bottom: 3px;;
    }
    
    th {
        text-align: center;
        background-color: #FFF96C;
        color: black;
        text-decoration: bold;
        opacity: 0.7;
    }
</style>