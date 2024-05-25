<template>

  <v-container>
    <task-modal v-if="isEditModalOpen" :isOpen="isEditModalOpen" :editingTask="task" @close="toggleTaskModal"
      @taskSave="onTaskSave" />
  </v-container>

  <v-card-title class="text-center text-h4 text-md-h5 text-lg-h3 mt-16"> Your Task</v-card-title>
  <v-card v-if="task" class="mx-auto mb-2 mt-10 ps-5" elevation="16" color="white-lighten-5" max-width="600">
    <v-card-item>
      <v-card-title class="text-wrap text-center"> {{ task.title }} </v-card-title>
    </v-card-item>
    <v-card-text>
      {{ task.description }}
    </v-card-text>

    <v-card-text class="pt-0 text-center"> Status: {{ task.status }} </v-card-text>

    <v-card-text class="pt-0 text-center"> Created at: {{ createdAt }} </v-card-text>

    <v-card-text class="pt-0 text-center"> Due date: {{ dueDate }} </v-card-text>


    <v-card-actions class="d-flex justify-center">
      <v-btn :color="checked" variant="elevated" @click="onChangeStatus(task)">
        <v-icon v-if="active" icon="mdi-check-outline" />
        <v-icon v-else icon="mdi mdi-restore" />
      </v-btn>
      <v-btn color="warning" variant="elevated" @click="toggleTaskModal">
        <v-icon icon="mdi-archive-edit-outline" />
      </v-btn>
      <v-btn color="error" variant="elevated" @click="onDelete">
        <v-icon icon="mdi-delete-outline" />
      </v-btn>
    </v-card-actions>
  </v-card>
  <h4 v-else>Task not found!</h4>
</template>

<script src="./singletask.js"></script>