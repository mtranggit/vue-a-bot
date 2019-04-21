<template>
  <div>
    <component :is="componentInstance" />
  </div>
</template>

<script>
export default {
  props: {
    isCompany: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  computed: {
    componentInstance() {
      const name = this.isCompany ? 'CompanyInfo' : 'UserInfo'
      return () => import(`../components/chunks/${name}`)
    },
  },
}
</script>

<style lang="scss" scoped></style>
