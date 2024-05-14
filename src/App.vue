<script>
import { mapGetters } from 'vuex'
import '../src/app.css';
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import Loader from './components/Loader/Loader.vue'
export default {
  components: {
    HeaderComponent: Header,
    FooterComponent: Footer,
    Loader
  },
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>

<template>
  <div class="wrapper">
    <Loader v-if="isLoading" />
    <HeaderComponent />
    <main class="main-container">
      <RouterView />
    </main>
    <FooterComponent />
  </div>
</template>
