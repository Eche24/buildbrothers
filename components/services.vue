<template>
<v-container fluid class="pb-0 pt-0">
  <v-layout row wrap align-center justify-center fill-height class="bg-color">
    <v-flex xs10 sm10 md10 lg10>
      <h2 class="text-center">What we offer</h2>
      <p class="text-center">World class developers, leveraging the power of modern technology to build your business.</p>

      <v-row>
        <v-col cols="12" sm="4" md="4" lg="4" v-for="item in info" :key="item.title">
          <v-hover v-slot:default="{ hover }" close-delay="200">
            <v-card
              :elevation="hover ? 16 : 2"
              class="mx-auto"
              height="400"
              max-width="350"
              style="background: linear-gradient(115.11deg,#f4f8fc,#d5dfed);"
            >
              <img :src="item.images" :alt="item.alt" width="100%"  class="pa-4" />
               
              
              <h3 class="title text-center services-title" color="teal">{{ item.title }}</h3>

              <p
                class="font-weight-medium mt-2 text-center subtitle-1 services-text"
              >{{ item.text }}</p>
           
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</v-container>
</template>
<style scoped>
.bg-color {
  padding: 3em 0 3em 0;
  /* background: linear-gradient(115.11deg, #f4f8fc, #d5dfed); */
  background: rgb(247, 247, 247);
}
.services-title {
  font-size: 22px;
  line-height: 1.34em;
  letter-spacing: -0.01em;
  font-weight: 600;
  color: #061328;
  padding: 18px 0 16px;
  text-transform: capitalize;
}
.services-text {
  font-size: 14px;
  line-height: 1.54em;
  font-weight: 400;
  color: #3a4669;
}
a{
  color: #000000d1;
  font-weight: 500;

}
</style>
<script>
export default {
  data() {
    return {
      info: [
        {
          text:
            'Coding courses to help and support learners become world class developers.',
          title: 'training',
          to: '/training',
           more: "training program",
            images: require('~/assets/img/services/training.svg'),
            alt: 'training',
        },
        
        {
          text:
            'Support people and business get the best out of technology',
          title: ' Consulting',
          to: '/community',
           more: "our community ",
            images: require('~/assets/img/services/consult.svg'),
          alt: 'consulting',

        },
        {
          text:
            'Development of software for Mobile and the Web application',
          title: 'software Engineering',
          // to: '/',
          // more: "some of our work",
           images: require('~/assets/img/services/buildbrother-service-1.svg'),
          alt: 'software',
          
        },
      ],
    }
  },
}
</script>
