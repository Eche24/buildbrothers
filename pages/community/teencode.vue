<template>
  <div class="">
    <v-carousel hide-delimiters cycle :show-arrows="false">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      </v-carousel-item>
    </v-carousel>
    <TEENCODE />
  </div>
</template>
<script>
import  TEENCODE  from '@/components/community/teencode.vue'    
export default {
    components: {
        TEENCODE
    },
  data() {
    return {
      items: [
        {
          src:
            'https://firebasestorage.googleapis.com/v0/b/st-jos.appspot.com/o/teencode-otobi6.jpg?alt=media&token=64797469-931e-4ed7-9c55-cfff6b289335',
        },
        {
          src:
            'https://firebasestorage.googleapis.com/v0/b/st-jos.appspot.com/o/teencode-otobi9.jpg?alt=media&token=2e00e123-e9f2-4ac2-9e3c-f8ae341e39d3',
        },

        {
          src:
            'https://firebasestorage.googleapis.com/v0/b/st-jos.appspot.com/o/teencode-otobi11.jpg?alt=media&token=33842549-f5c9-43e1-9c29-d209ba8a1092',
        },
      ],
      cycle: true,
    }
  }
  ,
   head () {
    return {
      title: 'Teencode Africa',

    }
  }
}
</script>
<style scoped>
.overlay {
  /* opacity: 1;
      background: rgba(129, 199, 132, 0.47); */
}
.textover {
  line-height: 1.5em;
  text-shadow: 2px 2px 2px #000;
}
</style>
