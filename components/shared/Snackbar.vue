<template>
    <v-snackbar
      v-model="$store.state.snackbar.active"
    >
      {{ $store.state.snackbar.text }}

      <template v-slot:actions>
        <v-btn
          color="pink"
          variant="text"
          >
          <!-- @click="snackbar = false" -->
          Close
        </v-btn>
      </template>
    </v-snackbar>




</template>

<script>
export default {
    data: () => ({
    text: "This is a text"

    }),
}
</script>

<style>

</style>