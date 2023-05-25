<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-8 text-gray-700">Sign Up</h2>
      <form @submit.prevent="signup">
        <div class="mb-6">
          <label for="email" class="block mb-2 font-semibold text-gray-600">Email</label>
          <input
            id="email"
            type="email"
            v-model="email"
            required
            class="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 font-semibold text-gray-600">Password</label>
          <input
            id="password"
            type="password"
            v-model="password"
            required
            class="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
          />
        </div>
        <div class="mb-8">
          <label for="repassword" class="block mb-2 font-semibold text-gray-600">Re-Type your Password</label>
          <input
            id="repassword"
            type="password"
            v-model="repassword"
            required
            class="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
          />
        </div>
        <button
          type="submit"
          class="w-full py-2 px-4 text-center bg-purple-600 rounded-md text-white text-sm hover:bg-purple-500 focus:outline-none"
        >
          Sign Up
        </button>
      </form>
        <div class="flex justify-center">
            <router-link
            to="/login"
            class="text-center inline-block mt-4 text-purple-600 hover:text-purple-500"
          >
            Already have an account? Log in
          </router-link>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'signup',
  data() {
    return {
      email: '',
      password: '',
      repassword: '',
    };
  },
  methods: {
    signup() {
      if (this.password !== this.repassword) {
        alert('Passwords do not match');
      } else {
        this.$emit('signup', this.email, this.password);
      }
    },
  },
});
</script>

<style>
/* Add any custom styles or animations here */
</style>
