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
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  cursor: pointer;
  outline: none;
  border: 1px solid transparent;
  border-radius: var(--radius);
  padding: 0.625rem 1rem;
  font-weight: 500;
  font-size: 0.875rem;
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
    border: 1px solid hsl(var(--border));
    background: hsl(var(--background));
    color: hsl(var(--foreground));

    &:hover:not(:disabled) {
      background: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }
  }

  &-danger {
    border: 1px solid hsl(var(--destructive));
    background: hsl(var(--destructive));
    color: hsl(var(--destructive-foreground));
    white-space: nowrap;

    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  }
}
</style>
