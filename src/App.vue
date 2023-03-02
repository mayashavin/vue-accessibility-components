<script setup>
import Tooltip from './components/Tooltip.vue';

const tooltipsIds = {
  top: 'tooltip__text_top',
  bottom: 'tooltip__text_bottom',
  left: 'tooltip__text_left',
  right: 'tooltip__text_right'
}
</script>
<template>
  <div>
    <h1>Tooltip demos</h1>
    <div class="tooltips-demo">
      <Tooltip text="I'm the top tooltip" position="top" :tooltip-id="tooltipsIds.top">
        <button :aria-describedby="tooltipsIds.top">Top</button>
      </Tooltip>
      <Tooltip text="I'm the right tooltip" position="right" :tooltip-id="tooltipsIds.right">
        <button :aria-describedby="tooltipsIds.right">Right</button>
      </Tooltip>
      <Tooltip text="I'm the bottom tooltip" position="bottom" :tooltip-id="tooltipsIds.bottom">
        <button :aria-describedby="tooltipsIds.bottom">Bottom</button>
      </Tooltip>
      <Tooltip text="I'm the left tooltip" position="left" :tooltip-id="tooltipsIds.left">
        <button :aria-describedby="tooltipsIds.left">Left</button>
      </Tooltip>
    </div>
    <div class="tooltips-demo">
      <button v-tooltip.top="'I am the top tooltip'">Top</button>
      <button v-tooltip="{ text: 'Im the bottom tooltip', position: 'bottom', tooltipId: tooltipsIds.bottom }">bottom</button>
      <button v-tooltip="{ text: 'Im the right tooltip', position: 'right', tooltipId: tooltipsIds.right }">Right</button>
      <button v-tooltip="{ text: 'Im the left tooltip', position: 'left', tooltipId: tooltipsIds.left }">Left</button>
  </div>
    
  </div>
</template>
<style scoped>
.tooltips-demo {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 10px;
}

.tooltips-demo button {
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  width: 80px;
  background: #e03f73;
  color: white;
}
</style>