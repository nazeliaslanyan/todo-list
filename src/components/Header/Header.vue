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


<script src="./header.js"></script>
