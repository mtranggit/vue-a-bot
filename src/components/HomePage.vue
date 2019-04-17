<template>
  <div class="home">
    <div>
      <img src="../assets/robot-home.png" alt="Robot" aria-hidden="true" class="robot" />
    </div>
    <div class="get-started"><a href>Get started</a> building a first robot!</div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
}
</script>

<style scoped>
.home {
  text-align: center;
}

.robot {
  height: 300px;
}
</style>
