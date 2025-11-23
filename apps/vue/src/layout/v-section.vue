<template>
  <router-view v-slot="{ Component, route }">
    <transition
      name="section"
      mode="out-in"
    >
      <section
        :key="route.path"
        class="section"
      >
        <component :is="Component" />
      </section>
    </transition>
  </router-view>
</template>

<style scoped lang="scss">
.section {
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;

  &-enter-active,
  &-leave-active {
    transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scale(0.98);
  }
}
</style>
