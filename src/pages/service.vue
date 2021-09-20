<template>
    <div>
       <div class="row">
           <div class="text-center" style="width:36rem;margin:20px auto">
          <div class="text-h4 ">NOS SERVICES</div>
          <q-separator color="negative"  inset spaced="15px" />
        </div>
       </div>

       <div class="row flex-center justify-around">
           
        <q-card dark bordered class="bg-grey-9 my-card col-3">
      <q-card-section>
        <div class="text-h6">EXPLOITATION MINIERES ARTISANALE</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Unde nihil vero deleniti suscipit magni voluptate! Nihil 
        temporibus quis ex. Obcaecati quasi dolorem debitis natus, 
        amet repellendus rerum ex cupiditate expedita!
      <!-- <q-btn color="primary" icon="check"  @click="ouvrirForm" /> -->
      </q-card-section>
    </q-card>
     <q-card dark bordered class="bg-grey-9 my-card col-3">
      <q-card-section>
        <div class="text-h6">EXPLOITATION MINIERES <br> SEMI-INDUSTRIEL</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Unde nihil vero deleniti suscipit magni voluptate! Nihil 
        temporibus quis ex. Obcaecati quasi dolorem debitis natus, 
        amet repellendus rerum ex cupiditate expedita!

      </q-card-section>
    </q-card>
     <q-card dark bordered class="bg-grey-9 my-card col-3">
      <q-card-section>
        <div class="text-h6">EXPLOITATION MINIERES INDUSTRIEL</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Unde nihil vero deleniti suscipit magni voluptate! Nihil 
        temporibus quis ex. Obcaecati quasi dolorem debitis natus, 
        amet repellendus rerum ex cupiditate expedita!

      </q-card-section>
    </q-card>
    
    
       </div>
        <div class="row flex-center justify-around q-my-lg">
           
        <q-card dark bordered class="bg-grey-9 my-card col-3">
      <q-card-section>
        <div class="text-h6">EXPLOITATION MINIERES ARTISANALE</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Unde nihil vero deleniti suscipit magni voluptate! Nihil 
        temporibus quis ex. Obcaecati quasi dolorem debitis natus, 
        amet repellendus rerum ex cupiditate expedita!

      </q-card-section>
    </q-card>
     <q-card dark bordered class="bg-grey-9 my-card col-3">
      <q-card-section>
        <div class="text-h6">EXPLOITATION MINIERES <br> SEMI-INDUSTRIEL</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Unde nihil vero deleniti suscipit magni voluptate! Nihil 
        temporibus quis ex. Obcaecati quasi dolorem debitis natus, 
        amet repellendus rerum ex cupiditate expedita!

      </q-card-section>
    </q-card>
     <q-card dark bordered class="bg-grey-9 my-card col-3">
      <q-card-section>
        <div class="text-h6">EXPLOITATION MINIERES INDUSTRIEL</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Unde nihil vero deleniti suscipit magni voluptate! Nihil 
        temporibus quis ex. Obcaecati quasi dolorem debitis natus, 
        amet repellendus rerum ex cupiditate expedita!

      </q-card-section>
    </q-card>
    
      <!-- <q-dialog v-model="ouvre"  >
        <q-card>
       <q-form
        
         class="q-gutter-md"
         style="width:500px"
        
       >
         
         <div>
           <q-input  type="text" label="Nom" />
           <q-input  type="text" label="Prenom" />
           <q-input  type="tel" label="Contact" />
           <q-btn label="Submit" type="submit" color="primary"/>
           <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
         </div>
       </q-form>
         
        </q-card> 
      </q-dialog>-->
       </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
  
    setup () {
        let ouvre = ref(false);

       let ouvrirForm  = () => {
        ouvre.value = true
      }   



        return {
          ouvre,
          ouvrirForm
        }
    }
}
</script>

<style lang="scss" scoped>

</style>