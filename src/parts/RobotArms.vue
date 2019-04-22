<template>
  <div>
    <h2>Arms</h2>
    The arms are how your robot will interact with the world. They come in a variety of shapes and functions.
    <div v-for="(arm, index) in parts.arms" :key="index">
      <h4>{{ arm.title }}</h4>
      <div>{{ arm.description }}</div>
    </div>
  </div>
</template>

<script>
import getPartsMixin from './getPartsMixin.js'
// import parts from '../data/parts.js'

export default {
  name: 'RobotArms',
  mixins: [getPartsMixin],
  // data() {
  //   return {
  //     arms: this.parts.arms,
  //   }
  // },
}
</script>

<style lang="scss" scoped></style>
