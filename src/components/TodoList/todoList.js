
import TaskModal from '../TaskModal/TaskModal.vue'  
import Task from '../Task/Task.vue'    
import TaskApi from '../../utils/taskApi.js'

const taskApi = new TaskApi()

export default {
  components: {
    TaskModal,
    Task
  },
  data() {
    return {
      isTaskModalOpen: false,
      tasks: []
    }
  },
  created() {
    this.getTasks()
   
  },
  methods: {
    toggleTaskModal() {
      this.isTaskModalOpen = !this.isTaskModalOpen
    },
    
    getTasks() {
      taskApi
        .getTasks()
        .then((tasks) => {
          this.tasks = tasks
        })
        .catch((err) => {
          this.$toast.error(err.message)
        })
        },
        onTaskSave(task) {
          taskApi
            .addNewTask(task)
        .then((newTask) => {
          this.tasks.push(newTask)
          this.toggleTaskModal()
          this.$toast.success("The task have been created successfully!")
         })
        .catch((err) => {
          this.$toast.error(err.message)
        })
    }
  }
}