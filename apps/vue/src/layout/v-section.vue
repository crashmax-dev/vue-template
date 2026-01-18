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
  margin: 0 auto;
  padding: 16px;
  max-width: 1024px;

  &-enter-active,
  &-leave-active {
    transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
  }

  &-enter-from,
  &-leave-to {
    transform: scale(0.98);
    opacity: 0;
  }
}
</style>
