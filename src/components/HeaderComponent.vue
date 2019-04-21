<template>
  <div>
    <component :is="componentName" />
  </div>
</template>

<script>
import CompanyInfo from '../components/chunks/CompanyInfo'
import UserInfo from '../components/chunks/UserInfo'

export default {
  props: {
    isCompany: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  components: {
    CompanyInfo,
    UserInfo,
  },
  computed: {
    componentName() {
      return this.isCompany ? 'company-info' : 'user-info'
    },
  },
}
</script>

<style lang="scss" scoped></style>
