<template>
  <div>
    <company-info v-if="isCompany" />
    <user-info v-else />
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
}
</script>

<style lang="scss" scoped></style>
