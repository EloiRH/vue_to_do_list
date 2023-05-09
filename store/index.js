export const state = () => ({
    tasks: [],
    user: {}
  })
  
  export const getters = {
  }
  
  export const mutations = {
    setUser(state, user){
      state.user = user
    },

    addTask(state, nTaskTitle){
        let newTask = {
          taskId: state.tasks.length + 1,
          title: nTaskTitle,
          done: false
        }
        state.tasks.push(newTask);
      },
    taskDone(state, id) {
        let task = state.tasks.filter(task => task.taskId === id)[0];
        task.done = !task.done;
    },
    deleteTask(state, id){
        state.tasks = state.tasks.filter(task => task.taskId !== id)
      },
    showSnackbar(state){
      state.snackbar.active = true
    }
  }
  
  export const actions = {
addTask({commit}, nTaskTitle){
  commit ('addTask', nTaskTitle)
  commit ('showSnackbar' )
}
  }
   