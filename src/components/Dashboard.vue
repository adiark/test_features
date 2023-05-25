<template>
  <div class="w-full bg-[url('../images/image.png')] bg-center bg-cover min-h-screen px-4 py-4">
    <NavBar />
    <div class="text-white mt-48 max-w-2xl">
      <div class="mt-10">
        <DemoComponent></DemoComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DemoComponent from '@/components/demo.vue'

export default defineComponent({
  name: 'Dashboard',
  components: {
    DemoComponent,
  },
  data() {
    return {
      showMenu: false,
    };
  },
});
</script>
