<template>
  <div>
    <h2>{{ part.title }}</h2>
    <p>{{ part.description }}</p>
  </div>
</template>

<script>
import parts from '../data/parts.js'

export default {
  props: {
    partType: {
      type: String,
      required: true,
    },
    id: {
      type: [String, Number],
      validator: function(value) {
        return Number.isInteger(Number(value))
      },
    },
  },
  computed: {
    part() {
      const {partType, id} = this
      // const {partType, id} = this.$route.params
      return parts[partType].find(part => part.id === +id)
    },
  },
}
</script>

<style lang="scss" scoped></style>
