<template>
  <v-card class="mx-auto my-8" elevation="16" width="auto">
    <v-card-item>
      <v-checkbox></v-checkbox>
      <v-card-title> {{ data.title }} </v-card-title>
    </v-card-item>

    <v-card-text class="description">{{ data.description }} </v-card-text>

    <v-card-text>Status: {{ data.status }}</v-card-text>

    <v-card-text class="pt-0">Created at: {{ createdAt }}</v-card-text>

    <v-card-text class="pt-0">Data date: {{ dueDate }} </v-card-text>

    <v-card-text class="pt-0">
      <RouterLink :to="`/task/${data._id}`">Show more...</RouterLink>
    </v-card-text>

    <v-card-actions>
      <v-btn color="success" variant="elevated" @click="onChangeStatus">
        <v-icon v-if="active" icon="mdi-check-outline" />
        <v-icon v-else icon="mdi mdi-restore" />
      </v-btn>
      <v-btn color="warning" variant="elevated" @click="onEdit">
        <v-icon icon="mdi-archive-edit-outline" />
      </v-btn>
      <v-btn color="error" variant="elevated" @click="onDelete">
        <v-icon icon="mdi-delete-outline" />
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.description {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>


<script src="./task.js"></script>