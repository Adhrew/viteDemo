<template>
  <div class="basic">
    <header>
      <div class="box">
        123
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
    height: 70px;
    width: 100%;
    background: $top_head_bg;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
</style>