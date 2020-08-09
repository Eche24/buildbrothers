<template>
<v-container fluid class="pb-0 pt-0">
  <PROJECTHERO />
   <PROJECT />
  </v-container>
</template>
<script>
import PROJECT from '~/components/projects/project.vue'
import PROJECTHERO from '~/components/projects/projectHero.vue'
export default {
  components: {
       PROJECT,
       PROJECTHERO
  },
  data() {
    return {
    
    };
  },
   head () {
    return {
      title: 'Project',

    }
  }
};
</script>

