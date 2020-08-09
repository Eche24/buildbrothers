<template>
  <nav>
    <v-navigation-drawer v-model="drawer" temporary app>
      <!-- <v-card flat> -->
      <!-- <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> -->
            <v-layout justify-center align-center row class="pa-3">
            <nuxt-link to="/">
              <img src="~/assets/img/logo.png" width="45vh" />
            </nuxt-link>
            <nuxt-link to="/">
              <span
                style="font-size:130%; text-transform: capitalize; color: #00897B;"
              > buildbrothers</span>
            </nuxt-link>
            </v-layout>
          <!-- </v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->

      <v-divider></v-divider>
      <v-list nav>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <!-- <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>-->
          <v-list-item-content class="text-center">
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- </v-card> -->
    </v-navigation-drawer>
    <!-- <v-layout justify-center row> -->
    <!-- add app make it fix  -->
    <v-app-bar flat color="white" class="header">
      <v-app-bar-nav-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer" />
      <nuxt-link to="/">
        <img src="~/assets/img/logo.png" width="45vh" />
      </nuxt-link>
      <nuxt-link to="/">
        <span style="font-size:130%; text-transform: capitalize; color: #00897B;">buildbrothers</span>
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-btn-toggle group dense color="teal">
        <v-btn text flat v-for="(item, i) in items" :key="i" class="hidden-xs-only">
          <nuxt-link :to="item.to" style class="nav-link">{{ item.title }}</nuxt-link>
        </v-btn>
      </v-btn-toggle>
    </v-app-bar>
    <!-- </v-layout> -->
  </nav>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: '',
          title: 'Home',
          to: '/',
        },
        {
          icon: '',
          title: 'Trainings',
          to: '/training',
        },
        {
          icon: '',
          title: 'Projects',
          to: '/projects',
        },
            {
          icon: '',
          title: 'Contact',
          to: '/contact',
        },
          // {
        //   icon: '',
        //   title: 'blog',
        //   to: 'https://towncryer.com.ng/',
        // },
      ],
    }
  },
}
</script>

<style scoped>
.nav-link {
  /* padding: 12px 16px; */
  color: #000000d1;
}
/* .nav-link:hover {
  color: #00897B;
} */
.title-link:hover {
  /* text-decoration: underline; 
  text-decoration-color: teal;
  text-decoration-style: solid;
 -webkit-text-decoration-width: 2px;
  text-decoration-width: 2px; */
  /* text-decoration: underline solid green 3px; */
}
.header {
  width: 100%;
  max-width: 1189px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 1.2em !important;
}
</style>
