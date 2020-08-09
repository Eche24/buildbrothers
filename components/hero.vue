<template>
  <v-container fluid class="pb-0 pt-0">
    <v-layout row justify-center fill-height class="pt-5" align-center>
      <v-flex xs10 md4 sm4 lg4>
        <h1 >Passionate Mobile and Web Apps Development Team</h1>
        <p>
          We are a team of like-minded people specialized in development of
          mobile and web applications.<br />
          have a project that requires technology?
          Then consider partnering with us Lets make the world a better place
          together.
        </p>
        <div class="text-center">
         <v-btn class="ma-2" outlined color="teal" large ><nuxt-link to="/contact" class="request-link">Request Service </nuxt-link></v-btn>
        </div>
      </v-flex>
      <v-flex xs10 md6 sm6 lg6>
        <img src="../assets/buildbrother.svg" width="100%" />
        <!-- <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style scoped>


.request-link {
  padding: 12px 16px;
  color: #000000d1;
}
.request-link:hover {
  /* text-decoration: underline; */
  color: teal;
  text-decoration-style: solid;
  /* text-decoration-width: 2px; */
  /* text-decoration: underline solid green 3px; */
}
</style>
