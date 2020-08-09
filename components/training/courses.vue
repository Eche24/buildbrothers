<template>
  <v-layout row align-center justify-center fill-height class="bg-color px-8">
    <v-flex xs12 sm10 md10 lg10>
      <h2 class="text-center">Training Program</h2>
      <p class="text-center pb-5">Teaching relevant technologies and skills.</p>
      <v-row dense class>
        <v-col
          cols="10"
          sm="5"
          md="5"
          lg="5"
          v-for="item in courses"
          :key="item.id"
          class="mx-auto pb-4"
        >
          <v-card
            class="text-xs-center"
            max-width="420"
            height="350"
            flat
            style="background: linear-gradient(115.11deg,#f4f8fc,#d5dfed);"
            outlined
          >
            <!-- <v-card-actions>
            <img
              :src="item.images"
              width="20%"
              style="padding-top:2px;"
              :alt="item.alt"
            />
            </v-card-actions>-->
            <h1 class="text-center pa-3" style="font-size:130%;  color: teal;">{{ item.name}}</h1>

            <v-divider></v-divider>
            <v-card-text class="text-center" >
              <p class="text--primary"  style="font-size:120%;  color: teal;">{{item.text}}</p>
            </v-card-text>
            <v-card-text class="text-center pt-0">
             <v-chip color=""  style="font-size:110%; font-weight:600;">Duration: {{item.duration}}</v-chip>
            </v-card-text>
            <v-card-text class="text-center pt-0">
              <v-chip class="text--primary" color=""  style="font-size:110%; font-weight:600;">{{item.content}}</v-chip>
            </v-card-text>
            <v-card-text  style="font-weight:600">
                 To enrol contact: <span style="font-size110%; color:teal;"> info@buildbrothers.com or 08052465145 </span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
  <!-- </v-container> -->
</template>
<script>
export default {
  data() {
    return {
      courses: [
        {
          name: 'Web development',
          text: 'Front-end Web Development Basics',
          duration: ' 4 weeks',
          content: 'HTML, CSS, JavaScript (VueJs)',
        },
        {
          name: 'Mobile development',
          text: 'Android Apps development Basics',
          duration: ' 5 weeks',
          content: 'Native Android, Java/Kotlin, SQLite',
        },
        {
          name: 'UX/UI Design',
          text: 'UI design with Figma',
          duration: ' 3 weeks',
          content: 'Figma, Material Design',
        },
        {
          name: 'Digital marketing',
          text: 'Starting and growing a blog like a pro',
          duration: ' 2 weeks',
          content: 'WordPress, SEO, Analytics',
        },
      ],
      // items: [
      //   { text: 'My Files', icon: 'mdi-folder' },
      //   { text: 'Shared with me', icon: 'mdi-account-multiple' },
      //   { text: 'Starred', icon: 'mdi-star' },
      //   { text: 'Recent', icon: 'mdi-history' },
      //   { text: 'Offline', icon: 'mdi-check-circle' },
      //   { text: 'Uploads', icon: 'mdi-upload' },
      //   { text: 'Backups', icon: 'mdi-cloud-upload' },
      // ],
    }
  },
}
</script>

<style scoped>
.bg-color {
  padding: 3em 0 3em 0;
  /* background: linear-gradient(115.11deg, #f4f8fc, #d5dfed); */
  background: rgb(247, 247, 247);
}
</style>
