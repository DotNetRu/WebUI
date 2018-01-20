<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <router-link to="/editor" active-class="active" class="nav-link">Editor</router-link>

    </li>
    <li class="nav-item">
      <router-link to="/result" active-class="active" class="nav-link">Result</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
  export default {
    name: 'talkpad-nav'
  }
</script>

<style scoped>

</style>
