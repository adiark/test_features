<!-- Child Component -->
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    loadedComponent: Function,
    inputData: String
});
console.log(`Message from parent: ${props.inputData}`);
</script>
