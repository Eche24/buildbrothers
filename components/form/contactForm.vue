<template>
  <div max-width="200">
    <h1 class="text-center">Get in Touch</h1>
    <p class="text-center pt-2" style="color: #37474F;">
      Please feel free to talk to us if you have any questions.
      <br />We endeavour to answer within 24 hours
    </p>
    <v-card flat>
      <v-alert type="success" class="alert" v-model="alert">your message has been sent </v-alert>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Name"
            v-model="name"
            :rules="inputRules"
            outlined
            color="teal"
          ></v-text-field>

          <v-text-field label="E-mail" v-model="email" :rules="emailRules" outlined color="teal"></v-text-field>
          <v-textarea label="Message" v-model="message" :rules="inputRules" outlined color="teal"></v-textarea>
          <div class="text-center">
            <v-btn class="mx-0 mt- px-3" color="green" @click="submit" large rounded>
              <v-icon class="pr-1" style="color: #092e40;">mdi-send</v-icon>
              <span
                class=""
                style="padding: 18px 0 16px;line-height: 1.34em;letter-spacing: -0.01em;"
              >submit message</span>
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import { fireDb } from "~/plugins/firebase.js"
export default {
  data() {
    return {
      alert: false,
      name: "",
      message: "",
      inputRules: [
        v => (v && v.length >= 3) || "minimum length is 3 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    submit(e) {
      
        e.preventDefault();

      if (this.$refs.form.validate()) {
        this.alert = true;
        const info = {
          name: this.name,
          email: this.email,
          message: this.message,
          date: new Date()
        };

        fireDb.collection("info")
          .add(info)
          .then(() => {
            setTimeout(() => {
              this.alert = false;
            }, 1000);

            this.$refs.form.reset();
          });
      }
    }
  }
}
</script>