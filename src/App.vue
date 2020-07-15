<template>
  <div>    
    <div id="logo">
      <center><img src="./assets/POELogoHarvest.png" :alt="logo.titulo" height="300" width="1000"></center>
    </div>

    <h1 class="text-center"> {{ titulo }} </h1>

<div v-if="seeds == null" class="text-center">
  <img src="./assets/carregando.gif">
</div>
<div v-if="seeds != null">
  <table class="table table-hover table-bordered">
            <thead bgcolor="#ccffcc">
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
                            <td v-if="seed.tipoSeed=='WILD'" bgcolor="#cc99ff"> 
                                {{ seed.tier }}
                            </td>
                            <td v-if="seed.tipoSeed=='WILD'" bgcolor="#cc99ff">
                              {{ seed.tipoSeed }}
                            </td>
                            <td v-if="seed.tipoSeed=='WILD'" bgcolor="#cc99ff">
                              {{ seed.nome }}
                            </td>
                            <td v-if="seed.tipoSeed=='WILD'" bgcolor="#cc99ff">
                              {{ seed.descricao }}
                            </td>
                            <td v-if="seed.tipoSeed=='WILD'" bgcolor="#cc99ff">
                              <button class="btn btn-primary" type="button" data-toggle="collapse" :data-target="'#'+seed.nome" aria-expanded="false" :aria-controls="'#'+seed.nome">
                                CRAFTS
                                <i class="fas fa-angle-down"></i>
                              </button>
                              <div class="collapse" :id="seed.nome">
                                <div>
                                  <ul>                                        
                                    <li v-for="crafte of seed.crafts">
                                      {{ crafte.descricao }}
                                    </li>                                                                  
                                  </ul>
                                </div>
                              </div>
                            </td>

                            <td v-if="seed.tipoSeed=='VIVID'" bgcolor="#ffffb3"> 
                                {{ seed.tier }}
                            </td>
                            <td v-if="seed.tipoSeed=='VIVID'" bgcolor="#ffffb3">
                              {{ seed.tipoSeed }}
                            </td>
                            <td v-if="seed.tipoSeed=='VIVID'" bgcolor="#ffffb3">
                              {{ seed.nome }}
                            </td>
                            <td v-if="seed.tipoSeed=='VIVID'" bgcolor="#ffffb3">
                              {{ seed.descricao }}
                            </td>
                            <td v-if="seed.tipoSeed=='VIVID'" bgcolor="#ffffb3">
                              <button class="btn btn-primary" type="button" data-toggle="collapse" :data-target="'#'+seed.nome" aria-expanded="false" :aria-controls="'#'+seed.nome">
                                CRAFTS
                                <i class="fas fa-angle-down"></i>
                              </button>
                              <div class="collapse" :id="seed.nome">
                                <div>
                                  <ul>                                        
                                    <li v-for="crafte of seed.crafts">
                                      {{ crafte.descricao }}
                                    </li>                                                                  
                                  </ul>
                                </div>
                              </div>
                            </td>

                            <td v-if="seed.tipoSeed=='PRIMAL'" bgcolor="#809fff"> 
                                {{ seed.tier }}
                            </td>
                            <td v-if="seed.tipoSeed=='PRIMAL'" bgcolor="#809fff">
                              {{ seed.tipoSeed }}
                            </td>
                            <td v-if="seed.tipoSeed=='PRIMAL'" bgcolor="#809fff">
                              {{ seed.nome }}
                            </td>
                            <td v-if="seed.tipoSeed=='PRIMAL'" bgcolor="#809fff">
                              {{ seed.descricao }}
                            </td>
                            <td v-if="seed.tipoSeed=='PRIMAL'" bgcolor="#809fff">
                              <button class="btn btn-primary" type="button" data-toggle="collapse" :data-target="'#'+seed.nome" aria-expanded="false" :aria-controls="'#'+seed.nome">
                                CRAFTS
                                <i class="fas fa-angle-down"></i>
                              </button>
                              <div class="collapse" :id="seed.nome">
                                <div>
                                  <ul>                                        
                                    <li v-for="crafte of seed.crafts">
                                      {{ crafte.descricao }}
                                    </li>                                                                  
                                  </ul>
                                </div>
                              </div>
                            </td>                        
                        </tr>                    
            </tbody>

            <tfoot>
            </tfoot>
        </table>
  </div>
<!--    <div id="formulario">
      
      <form class="form">
        
        <div class="form-group">
            <label for="data">TIER</label>
            <input type="date" id="data" class="form-control" required="" autofocus="">        
        </div>    
        
        <div class="form-group">
            <label for="quantidade">Quantidade</label>
            <input type="number" min="1" step="1" id="quantidade" class="form-control" value="1" required="">
        </div>
        
        <div class="form-group">
            <label for="valor">Valor</label>
            <input id="valor" type="number" class="form-control" min="0.01" step="0.01" value="0.0" required="">
        </div>
        
        <button class="btn btn-primary" type="submit">Incluir</button>
      </form>
    </div>
    -->
  </div>
</template>

<script>
  export default {

    data() {

      return {

        titulo: 'Poe Harvest',

        logo: {
          titulo: 'Logo Path of Exile Harvest'
        },

        seeds: null
      }

    },
    
    created() {

      let promisse = this.$http.get('https://poeharvest.herokuapp.com/seed/all');
      //let promisse = this.$http.get('https://poeharvest.herokuapp.com/seed/1');

      

        promisse.then(res => res.json())
        .then(seed => this.seeds = seed, err => console.log(err));

        console.log('teste');     

    }

  }
</script>

<style>

</style>
