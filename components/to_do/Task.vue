<template>
        <div>
          <v-list-item
          @click="$store.commit(`taskDone`, task.taskId)"
          >
            <template v-slot:default>
              <v-list-item-action>
                  <v-checkbox 
                  :input-value="task.done"
                  color="purple"
                  ></v-checkbox>
                </v-list-item-action>
                <v-list-item-subtitle
                :class="{ 'text-decoration-line-through' : task.done }">
                {{ task.title }}
              </v-list-item-subtitle>
              <v-btn icon
              @click.stop="dialogues.delete= true"
              >
              <!-- $store.commit(`deleteTask`, task.taskId) -->
                <v-icon color="purple">mdi-delete</v-icon>
              </v-btn>
            </template>
            <template v-slot:append>
            </template>
          </v-list-item>
        <v-divider></v-divider>
        <ConfirmDelete v-if="dialogues.delete" :task="task"/>
      </div>

</template>

<script>
export default {
props: [`task`],
data() {
  return {
    dialogues: {
      delete: false
    }

  }
}
}
</script>
