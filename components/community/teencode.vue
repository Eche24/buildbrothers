<template>
  <v-container fluid>
    <v-layout row align-center justify-center wrap>
      <v-flex xs10 md10 sm10 lg10>
        <h2 class="mt-4">Our Numbers</h2>
        <v-row>
          <template v-for="(item, i) in items">
            <v-col :key="i" cols="12" md="4" sm="4" lg="4">
              <v-card   :style="{ 'background-color': item.color}" >
                <v-card-title class="title black--text hover">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                   
                  >
                    <p
                      class="mt-4 subheading text-center white--text"
                      style="font-size: 180%; font-weight: 900;"
                    >
                      {{ item.title }}
                    </p>

                    <div>
                      <p
                        class="ma-0 font-weight-bolder text-center text-capitalize white--text"
                        style="font-size: 100%;"
                      >
                        {{ item.text }}
                      </p>
                    </div>
                  </v-row>
                </v-card-title>
              </v-card>
            </v-col>
          </template>
        </v-row>
        <h2 class="mt-4">About TeenCode</h2>
        <p>
          Since 2017, we partner with schools to deliver free computer science
          and coding (scratch) to young students. With the help of local
          volunteer software developers and CS teachers, we have been able do
          deliver trainings in 2 cities in Benue state, Nigeria. We will like to
          do more, if you are a school principal or some good samaritan that
          wants to support our mission, feel free to shoot us a mail via
          info@buildbrothers.com
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: '100+ ',
        text: 'Students reached ',
        color: '#ff0000c7'
      },
      {
        title: '4',
        text: 'Schools reached ',
        color:'green'
      },
      {
        title: '10+',
        text: 'Facilitators ',
        color:'#ffc107'
      },
    ],
    transparent: 'rgba(255, 255, 255, 0)',
  }),
}
</script>
