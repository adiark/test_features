<template>
    <form class="w-full max-w-xs mx-auto mt-5 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="submitForm">
        <div class="mb-4 text-center">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="input-text">
                Input Text
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="input-text" type="text" placeholder="Enter some text" v-model="inputText">
            <div v-if="error" class="text-red-500 mt-2">Please fill in the text field.</div>
        </div>
        <div class="flex items-center justify-center">
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Submit
            </button>
        </div>
        <component :is="loadedComponent" :inputData="inputText" v-if="loadedComponent" />
    </form>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { saveFormData } from '@/api';
import { Allpages } from '@/components/demo';
import { loadComponent } from '@/func';

const inputText = ref('');
const error = ref(false);
const loadedComponent = ref(null);

const submitForm = async () => {
    if (inputText.value) {
        error.value = false;
        const response = await saveFormData(inputText.value);
        if (response && response.data.status === 'success') {
            loadedComponent.value = await loadComponent(Allpages[inputText.value].componentpath);
        } else {
            console.log('Error saving data: ', response?.data.message);
        }
    } else {
        error.value = true;
    }
};
</script>


  