<template>
  <v-container fluid class="pb-0 pt-0">
    <v-layout row justify-center fill-height class="pt-5" align-center>
      <v-flex xs10 md4 sm4 lg4>
         <span class="training-subtitle">work with us</span>
      <h1 style="font-size: 3.25rem;" class="pt-2 pb-4">code, apps and impact delivered</h1>
      <!-- <p style="font-size:110% line-height: 1.52em;font-weight: 400;">
        New technologies combined with constantly evolving computing tools makes continuous learning a no-brainer for IT professionals.
        Training from BuildBrother ensures that you and your company stay on the leading edge.
      </p> -->
    <div class="text-center">
                <v-btn class="my-2 pa-3"   color="teal" large style="font-weight:500;" dark >
                  Call Us: 08052465145 <br/> Email: info@buildbrothers.com
                </v-btn>
              </div>
      </v-flex>
      <v-flex xs10 md6 sm6 lg6>
        <img src="~/assets/project.svg" width="100%" />
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
