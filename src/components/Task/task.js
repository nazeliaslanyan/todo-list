
export default {

  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    createdAt() {
      return this.data.created_at.slice(0, 10)
    },
    dueDate() {
      return this.data.date?.slice(0, 10) || 'none'
    },
    active() {
      return this.data.status === "active";
    }
  },

  methods: {
    onChangeStatus() {
      const task = {};
      task.status = this.data.status === "active" ? "done" : "active";
      this.$emit("changeTaskStatus", {
        ...this.data,
        ...task
      });
    },
    onEdit() {
      this.$emit('taskEdit')
    },
    onDelete() {
      this.$emit('taskDelete')
    }
  }
}
