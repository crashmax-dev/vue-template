<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
