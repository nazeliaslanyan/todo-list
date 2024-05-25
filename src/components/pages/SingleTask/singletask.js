import { mapMutations } from 'vuex';
import TaskApi from '../../../utils/taskApi'
import TaskModal from '@/components/TaskModal/TaskModal.vue';

const taskApi = new TaskApi()

export default {
  components: {
    TaskModal
  },
  data() {
    return {
      task: null,
      isEditModalOpen: false,
    }
  },
  created() {
    this.getTask()
  },
  computed: {
    createdAt() {
      return this.task.created_at.slice(0, 10)
    },
    dueDate() {
      return this.task.date?.slice(0, 10) || 'none'
    },
    checked() {
      return this.task.status === "active" ? "success" : "primary";
    },
    active() {
      return this.task.status === "active";
    }
  },

  methods: {
    ...mapMutations(['toggleLoading']),

    toggleTaskModal() {
      this.isEditModalOpen = !this.isEditModalOpen;
    },

    getTask() {
      this.toggleLoading();
      const taskId = this.$route.params.taskId
      taskApi
        .getSingleTask(taskId)
        .then((task) => {
          this.task = task
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading();
        })
    },

    onTaskSave(editingTask) {
      this.toggleLoading();
      taskApi
        .updateTask(editingTask)
        .then(() => {
          this.toggleTaskModal();
          this.$toast.success('The task has been updated successfully!');
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading();
        })
    },
    onChangeStatus(editingTask) {
      const editedTask = {
        ...this.task,
        status: this.task.status === 'active' ? 'done' : 'active'
      }
      this.toggleLoading()
      taskApi
        .updateTask(editingTask)
        .then((updatedTask) => {
          this.task = updatedTask
          let message;
          if (updatedTask.status === 'done') {
            message = 'The task has been done!'
          }
          else {
            message = 'The task has been restored!'
          }
          this.$toast.success(message)
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },
    onDelete() {
      this.toggleLoading();
      const taskId = this.task._id
      taskApi
        .deleteTask(taskId)
        .then(() => {
          this.$router.push('/')
          this.$toast.success('The task has been deleted successfully!')
        })
        .catch(this.handleError)

        .finally(() => {
          this.toggleLoading();
        })
    },

    handleError(error) {
      this.$toast.error(error.message)
    }
  }
}
