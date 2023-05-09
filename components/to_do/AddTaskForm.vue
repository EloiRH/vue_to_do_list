<template>
      <v-text-field
      v-model="nTaskTitle"
      @click:append="addTask()"
      @keyup.enter="addTask()"
      class="pa-2"
      outlined
      label="New task"
      append-icon="mdi-plus"
      hide-details
      clearable
      ></v-text-field>
</template>

<script>
export default {
      data() {
    return{
      nTaskTitle: "",

    }
  },
  methods: {
    addTask () {
      this.$store.dispatch('addTask', this.nTaskTitle)
      this.nTaskTitle = ''
    },
  },
}
</script>