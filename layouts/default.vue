<template>
  <v-app class="">
      <NAV />
    <v-content  class ="">
      <!-- <v-container fluid> -->
        <nuxt />
      <!-- </v-container> -->
    </v-content>
    <FOOTER />
  </v-app>
</template>

<script>
import NAV from "~/components/common/nav"
import FOOTER from "~/components/common/footer"
export default {
  components: {
     NAV,
     FOOTER
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
