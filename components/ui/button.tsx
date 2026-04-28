/*
  Diese Datei definiert die wiederverwendbare Button-Komponente der Website.
  Sie steuert das visuelle Erscheinungsbild fuer alle Button-Varianten und Groessen.
  Nutzer koennen damit auf allen Seiten klar erkennbare Aktionen ausfuehren.
*/
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "group inline-flex max-w-full items-center justify-center gap-2 rounded-xl text-center text-sm font-semibold [text-wrap:balance] transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/55 focus-visible:ring-[3px] focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-[0_10px_24px_rgba(15,23,42,0.18)] hover:-translate-y-0.5 hover:bg-primary/92 hover:shadow-[0_14px_30px_rgba(15,23,42,0.23)] active:translate-y-0',
        destructive:
          'bg-destructive text-white shadow-[0_10px_24px_rgba(127,29,29,0.24)] hover:-translate-y-0.5 hover:bg-destructive/92 hover:shadow-[0_14px_30px_rgba(127,29,29,0.28)] active:translate-y-0 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border border-border/80 bg-background/95 text-foreground shadow-[0_8px_20px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 hover:border-primary/35 hover:bg-accent/70 hover:text-accent-foreground active:translate-y-0 dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground shadow-[0_8px_20px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 hover:bg-secondary/88 active:translate-y-0',
        ghost:
          'hover:bg-accent/75 hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'min-h-10 px-4 py-2.5 has-[>svg]:px-3.5',
        sm: 'min-h-9 rounded-lg gap-1.5 px-3 py-2 has-[>svg]:px-2.5',
        lg: 'min-h-11 rounded-xl px-6 py-3 has-[>svg]:px-4',
        icon: 'size-10',
        'icon-sm': 'size-9',
        'icon-lg': 'size-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
