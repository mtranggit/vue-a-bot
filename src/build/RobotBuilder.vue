<template>
  <div v-if="availableParts" class="robot-builder">
    <div class="content">
      <div class="preview">
        <CollapsibleSection>
          <div class="preview-content">
            <div class="top-row">
              <img :src="selectedRobot.head.src" />
            </div>
            <div class="middle-row">
              <img :src="selectedRobot.left.src" class="rotate-left" />
              <img :src="selectedRobot.torso.src" />
              <img :src="selectedRobot.right.src" class="rotate-right" />
            </div>
            <div class="bottom-row">
              <img :src="selectedRobot.base.src" />
            </div>
          </div>
        </CollapsibleSection>
        <button @click="addToCart()" class="add-to-cart">Add to cart</button>
      </div>

      <div class="top-row">
        <!-- <div :class="[saleBorderClass, 'top', 'part']"> -->
        <!-- <div class="top part" :class="[saleBorderClass]"> -->
        <!-- <div class="top part" :style="headerBorderStyle"> -->
        <!-- <div class="robot-name">
            {{ selectedRobot.head.title }}
            <span class="on-sale" v-if="selectedRobot.head.onSale">Sale!</span>
          </div> -->
        <PartSelector
          :parts="availableParts.heads"
          position="top"
          @partSelected="part => handlePartSelected('head', part)"
        />
        <!-- </div> -->
      </div>
      <div class="middle-row">
        <PartSelector
          :parts="availableParts.arms"
          position="left"
          @partSelected="part => (selectedRobot.left = part)"
        />
        <PartSelector
          :parts="availableParts.torsos"
          position="center"
          @partSelected="part => (selectedRobot.torso = part)"
        />
        <PartSelector
          :parts="availableParts.arms"
          position="right"
          @partSelected="part => (selectedRobot.right = part)"
        />
      </div>
      <div class="bottom-row">
        <PartSelector
          :parts="availableParts.bases"
          position="bottom"
          @partSelected="part => (selectedRobot.base = part)"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import availableParts from '../data/parts'
import robotBuilderMixin from './robotBuilderMixin'
import PartSelector from './PartSelector'
import CollapsibleSection from '../shared/CollapsibleSection'

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
    CollapsibleSection,
  },
  created() {
    this.$store.dispatch('getParts')
  },
  beforeRouteLeave(to, from, next) {
    if (this.addedToCart) {
      next(true)
    } else {
      const response = confirm('You have not added your robot to your cart, are you sure you want to leave this page?')
      next(response)
    }
  },
  mixins: [robotBuilderMixin],
  data() {
    return {
      cart: [],
      addedToCart: false,
      // availableParts,
      selectedRobot: {
        head: {},
        left: {},
        torso: {},
        right: {},
        base: {},
      },
    }
  },
  methods: {
    handlePartSelected(part, selectedPart) {
      this.selectedRobot[part] = selectedPart
    },
    addToCart() {
      const robot = this.selectedRobot
      // console.log(JSON.stringify(robot))
      const cost = robot.head.cost + robot.left.cost + robot.torso.cost + robot.right.cost + robot.base.cost
      const robotWithCost = {...robot, cost}
      this.$store.dispatch('addRobotToCart', robotWithCost).then(() => this.$router.push('/cart'))
      // this.$store.commit('addRobotToCart', robotWithCost)
      // this.cart.push({...robot, cost})
      this.addedToCart = true
    },
  },
  computed: {
    availableParts() {
      return this.$store.state.robots.parts
    },
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
  width: 210px;
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
.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
</style>
