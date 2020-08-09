 <template>
  <v-layout row justify-center fill-height class="pt-5 mb-5" align-center>
    <v-flex xs10 md5 sm5 lg5 class="pa-5 px-5">
      <span class="training-subtitle">Our Training</span>
      <h1 style="font-size: 3.25rem;" class="pt-2 pb-4"> Dream, Learn and Build </h1>
      <!-- <p style="font-size:110% line-height: 1.52em;font-weight: 400;">
        New technologies combined with constantly evolving computing tools makes continuous learning a no-brainer for IT professionals.
        Training from BuildBrother ensures that you and your company stay on the leading edge.
      </p> -->
    </v-flex>
    <v-flex xs10 md5 sm5 lg5 class="pa-6">
      <v-row dense>
        <template v-for="(item, i) in items">
          <v-col :key="i" cols="12" md="6">
            <v-hover v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                max-width="280"
                height="200"
              >
                <v-card-actions>
                  <!-- <v-icon role color="green">{{item.icon}}</v-icon>   -->
                  <img
                    :src="item.images"
                    width="30%"
                    style="margin:0 auto; padding-top:2px;"
                    :alt="item.alt"
                  />
                </v-card-actions>
                <!-- <v-card-title class="black--text"> -->
                <h3 class="font-weight-light text-center pt-1">{{item.name}}</h3>
                <!-- </v-card-title> -->
                <v-card-text class="pt-0">
                  <p class="black--text text-center" style="font-size:110%;">{{ item.text }}</p>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-flex>
  </v-layout>
</template>
<script>
// import imgPath from '@/assets/img/training/'
export default {
  data: () => ({
    items: [
      {
        name: 'WEB DEVELOPMENT',
        text: 'Learn Frontend and Backend web development',
        images: require('~/assets/img/training/web-development.svg'),
        alt:"web-development"
      },
      {
        name: 'MOBILE DEVELOPMENT',
        text: 'Build an interactive mobile application with the latest technology',
        images: require('~/assets/img/training/android.svg'),
        alt:"adroid development"
      },
      {
        name: 'UX/UX DESIGN',
        text: 'Confidently design beautiful user interfaces for any app or website.',
         images: require('~/assets/img/training/ux.svg'),
         alt:'ux/ui design'
        
      },
      {
        name: 'DIGITAL MARKETING',
        text: 'Learn to use digital marketing to grow your career or business',
         images: require('~/assets/img/training/digital-marketing.svg'),
         alt:'digital marketing'
      },
    ],
    transparent: 'rgba(255, 255, 255, 0)',
  }),

  // mounted() {
  //   this.getUrl(require.context('~/assets/img/training/', true, /\.svg$/))
  // },

  // methods: {
  //   getUrl() {
  //     return require(`~/assets/img/training/ ${name}.svg` )
  //   },
  // },
}
</script>
<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

/* .v-card:not(.on-hover) {
  opacity: 0.6;
} */
/* 
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
} */
.training-subtitle {
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 128%;
    letter-spacing: -.02em;
    color: teal;
    text-transform: capitalize;
}
</style>