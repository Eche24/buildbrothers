<template>
  <v-container fluid class="bg-img pt-0 pb-0">
    <TRAININGHERO />
    <COURSES />
  </v-container>
</template>
<script>
import TRAININGHERO from '~/components/training/trainingHero.vue'
import COURSES from '~/components/training/courses.vue'
export default {
  components: {
    TRAININGHERO,
    COURSES,
  },
   head () {
    return {
      title: 'Training',

    }
  }
}
</script>
<style scoped>
/* .bg-img {
  background-image: url('/assets/img/bg-img.svg');
} */
</style>