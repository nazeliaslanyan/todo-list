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
      const taskId = this.$route.params.taskId
      taskApi
        .getSingleTask(taskId)
        .then((task) => {
          this.task = task
        })
        .catch(this.handleError)
    },

    onTaskSave(editingTask) {
      this.toggleLoading();
      this.task = editingTask;
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
    onChangeStatus() {
      this.task.status === 'active' ? this.task.status = 'done' : this.task.status = 'active';
      this.toggleLoading()
      taskApi
        .updateTask(this.task)
        .then(() => {
          let message;
          if (this.task.status === 'done') {
            message = 'The task is Done successfully!'
          }
          else {
            message = 'The task is restored successfully!'
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
