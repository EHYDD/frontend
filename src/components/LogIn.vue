<template>
    <div class="login flex justify-center items-center min-h-screen bg-[#181818] rounded-3xl rounded-tl-none shadow-xl text-green-500 py-8 px-6">
      <div class="form-container w-full max-w-md flex flex-col items-center">
        <h2 class="text-center mb-8 text-3xl font-bold">Login</h2>
        <form @submit.prevent="handleSubmit" class="glassy-form rounded-lg border border-zinc-700 px-4 py-6 backdrop-filter backdrop-blur-md bg-opacity-50">
          <label for="username" class="mb-2 block">Username:</label>
          <input type="text" id="username" v-model="loginForm.username" required class="w-full border border-zinc-700 rounded-lg mb-2 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          <label for="password" class="mb-2 block">Password:</label>
          <input type="password" id="password" v-model="loginForm.password" required class="w-full border border-zinc-700 rounded-lg mb-4 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 mr-8">Log In</button>
          <a href="#" class="text-green-300 hover:text-green-100 mt-4">Forgot password?</a>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      onLogin: {
        type: Function,
        default: () => {}
      }
    },
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
        }
      }
    },
    methods: {
      handleSubmit() {
        console.log('Login form submitted:', this.loginForm);
        this.$emit('onLogin', this.loginForm);
      }
    }
  }
  </script>
  