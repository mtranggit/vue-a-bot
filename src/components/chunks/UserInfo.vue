<template>
  <div>
    <h2>User Info</h2>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data() {
    return {
      firstName: 'John',
      lastName: 'Smith',
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
  },
}
</script>

<style lang="scss" scoped></style>
