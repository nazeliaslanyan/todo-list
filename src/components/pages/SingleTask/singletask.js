
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
    toggleTaskModal() {
      this.isEditModalOpen = !this.isEditModalOpen
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

    onTaskSave() {
    },

    onChangeStatus() {
    },

    onEdit() {

    },
    onSave(updatedTask) {
      console.log('updatedTask', updatedTask)
    },
    onDelete() {
      const taskId = this.task._id
      taskApi
        .deleteTask(taskId)
        .then(() => {
          this.$router.push('/')
          this.$toast.success('The task have been deleted successfully!')
        })
        .catch(this.handleError)
    },
    handleError(error) {
      this.$toast.error(error.message)
    }
  }
}
