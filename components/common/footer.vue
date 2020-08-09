<template>
  <v-container fluid class="footer-bg-color">
    <v-layout row wrap justify-center align-center fill-height>
      <v-flex xs10 sm10 md10 lg10>
        <v-row>
          <v-col cols="12" sm="4" md="4" lg="4" class="text-center">
            <h3 style="font-size:110%" class="pb-3">Connect with us</h3>

            <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon :href='icon.src'>
              <v-icon size="24px" >
                  {{ icon.icon }}
                </v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12" sm="5" md="5" lg="5" class="text-center">
            <h3 style="font-size:110%" class="pb-3">Contact Us</h3>
            <ul style="font-size:90%">
              <li>
                <v-icon color="indigo">mdi-phone</v-icon> +23480 5246 5145
              </li>
              <li>
                <v-icon color="indigo">mdi-message-text</v-icon> info@buildbrothers.com
              </li>
              <li>
                <v-icon color="indigo">mdi-map-marker</v-icon> 2nd Floor, Pace setter Academy, Makurdi, Nigeria
              </li>
            </ul>
          </v-col>

          <v-col cols="12" sm="2" md="2" lg="2">
            <!-- <v-list class="footer-bg-color text--white" > -->
            <h3 style="font-size:110%" class="pb-3 text-center text-xs-pt-2">Quick link</h3>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              router
              exact
              class="text--white"
              dense
              :href="item.src"
            >
              <v-list-item-content class="text-white text-center" >
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
            <!-- </v-list> -->
          </v-col>
        </v-row>
        <v-divider color="white"></v-divider>
        <span class="mt-2" style="font-size:90%">
          &copy; {{ new Date().getFullYear() }} Buildbrothers All Rights
          Reserved
        </span>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    icons: [
      {
        src:'https://facebook.com/buildbrothers',
        icon:'mdi-facebook'
      },
         { 
             src:'https://twitter.com/BuildBroNG',
             icon:'mdi-twitter'
           },
         {     src:'http://instagram.com/buildbro',
                icon: 'mdi-instagram'
           }
           
    ],
    items: [
      // {
      //   title: 'Community',
      //   to: '/community',
      // },
      {
        title: 'Training',
        src: '/training',
      },
      {
        title: 'Projects',
        src: '/projects',
      },

      {
        title: 'blog',
        src: 'https://towncryer.com.ng/',
      },
    ],
  }),
}
</script>
<style scoped>
.footer-bg-color {
  background: #1f1c28;
  color: #a1a1af;
  line-height: 1.34em;
  letter-spacing: -0.01em;
  font-family: 'Montserrat', sans-serif;
}
.text-white {
  color: white;
  text-transform: capitalize;
}
li {
  list-style: none;
  padding-top: 10px;
  color: white;
}
</style>
