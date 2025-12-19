<template>
  <button
    class="btn"
    :class="`btn-${variant}`"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant: 'primary' | 'secondary' | 'icon' | 'danger'
}>()
</script>

<style scoped lang="scss">
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1rem;
  border: 1px solid transparent;
  border-radius: var(--radius);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  white-space: nowrap;

  &:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  &-primary {
    background: hsl(var(--primary));
    color: hsl(var(--primary-foreground));

    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  }

  &-secondary {
    background: hsl(var(--secondary));
    color: hsl(var(--secondary-foreground));

    &:hover:not(:disabled) {
      opacity: 0.8;
    }
  }

  &-icon {
    background: hsl(var(--background));
    color: hsl(var(--foreground));
    border: 1px solid hsl(var(--border));

    &:hover:not(:disabled) {
      background: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }
  }

  &-danger {
    background: hsl(var(--destructive));
    color: hsl(var(--destructive-foreground));
    white-space: nowrap;
    border: 1px solid hsl(var(--destructive));

    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  }
}
</style>
