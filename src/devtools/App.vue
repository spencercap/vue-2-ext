<template>
  <div>
    <p>devtools:</p>
    <hello-world />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default Vue.extend({
	name: 'App',
	components: { HelloWorld }
});
</script>
