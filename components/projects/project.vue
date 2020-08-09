<template>
  <v-container fluid class="pa-0 my-0">
    <v-layout row align-center justify-center fill-height class="bg-color pa-3">
      <v-flex xs10 sm10 md10 lg10>
        <h2 class="text-center pb-5" style="color: #000000d1; padding: 1em;">
          Some of our work
        </h2>
        <v-card
          v-for="item in projects"
          :key="item.id"
          outlined
          class="mx-auto mb-2"
          style="background: linear-gradient(115.11deg, #f4f8fc, #d5dfed);"
        >
          <v-layout row wrap justify-center align-self-center>
            <v-flex xs10 sm4 md4 lg4>
              <v-responsive class="pa-4">
                <v-avatar class="ma-2" size="200" tile>
                  <v-img :src="item.img"></v-img>
                </v-avatar>
              </v-responsive>
            </v-flex>
            <v-flex xs10 sm6 md6 lg6 class>
              <v-card-title class="headline" style="color: #00897b;">{{
                item.name
              }}</v-card-title>
              <v-card-text>
                <p>{{ item.desc }}</p>
              </v-card-text>
              <!-- <v-card-text>
                <nuxt-link to> view project </nuxt-link>
              </v-card-text> -->
             
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'USSD Banking App',
          desc:
            'Android app for seamless mobile banking in Nigeria via USSD platform',

          img:
            'https://firebasestorage.googleapis.com/v0/b/buildbrother-1.appspot.com/o/ussd-banking.png?alt=media&token=cb19a50f-5a59-47c0-bd49-c6186cb5bbe9',
          src: '',
        },
        {
          name: 'Project Naija Forum',
          desc:
            'Online discussion board where users can create topics, reply to posts and send private messages.',

          img:
            'https://firebasestorage.googleapis.com/v0/b/buildbrother-1.appspot.com/o/pn.png?alt=media&token=08a09838-8e17-4f01-910d-2b3caf4000aa',
        },
        {
          name: 'DevFest App',
          desc:
            'Mobile app built with flutter for GDG Makurdi DevFest. View event location on map, see agenda and more in real-time',

          img:
            'https://firebasestorage.googleapis.com/v0/b/buildbrother-1.appspot.com/o/gdg.jpeg?alt=media&token=ae87ceb2-0b67-46a3-a86a-4fe40b626e3c',
        },
        {
          name: 'Towncryer.com.ng',
          desc: 'Technology news blog covering stories from all of Africa.',
          img:
            'https://firebasestorage.googleapis.com/v0/b/buildbrother-1.appspot.com/o/towncryer-logo.png?alt=media&token=9bc4a42a-bb41-4338-a911-76575c89cb0e',
        },
      ],
    }
  },
}
</script>

<style scoped>
.bg-color {
  /* padding: 3em 0 3em 0; */
  /* background: linear-gradient(115.11deg, #f4f8fc, #d5dfed); */
  background: rgb(247, 247, 247);
}
</style>
