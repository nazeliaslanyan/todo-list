<template>
  <v-layout class="pt-4 pb-4">
    <v-app-bar class="py-2" :elevation="1">
      <!-- <v-toolbar-side-icon>
        <v-img :src="require('@/assets/to-do-list-icon.png')"></v-img>
      </v-toolbar-side-icon> -->
      <v-btn v-for="menuItem in menuItems" :key="menuItem.title" rounded="xl" variant="text" class="mx-4">
        <RouterLink :to="menuItem.path" class="text-decoration-none active-link">{{
          menuItem.title }}
        </RouterLink>
      </v-btn>
    </v-app-bar>
  </v-layout>
</template>
<style>
.active-link {
  color: #0f2950;
  background-color: #f8f9fa;
  border-radius: 4px;
}
</style>

<script src="./header.js"></script>