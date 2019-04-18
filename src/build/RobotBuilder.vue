<template>
  <div>
    <div class="top-row">
      <div class="top part">
        <img :src="availableParts.heads[selectedHeadIndex].src" title="head" />
        <button class="prev-selector" @click="selectPreviousHead()">&#9668;</button>
        <button class="next-selector" @click="selectNextHead()">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="availableParts.arms[selectedLeftArmIndex].src" title="left arm" />
        <button class="prev-selector" @click="selectPreviousLeftArm()">&#9650;</button>
        <button class="next-selector" @click="selectNextLeftArm()">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="availableParts.torsos[selectedTorsoIndex].src" title="torso" />
        <button class="prev-selector" @click="selectPreviousTorso()">&#9668;</button>
        <button class="next-selector" @click="selectNextTorso()">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="availableParts.arms[selectedRightArmIndex].src" title="right arm" />
        <button class="prev-selector" @click="selectPreviousRightArm()">&#9650;</button>
        <button class="next-selector" @click="selectNextRightArm()">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="availableParts.bases[selectedBaseIndex].src" title="base" />
        <button class="prev-selector" @click="selectPreviousBase()">&#9668;</button>
        <button class="next-selector" @click="selectNextBase()">&#9658;</button>
      </div>
    </div>
  </div>
</template>

<script>
import availableParts from '../data/parts'

function getPreviousValidIndex(index, length) {
  const idx = index - 1
  return idx < 0 ? length - 1 : idx
}

function getNextValidIndex(index, length) {
  const idx = index + 1
  return idx > length - 1 ? 0 : idx
}

// eslint-disable-next-line no-unused-vars
function titleCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export default {
  name: 'RobotBuilder',
  data() {
    return {
      availableParts,
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedRightArmIndex: 0,
      selectedTorsoIndex: 0,
      selectedBaseIndex: 0,
    }
  },
  methods: {
    selectPreviousHead() {
      this.selectedHeadIndex = getPreviousValidIndex(this.selectedHeadIndex, availableParts.heads.length)
    },
    selectNextHead() {
      this.selectedHeadIndex = getNextValidIndex(this.selectedHeadIndex, availableParts.heads.length)
    },
    selectPreviousLeftArm() {
      this.selectedLeftArmIndex = getPreviousValidIndex(this.selectedLeftArmIndex, availableParts.arms.length)
    },
    selectNextLeftArm() {
      this.selectedLeftArmIndex = getNextValidIndex(this.selectedLeftArmIndex, availableParts.arms.length)
    },
    selectPreviousRightArm() {
      this.selectedRightArmIndex = getPreviousValidIndex(this.selectedRightArmIndex, availableParts.arms.length)
    },
    selectNextRightArm() {
      this.selectedRightArmIndex = getNextValidIndex(this.selectedRightArmIndex, availableParts.arms.length)
    },
    selectPreviousTorso() {
      this.selectedTorsoIndex = getPreviousValidIndex(this.selectedTorsoIndex, availableParts.torsos.length)
    },
    selectNextTorso() {
      this.selectedTorsoIndex = getNextValidIndex(this.selectedTorsoIndex, availableParts.torsos.length)
    },
    selectPreviousBase() {
      this.selectedBaseIndex = getPreviousValidIndex(this.selectedBaseIndex, availableParts.bases.length)
    },
    selectNextBase() {
      this.selectedBaseIndex = getNextValidIndex(this.selectedBaseIndex, availableParts.bases.length)
    },
    computed: {
      headIndex() {
        return this.selectedHeadIndex
      },
    },
  },
}
</script>

<style scoped>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
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
</style>
