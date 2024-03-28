<script setup lang="ts">
import { type VariantProps, cva } from 'class-variance-authority'

export type ButtonProps = VariantProps<typeof button>

withDefaults(defineProps<{ variant: ButtonProps['variant'], size: ButtonProps['size'] }>(), {
  variant: 'primary',
  size: 'medium'
})

const button = cva('button', {
  variants: {
    variant: {
      primary: 'primary',
      secondary: 'secondary'
    },
    size: {
      small: 'small',
      medium: 'medium'
    }
  },
  compoundVariants: [
    { variant: 'primary', size: 'medium', class: 'primary-medium' }
  ]
})
</script>

<template>
  <button :class="button({ variant, size })">
    <slot />
  </button>
</template>

<style scoped>
.button {
  font-family: inherit;
  display: inline-flex;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;

  transition-property: all;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .15s
}

.primary {
  color: hsl(var(--primary-foreground));
  background-color: hsl(var(--primary));
  border: transparent;
}

.primary:hover {
  background-color: hsl(var(--primary) / .9);
}

.secondary {
  color: hsl(var(--accent-foreground));
  background-color: hsl(var(--accent));
  border-color: hsl(var(--border));
}

.secondary:hover {
  background-color: hsl(var(--accent) / .9);
}

.small {
  /* 14px */
  font-size: 0.875rem;
  /* 20px */
  line-height: 1.25rem;
  padding: 0.25rem 0.5rem;
}

.medium {
  /* 16px */
  font-size: 1rem;
  /* 24px */
  line-height: 1.5rem;
  padding: 0.5rem 1rem;
}

.primary-medium {
  text-transform: uppercase;
}
</style>
