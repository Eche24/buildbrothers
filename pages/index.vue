<template>
      <v-container fluid class="pa-0">
  
      <HERO />

       <ABOUT />
      
      <SERVICES />

      <OURCOMMUNITY /> 
      <!-- <WHAT /> -->
   
      </v-container>
</template>

<script>
import HERO from '~/components/hero.vue'
import ABOUT from '~/components/about.vue'
import SERVICES from '~/components/services.vue'
// import WHAT from '~/components/whatPeople.vue'
import OURCOMMUNITY from '~/components/ourCommunity.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    HERO,
    ABOUT,
    SERVICES,
    // WHAT,
    OURCOMMUNITY
  },
   head () {
    return {
      title: 'Home',

    }
  }
}
</script>
