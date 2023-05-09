<template>
   <v-dialog

    :value="true"
      persistent
      width="auto"
    >
      <v-card>
        <v-card-title class="text-h5">
          Delete task
        </v-card-title>
        <v-card-text>Are you sure you want to DELETE this task?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="purple-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="red"
            variant="text"
            @click="dialog = false"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
props: [`task`]
}
</script>

<style>

</style>