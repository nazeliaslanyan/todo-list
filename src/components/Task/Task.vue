<template>
    <template>
        <v-card
          class="mx-auto my-8"
          elevation="16"
          max-width="344"
        >
          <v-card-item>
            <v-card-title>
                {{data.title}}
            </v-card-title>
      
           
          </v-card-item>
      
          <v-card-text>{{data.description}} </v-card-text>

          <v-card-text>Status: {{data.status}}</v-card-text>

          <v-card-text>Created at: {{data.created_at}}</v-card-text>

          <v-card-text>Data date: {{data.date}} </v-card-text>
        </v-card>
      </template>

</template>


<script src="./task.js"></script>