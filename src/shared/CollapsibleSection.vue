<template>
  <div>
    <div class="header">
      <span v-if="open" @click="toggleOpen">&#x25B2; Collapse</span>
      <span v-if="!open" @click="toggleOpen">&#x25BC; Expand</span>
    </div>
    <!-- Toggeable content -->
    <slot v-if="open"></slot>
  </div>
</template>

<script>
export default {
  name: 'CollapsibleSection',
  data() {
    return {
      open: true,
    }
  },
  methods: {
    toggleOpen() {
      this.open = !this.open
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #bbb;
  padding: 3px;
  cursor: pointer;
}
</style>
