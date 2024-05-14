<template>
  <v-card-title class="text-center text-h4 text-md-h5 text-lg-h3 mt-16">Contact us</v-card-title>
  <v-card-text class="text-center text-h6">For inquiries, feedback, or assistance,
    please feel free to reach out to us.
    <p>We value your communication and strive to provide prompt responses to all inquiries.</p>
  </v-card-text>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-sheet class="mx-auto pb-6 w-100" max-width="500">
          <v-form ref="form">
            <v-text-field v-model.trim="name" :rules="nameRules" label="Name" required></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="Email" required type="email"></v-text-field>
            <v-textarea label="Message" v-model.trim="message"></v-textarea>

            <div class="btn-outer-container">
              <div class="d-flex flex-column">
                <v-btn class="mt-4" color="success" block @click="sendForm"> Send </v-btn>
                <v-btn class="mt-4" color="error" block @click="reset"> Reset Form </v-btn>
              </div>
            </div>

          </v-form>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row v-if="emailSent" align="center" justify="center">
      <v-col cols="12" lg="12">
        <v-card class="mx-auto my-8 w-100 pa-3" elevation="10" max-width="500">
          <v-card-item class="pa-2 pl-4" align="center">
            <v-card-title>Your email has been sent!</v-card-title>
          </v-card-item>
          <RouterLink to="/">
            <v-btn color="primary" @click="toggleMessage">
              ⟸ main page </v-btn>
          </RouterLink>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<style scoped>
h2 {
  color: #0f2950;
  text-align: center;
}
</style>

<script src="./contact.js"></script>