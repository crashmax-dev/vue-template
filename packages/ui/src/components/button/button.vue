<script setup lang="ts">
import { type VariantProps, cva } from 'class-variance-authority'
import { Primitive, type PrimitiveProps } from 'radix-vue'

import type { ButtonHTMLAttributes } from 'vue'

type ButtonVariants = VariantProps<typeof buttonVariants>

interface Props extends /* @vue-ignore */ ButtonHTMLAttributes, PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
}

defineOptions({
  name: 'VButton'
})

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  as: 'button'
})

const buttonVariants = cva('button', {
  variants: {
    variant: {
      primary: 'primary',
      secondary: 'secondary',
      outline: 'outline',
      danger: 'danger'
    },
    size: {
      small: 'small',
      medium: 'medium'
    }
  }
})
</script>

<template>
  <primitive
    :as="as"
    :as-child="asChild"
    :class="buttonVariants({ variant, size })"
  >
    <slot />
  </primitive>
</template>

<style scoped>
.button {
  font-family: inherit;
  display: inline-flex;
  cursor: pointer;
  touch-action: manipulation;
  user-select: none;
  inline-size: fit-content;

  border-width: 1px;
  border-style: solid;
  border-radius: calc(var(--radius) - 2px);

  transition-property: all;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .15s;

  color: var(--button-color);
  background-color: var(--button-background);
  border-color: var(--button-border-color);
}

/* primary */
.primary {
  --button-color: hsl(var(--primary-foreground));
  --button-background: hsl(var(--primary));
  --button-border-color: transparent;
}

.primary:hover {
  --button-background: hsl(var(--primary) / .9);
}

/* secondary */
.secondary {
  --button-color: hsl(var(--accent-foreground));
  --button-background: hsl(var(--accent));
}

.secondary:hover {
  --button-background: hsl(var(--accent) / .9);
}

/* outline */
.outline {
  --button-color: hsl(var(--accent-foreground));
  --button-background: hsl(var(--background));
}

.outline:hover {
  color: hsl(var(--accent-foreground));
  --button-background: hsl(var(--accent));
}

.danger {
  --button-color: hsl(var(--destructive-foreground));
  --button-background: hsl(var(--destructive));
  --button-border-color: transparent;
}

.danger:hover {
  --button-background: hsl(var(--destructive) / .9);
}

/* attributes */
[disabled] {
  pointer-events: none;
  opacity: .5;
}

/* sizes */
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
</style>
