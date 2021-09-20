<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="flex  bg-blue-grey-2 fixed-top q-py-sm ">
      
        <q-toolbar class="flex flex-center ">
          <div class="logo text-h6 bg-negative rounded-borders q-pa-lg q-mb-lg" style="opacity: 0.8;">LOGO</div>
         <q-tabs class=" col-8">
         <q-tab name="home" ><router-link to="/"> Home</router-link> </q-tab><q-breadcrumbs-el label="/" />
          <q-tab name="about" ><router-link to="/ABOUT"> QUI SOMMES NOUS</router-link> </q-tab><q-breadcrumbs-el label="/" />
          <q-tab name="service"  ><router-link to="/SERVICES">NOS SERVICES</router-link> </q-tab><q-breadcrumbs-el label="/" />
          <q-tab name="contact" ><router-link to="/CONTACTS"> CONTACT</router-link> </q-tab>
         </q-tabs>  
          <div class="col-2" style="left:25rem">
            <div class="row justify-around">

          <q-btn flat  icon="event" size="1.2rem">
                <q-tooltip class="bg-red" :offset="[10, 10]" >
                   event
                </q-tooltip>
              </q-btn>
              <q-btn flat color="primary"  icon="facebook" size="1.2rem">
                <q-tooltip class="bg-primary" :offset="[10, 10]">
                   facebook
                </q-tooltip>
              </q-btn>
             <q-btn flat  color="positive" icon="whatsapp" size="1.2rem">
                <q-tooltip class="bg-green" :offset="[10, 10]">
                   whatsapp
                </q-tooltip>
              </q-btn>
            </div>
          
         </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="fex bg-blue-grey-2 absolute-bottom q-py-sm ">
        <q-toolbar class="flex flex-center ">
         <div class="col-8 ">
           <div class="row justify-evenly">
            <q-avatar size="80px" font-size="52px" color="teal" text-color="white" icon="manage" />
            <q-avatar size="80px" font-size="52px" color="teal" text-color="white" icon="directions" />
            <q-avatar size="80px" font-size="52px" color="teal" text-color="white" icon="directions" />
            <q-avatar size="80px" font-size="52px" color="teal" text-color="white" icon="directions" />
            <q-avatar size="80px" font-size="52px" color="teal" text-color="white" icon="directions" />
           </div>
         </div>  
          <div class="col-2" style="left:25rem">
            <div class="row justify-around">
              <q-btn flat  icon="event" size="1.2rem">
                <q-tooltip class="bg-red" :offset="[10, 10]" >
                   event
                </q-tooltip>
              </q-btn>
              <q-btn flat color="primary"  icon="facebook" size="1.2rem">
                <q-tooltip class="bg-primary" :offset="[10, 10]">
                   facebook
                </q-tooltip>
              </q-btn>
             <q-btn flat color="positive" icon="whatsapp" size="1.2rem">
                <q-tooltip class="bg-green" :offset="[10, 10]">
                   121545
                </q-tooltip>
              </q-btn>
            </div>
         </div>
      </q-toolbar>
      </q-footer>
  </q-layout>
</template>

<script>



import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {

    return {
     
    }
  }
})
</script>
<style scoped>
a{
  text-decoration:none;
  font-size:1.2rem;
}
</style>
