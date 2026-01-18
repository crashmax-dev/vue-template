<template>
  <primitive
    :as="as"
    :as-child="asChild"
    :class="buttonClasses({ variant, size })"
  >
    <slot />
  </primitive>
</template>

<script setup lang="ts">
import { cva } from 'class-variance-authority'
import { Primitive } from 'reka-ui'
import type { VariantProps } from 'class-variance-authority'
import type { PrimitiveProps } from 'reka-ui'
import type { ButtonHTMLAttributes } from 'vue'

type ButtonClasses = VariantProps<typeof buttonClasses>

interface Props extends /* @vue-ignore */ ButtonHTMLAttributes, PrimitiveProps {
  variant?: ButtonClasses['variant']
  size?: ButtonClasses['size']
}

defineOptions({
  name: 'VButton',
})

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  as: 'button',
})

const buttonClasses = cva('button', {
  variants: {
    variant: {
      primary: 'variant-primary',
      secondary: 'variant-secondary',
      danger: 'variant-danger',
    },
    size: {
      small: 'size-small',
      medium: 'size-medium',
    },
  },
})
</script>

<style scoped lang="scss">
.button {
  --button-padding: 0.5rem 1rem;
  display: inline-flex;
  transition-duration: 0.15s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: none;
  border-radius: calc(var(--radius) - 2px);
  background-color: var(--button-background);
  padding: var(--button-padding);
  inline-size: fit-content;
  touch-action: manipulation;
  color: var(--button-color);

  font-family: inherit;
  user-select: none;

  /** variants */
  &.variant {
    &-primary {
      --button-color: hsl(var(--primary-foreground));
      --button-background: hsl(var(--primary));

      &:hover {
        --button-background: hsl(var(--primary) / 0.9);
      }
    }

    &-secondary {
      --button-color: hsl(var(--accent-foreground));
      --button-background: hsl(var(--accent));

      &:hover {
        --button-background: hsl(var(--accent) / 0.9);
      }
    }

    &-danger {
      --button-color: hsl(var(--destructive-foreground));
      --button-background: hsl(var(--destructive));

      &:hover {
        --button-background: hsl(var(--destructive) / 0.9);
      }
    }
  }

  /** sizes */
  &.size {
    &-small {
      /* 14px */
      font-size: 0.875rem;
      /* 20px */
      line-height: 1.25rem;
      --button-padding: 0.25rem 0.5rem;
    }

    &-medium {
      /* 16px */
      font-size: 1rem;
      /* 24px */
      line-height: 1.5rem;
    }
  }

  /* attributes */
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
