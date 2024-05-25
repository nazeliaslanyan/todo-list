<template>
  <v-container>
    <task-modal v-if="isTaskModalOpen" :isOpen="isTaskModalOpen" :editingTask="editingTask" @close="toggleTaskModal"
      @taskSave="onTaskSave" @taskAdd="onTaskAdd" />

    <confirm-dialog :isOpen="isDeleteDialogOpen" title="Attention!" :text="confirmDialogText"
      @close="toggleDeleteDialog" @confirm="onSelectedTasksDelete" />

    <v-card-title class="text-center text-h4 text-md-h5 text-lg-h3 mt-5">Welcome to our To Do List page!</v-card-title>
    <v-card-text class="text-center text-h6">Here, you can efficiently manage your tasks with just a few
      clicks. <i>
        <p> Whether you need to add, delete, edit, or restore tasks, our
          intuitive interface makes it simple.</p>
      </i>
    </v-card-text>
    <v-row justify="center">
      <v-col cols=" auto" class="d-flex pa-7" sm=" 6">
        <v-btn color="info" @click="toggleTaskModal">Add new task</v-btn>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <v-row>
      <v-col v-for="taskData in tasks" :key="taskData._id" cols="12" xs="12" sm="6" md="4" lg="3">
        <task :data="taskData" :isSelected="selectedTasks.has(taskData._id)" @changeTaskStatus="onTaskChecked"
          @taskEdit="onTaskEdit(taskData)" @taskSelect="toggleTaskId(taskData._id)"
          @taskDelete="onTaskDelete(taskData._id)" />
      </v-col>
    </v-row>
  </v-container>
  <v-btn :disabled="isDeleteSelectedBtnDisabled" class="delete-selected-btn" color="error" variant="elevated"
    @click="toggleDeleteDialog">
    <v-icon icon="mdi-delete-outline" /> Delete selected
  </v-btn>

</template>


<script src="./todoList.js"></script>

<style scoped>
h4,
h2 {
  color: #0f2950;
  text-align: center;
}

.delete-selected-btn {
  position: fixed;
  right: -146px;
  bottom: 140px;
}

.delete-selected-btn:hover {
  animation-name: btn-animation;
  animation-duration: 0.8s;
  right: 20px;
}

@keyframes btn-animation {
  from {
    right: -156px;
  }

  to {
    right: 20px;
  }
}
</style>