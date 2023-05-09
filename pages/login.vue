<template>
    <v-app >
       <v-main>
          <v-container fluid fill-height>
             <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                   <v-card class="elevation-12">
                      <v-toolbar dark color="primary">
                         <v-toolbar-title>{{isRegister ? stateObj.register.name : stateObj.login.name}} form</v-toolbar-title>
                      </v-toolbar>
                      <v-card-text>
                      <form ref="form" @submit.prevent="isRegister ? register() : login()">
                             <v-text-field
                               v-model="email"
                               name="email"
                               label="email"
                               type="text"
                               placeholder="email"
                               required
                            ></v-text-field>
                            
                            
                            <v-text-field v-if="isRegister"
                            v-model="username"
                            name="username"
                            label="Username"
                            type="text"
                            placeholder="username"
                            required
                            ></v-text-field>
                            <v-text-field
                            v-model="password"
                            name="password"
                            label="Password"
                            type="password"
                            placeholder="password"
                            required
                            ></v-text-field>
                            <v-text-field v-if="isRegister"
                               v-model="confirmPassword"
                               name="confirmPassword"
                               label="Confirm Password"
                               type="password"
                               placeholder="cocnfirm password"
                               required
                            ></v-text-field>
                            <div class="red--text"> {{errorMessage}}</div>
                            <v-btn type="submit" class="mt-4" color="primary" value="log in">{{isRegister ? stateObj.register.name : stateObj.login.name}}</v-btn>
                            <div class="pointer grey--text mt-4" v-on:click="isRegister = !isRegister;">
                               {{toggleMessage}}  
                            </div>
                       </form>
                      </v-card-text>
                   </v-card>
                 
                </v-flex>
             </v-layout>
          </v-container>
       </v-main>
    </v-app>
 </template>
 
 <script>
 export default {
   name: "App",
   data() {
     return {
       email: "",
       username: "",
       password: "",
       confirmPassword: "",
       isRegister : false,
       errorMessage: "",
       stateObj: {
          register :{
             name: 'Register',
             message: 'Back to login.'
          },
          login : {
             name: 'Login',
             message: 'You have no account? Register here!'
          }
       }
     };
   },
   methods: {
     login() {

      let user = {
      email: this.email,
      password: this.password
         }
      let data = {
            method : 'POST',
            headers: {
               'Content-type': 'application/json',
            },
            body: JSON.stringify(user)
         }
      fetch(`http://localhost:3003/auth/login`, data)
      .then(res => res.json())
      .then((data) => {
      if(data.access_token){
      this.$store.commit('setUser', data)
      navigateTo('/to_do')}
      else{
          swal(`Unable to log in. Error: ${data.message}`)
      }
  })     
   },
     register() {
        if(this.password == this.confirmPassword){
           this.isRegister = false;
           this.errorMessage = "";
           this.$refs.form.reset();

           let user = {
               email: this.email,
               password: this.password,
               username: this.username
         }
            let data = {
                  method : 'POST',
                  headers: {
                     'Content-type': 'application/json',
                  },
                  body: JSON.stringify(user)
               }
      fetch(`http://localhost:3003/api/users`, data)
      .then(res => res.json())
      .then(data => console.log("user created"))
     }
        else {
          this.errorMessage = "password did not match"
        }
     }
   },
       computed: {
        toggleMessage : function() { 
           return this.isRegister ? this.stateObj.register.message : this.stateObj.login.message }
     }
 };
 </script>
 <style scoped>
 .pointer:hover {
  cursor: pointer;
 }
 </style>