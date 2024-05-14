<template>

  <div class="nav-menu">

    <v-container>
      <v-row align="center">
        <v-col cols="auto">
          <v-img :src="logoPage" alt="to-do-list-logo" class="logo"></v-img>
        </v-col>
        <v-col cols="auto">
          <router-link v-for="menuItem in menuItems" :key="menuItem.path" :to="menuItem.path" class="nav-link"
            :active-class="'active-link'">
            {{ menuItem.title }}
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>


<style scoped>
.nav-menu {
  background-color: #f8f9fa;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
}

.nav-link {
  text-decoration: none;
  color: #0f2950;
  padding: 0 10px;
}

.nav-link:hover {
  color: #efa00b;
}

.logo {
  width: 90px;
  height: auto;
  transform: scale(1.1);
}
</style>

<script src="./header.js"></script>
