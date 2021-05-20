<template>
  <div class="box-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BoxContainer'
}
</script>

<style lang="scss" scoped>
.box-container {
  height: 100%;
}
</style>