import './assets/main.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import 'vue-toast-notification/dist/theme-default.css';
import { createApp } from 'vue'
import { createVuetify } from 'vuetify' 
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import ToastPlugin from 'vue-toast-notification';
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

const app = createApp(App)
app.use(vuetify)
app.mount('#app')
app.use(ToastPlugin, {
    duration:5000,
    position:"bottom-left",
    dismissible:true
  })
