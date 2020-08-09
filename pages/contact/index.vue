<template>
<v-container fluid class="pa-4">
  <v-layout row justify-center fill-height class="pt-5 " align-center>
    <v-flex xs9 md5 sm5 lg5>
    <img src="~assets/img/buildbrother-contact.svg" width="100%" />
    </v-flex>
    <v-flex xs10 md5 sm5 lg5> 
        <CONTACT />
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
import CONTACT from '~/components/form/contactForm.vue'

export default {
  components: {
    CONTACT,
  },
  head () {
    return {
      title: 'Contact',

    }
  }
}
</script>
