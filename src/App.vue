<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link :to="{name: 'Home'}" class="nav-link" exact>
              <img src="./assets/build-a-bot-logo.png" alt="Build a bot" class="logo" />
              Build-a-bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Build'}" class="nav-link">
              Build
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Browse'}" class="nav-link">
              Browse
            </router-link>
          </li>
          <li class="nav-item cart">
            <router-link :to="{name: 'Cart'}" class="nav-link">
              Cart
            </router-link>
            <div class="cart-items">
              {{ cart.length }}
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"></router-view>
      </aside>
      <main>
        <router-view />
        <!-- <robot-builder /> -->
        <!-- <RobotBuilder /> -->
        <!-- <home-page /> -->
      </main>
    </div>
  </div>
</template>

<script>
// import HomePage from './home/HomePage.vue'
// import RobotBuilder from './build/RobotBuilder.vue'

export default {
  name: 'app',
  // components: {
  //   RobotBuilder,
  //   // HomePage,
  // },
  computed: {
    cart() {
      return this.$store.state.robots.cart
    },
  },
}
</script>

<style lang="scss">
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
main {
  /* margin: 0 auto; */
  padding: 30px;
  background-color: white;
  width: 964px;
  /* width: 1024px; */
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1184px;
  /* width: 1084px; */
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  cursor: pointer;
  border-right: 1px solid #bbb;
  &.cart {
    position: relative;
    margin-left: auto;
    border-right: none;
  }
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: white;
}
.container {
  display: flex;
  margin: 10px auto 0;
  justify-content: center;
}
.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
.cart-items {
  position: absolute;
  top: -12px;
  right: -15px;
  font: 18px;
  width: 25px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: #ffc600;
}
</style>
