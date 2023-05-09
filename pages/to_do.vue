<template>
  <div class="tasks">
    <AddTaskForm />
    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="post" class="content">
      <TaskList v-if="$store.state.tasks.length"/>
      <NoTasks v-else />
    </div>
  </div>
</template>

<script>
export default {
  name: 'to_do',
  data() {
    return {
      loading: false,
      post: null,
      error: null,
      user: this.$store.user
    }
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData()
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  },
  methods: {
  //   fetchData() {
  //     this.error = this.post = null
  //     this.loading = true
  //     // replace `getPost` with your data fetching util / API wrapper
  //     getPost(this.$route.params.id, (err, post) => {
  //       this.loading = false
  //       if (err) {
  //         this.error = err.toString()
  //       } else {
  //         this.post = post
  //       }
  //     })
  //     fetch(`http://localhost:3003/api/tasks`), {
  //       method: "POST",
  //       headers: {
  //         'Content-Type': 'content/type'
  //       },
  //       body: {
  //         user: this.user
  //       }
  //       .then(res => res.json())
  //       .then(data => console.log(data))
  //     }
  //   },
  // },
  mounted: {
    getTasks() {
      // this.error = this.post = null
      // this.loading = true
      // replace `getPost` with your data fetching util / API wrapper
      // getPost(this.$route.params.id, (err, post) => {
      //   this.loading = false
      //   if (err) {
      //     this.error = err.toString()
      //   } else {
      //     this.post = post
      //   }
      // })
      let data = {
            method : 'POST',
            headers: {
               'Content-type': 'application/json',
            },
            body: JSON.stringify(user)
         }
      fetch(`http://localhost:3003/api/tasks`, data) 
        .then(res => res.json())
        .then(data => console.log(data))
      }
    },

    

  }
  }
</script>
