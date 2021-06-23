<template>
  <div class="basic">
    <header>
      <div class="box">

      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "basic_layout"
  }
</script>

<style scoped lang="scss">
  header {
    position: fixed;
    top: 0;
  }
</style>