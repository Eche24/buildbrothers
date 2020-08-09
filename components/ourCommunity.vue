<template>
<v-container fluid class="pb-0 pt-0">
  <v-layout row align-center justify-center fill-height class="bg-color">
    <v-flex xs10 sm10 md10 lg10>
      <h3 class="text-center">
        Inspiring and raising
        a community of developers in Africa
      </h3>
      <p
        class="text-center pt-5"
      >Teaching them the relevant technologies while sharpening their soft skills.</p>
      <v-row>
        <v-col cols="12" sm="4" md="4" lg="4" v-for="item in info" :key="item.title">
          <v-card max-width="355" max-height="400" flat>
            <v-img max-width max-height  class="mx-auto"  :src="item.images" :alt="item.alt"></v-img>
            <v-card-text class="text-center">
              <nuxt-link :to="item.to" class="community-link">{{item.title}}</nuxt-link>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</v-container>
</template>
<style scoped>
.bg-color {
  padding: 3em 0 3em 0;
  background-color: #0a1930;
  color: #ecf1f7;
}
.community-link {
  padding: 12px 16px;
  color: #000000d1;
}
.community-link:hover {
  /* text-decoration: underline; */
  color: teal;
  text-decoration-style: solid;
  /* text-decoration-width: 2px; */
  /* text-decoration: underline solid green 3px; */
}
</style>
<script>
export default {
  data() {
    return {
      info: [
        {
          title: 'Teencode Africa',
          to: '/community/teencode',
          images: require('~/assets/img/training/teencode.jpg'),
          alt: 'teencode',
        },
        {
          title: 'buildspace BN',
          to: '/community',
          images: require('~/assets/img/training/buildbrother.jpg'),
          alt: 'buildspace',
        },
        {
          title: 'Otukpo Tech Meetup',
          to: '/',
          images: require('~/assets/img/training/ot-tech.jpg'),
          alt: 'Otukpo Tech Meetup',
        },
      ],
    }
  },
}
</script>