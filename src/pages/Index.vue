<template>
  <q-page class="bg-grey-2 q-mt-xs" style="min-height: 27rem;">
    <q-carousel v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="negative"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        arrows
        infinite
        autoplay
      class="text-white shadow-1 rounded-borders ct"
      
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center c_s_1" >
        <div class="logo text-h1 bg-negative rounded-borders q-pa-lg q-mb-lg" style="opacity: 0.7;">LOGO</div>
        <div class="text-center ">
          <div class="text-h4 ">Invovation</div>
          <q-separator color="white"  inset spaced="15px" />
          <div class="text-h3">Secteur miniers pour tous</div>
        </div>        
      </q-carousel-slide>
       <q-carousel-slide name="lolo" class="column no-wrap flex-center c_s_2" >
        <div class="logo text-h1 bg-negative rounded-borders q-pa-lg q-mb-lg" style="opacity: 0.8;">LOGO</div>
        <div class="text-center ">
          <div class="text-h4 ">Invovation</div>
          <q-separator color="white"  inset spaced="15px" />
          <div class="text-h3">Secteur miniers pour tous</div>
        </div>        
      </q-carousel-slide>
    </q-carousel>

        <div class="text-center" style="width:36rem;margin:20px auto">
          <div class="text-h4 ">Bienvenues !</div>
          <q-separator color="negative"  inset spaced="15px" />
        </div>
   
   <div class="flex justify-evenly q-pa-lg q-gutter-md">
      <q-card class="my-card">
          <q-img
         src="../assets/images.jpeg"
         :ratio="4/3"
       />
       <q-card-section>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit
       </q-card-section>
     </q-card>
     <q-card class="my-card">
       <q-img
         src="../assets/isto.jpg"
         :ratio="4/3"
       />
       <q-card-section>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit
       </q-card-section>
     </q-card>
       <q-card class="my-card">
          <q-img
         src="../assets/E54PBRqXEAIwMGU.jpeg"
         :ratio="4/3"
       />
       <q-card-section>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit
       </q-card-section>
     </q-card>
   </div>

        <div class="text-center" style="width:36rem;margin:5px auto">
          <div class="text-h4 ">Notre vision !</div>
          <q-separator color="negative"  inset spaced="15px" />
        </div>
   
   <div class="row text-justify">
     <span class="col-6 " style="padding:4rem">
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe neque in repellat inventore aut atque nostrum incidunt eveniet tempora, quisquam voluptatum nihil ipsam quis numquam corporis quia nam iure!
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe neque in repellat inventore aut atque nostrum incidunt eveniet tempora, quisquam voluptatum nihil ipsam quis numquam corporis quia nam iure!
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe neque in repellat inventore aut atque nostrum incidunt eveniet tempora, quisquam voluptatum nihil ipsam quis numquam corporis quia nam iure!
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe neque in repellat inventore aut atque nostrum incidunt eveniet tempora, quisquam voluptatum nihil ipsam quis numquam corporis quia nam iure!
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe neque in repellat inventore aut atque nostrum incidunt eveniet tempora, quisquam voluptatum nihil ipsam quis numquam corporis quia nam iure!
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe neque in repellat inventore aut atque nostrum incidunt eveniet tempora, quisquam voluptatum nihil ipsam quis numquam corporis quia nam iure!
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe neque in repellat inventore aut atque nostrum incidunt eveniet tempora, quisquam voluptatum nihil ipsam quis numquam corporis quia nam iure!
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe neque in repellat inventore aut atque nostrum incidunt eveniet tempora, quisquam voluptatum nihil ipsam quis numquam corporis quia nam iure!
     </span>
     <span class="col-6 " style="padding:4rem">
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe neque in repellat inventore aut atque nostrum incidunt eveniet tempora, quisquam voluptatum nihil ipsam quis numquam corporis quia nam iure!
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe neque in repellat inventore aut atque nostrum incidunt eveniet tempora, quisquam voluptatum nihil ipsam quis numquam corporis quia nam iure!
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe neque in repellat inventore aut atque nostrum incidunt eveniet tempora, quisquam voluptatum nihil ipsam quis numquam corporis quia nam iure!
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe neque in repellat inventore aut atque nostrum incidunt eveniet tempora, quisquam voluptatum nihil ipsam quis numquam corporis quia nam iure!
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe neque in repellat inventore aut atque nostrum incidunt eveniet tempora, quisquam voluptatum nihil ipsam quis numquam corporis quia nam iure!
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe neque in repellat inventore aut atque nostrum incidunt eveniet tempora, quisquam voluptatum nihil ipsam quis numquam corporis quia nam iure!
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe neque in repellat inventore aut atque nostrum incidunt eveniet tempora, quisquam voluptatum nihil ipsam quis numquam corporis quia nam iure!
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe neque in repellat inventore aut atque nostrum incidunt eveniet tempora, quisquam voluptatum nihil ipsam quis numquam corporis quia nam iure!
     </span>
      
    </div>

    
  </q-page>
</template>

<script>
import {ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    return{
      slide:ref('style')
    }
  }
})
</script>
<style scoped>
.ct{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  min-width: 100%;
}
.c_s_1{
  
  background: url("../assets/Mineria.png") no-repeat;
  background-size: cover;
  background-position-y: 70%;
}
.c_s_2{
  
  background: url("../assets/mine-tongon-cote-d-ivoire.jpg") no-repeat;
  background-size: cover;
  background-position-y: center;
}
</style>
