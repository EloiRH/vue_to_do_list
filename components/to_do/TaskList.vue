<template>
  <v-list 
    class="pt=0"
    >
      <div class="text-h6 primary--text"> To Do</div>
      <Task 
        v-for="task in tasks"
        :key="task.taskId"
        :task="task"
        />
  </v-list> 
</template>

<script>
export default {
    computed: {
    tasks () {
      return this.$store.state.tasks
    }
  },
}
</script>
