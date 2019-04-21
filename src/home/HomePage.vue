<template>
  <div class="home">
    <div class="header">
      <button @click="isCompany = !isCompany">Toggle Company Prop</button>
      <!-- <GoodOldWay :isCompany="isCompany" />
      <ComponentWay :isCompany="isCompany" /> -->
      <DynamicWay :isCompany="isCompany" />
    </div>
    <div class="content">
      <img src="../assets/robot-home.png" alt="Robot" aria-hidden="true" class="robot" />
    </div>
    <div class="get-started">
      <router-link to="/build"> Get started</router-link>
      building a first robot!
    </div>
  </div>
</template>

<script>
// import GoodOldWay from '../components/Header'
// import ComponentWay from '../components/HeaderComponent'
import DynamicWay from '../components/HeaderDynamic'

export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
  components: {
    // GoodOldWay,
    // ComponentWay,
    DynamicWay,
  },
  data() {
    return {
      isCompany: false,
    }
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
