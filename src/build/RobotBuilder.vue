<template>
  <div class="robot-builder">
    <div class="content">
      <button @click="addToCart()" class="add-to-cart">Add to cart</button>
      <div class="top-row">
        <!-- <div :class="[saleBorderClass, 'top', 'part']"> -->
        <!-- <div class="top part" :class="[saleBorderClass]"> -->
        <!-- <div class="top part" :style="headerBorderStyle"> -->
        <!-- <div class="robot-name">
            {{ selectedRobot.head.title }}
            <span class="on-sale" v-if="selectedRobot.head.onSale">Sale!</span>
          </div> -->
        <PartSelector />
        <!-- </div> -->
      </div>
      <div class="middle-row">
        <PartSelector />
        <PartSelector />
        <PartSelector />
      </div>
      <div class="bottom-row">
        <PartSelector />
      </div>
    </div>
    <div class="cart">
      <h2>Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <td>{{ robot.head.title }}</td>
            <td class="cost">{{ robot.cost }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import availableParts from '../data/parts'
import robotBuilderMixin from './robotBuilderMixin'
import PartSelector from './PartSelector'

// eslint-disable-next-line no-unused-vars
function titleCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export default {
  name: 'RobotBuilder',
  // created() {
  //   console.log('Robot builder component created')
  // },
  components: {
    PartSelector,
  },
  mixins: [robotBuilderMixin],
  data() {
    return {
      cart: [],
      availableParts,
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedRightArmIndex: 0,
      selectedTorsoIndex: 0,
      selectedBaseIndex: 0,
    }
  },
  methods: {
    selectedRobot() {
      return {
        head: {},
        left: {},
        torso: {},
        right: {},
        base: {},
      }
    },
    addToCart() {
      const robot = this.selectedRobot
      const cost = robot.head.cost + robot.left.cost + robot.torso.cost + robot.right.cost + robot.base.cost
      this.cart.push({...robot, cost})
    },
  },
  computed: {
    // headerBorderStyle() {
    //   return {
    //     border: this.selectedRobot.head.onSale ? '3px solid red' : '3px solid #aaa',
    //   }
    // },
    // saleBorderClass() {
    //   return this.selectedRobot.head.onSale ? 'sale-border' : ''
    // },
  },
}
</script>

<style lang="scss" scoped></style>

<style lang="scss" scoped>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part {
  img {
    width: 165px;
  }
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
}
.on-sale {
  color: red;
}
.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  right: 30px;
  width: 220px;
  padding: 3px;
  font-size: 16px;
}
td,
th {
  text-align: left;
  padding: 5px 20px 5px 5px;
}
.cost {
  text-align: right;
}
.sale-border {
  border: 3px solid red;
}
</style>
