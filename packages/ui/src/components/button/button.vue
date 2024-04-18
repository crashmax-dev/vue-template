<script setup lang="ts">
import { type VariantProps, cva } from 'class-variance-authority'

export type ButtonProps = VariantProps<typeof button>

withDefaults(
  defineProps<{
    variant?: ButtonProps['variant']
    size?: ButtonProps['size']
  }>(),
  {
    variant: 'primary',
    size: 'small'
  }
)

const button = cva('button', {
  variants: {
    variant: {
      primary: 'primary',
      secondary: 'secondary',
      outline: 'outline',
      destructive: 'destructive'
    },
    size: {
      small: 'small',
      medium: 'medium'
    }
  },
  compoundVariants: [
    {
      variant: 'primary',
      size: 'medium'
    }
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
  border-radius: calc(var(--radius) - 2px);
  border-color: hsl(var(--border));
  cursor: pointer;
  touch-action: manipulation;
  user-select: none;
  inline-size: fit-content;

  transition-property: all;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .15s
}

/* primary */
.primary {
  color: hsl(var(--primary-foreground));
  background-color: hsl(var(--primary));
  border-color: transparent;
}

.primary:hover {
  background-color: hsl(var(--primary) / .9);
}

/* secondary */
.secondary {
  color: hsl(var(--accent-foreground));
  background-color: hsl(var(--accent));
}

.secondary:hover {
  background-color: hsl(var(--accent) / .9);
}

/* outline */
.outline {
  color: hsl(var(--accent-foreground));
  background-color: hsl(var(--background));
}

.outline:hover {
  color: hsl(var(--accent-foreground));
  background-color: hsl(var(--accent));
}

.destructive {
  color: hsl(var(--destructive-foreground));
  background-color: hsl(var(--destructive));
  border-color: transparent;
}

.destructive:hover {
  background-color: hsl(var(--destructive) / .9);
}

/* sizez */
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
