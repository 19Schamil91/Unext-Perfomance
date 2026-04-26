/*
  Diese Datei definiert das wiederverwendbare mehrzeilige Texteingabefeld.
  Sie sorgt fuer dieselben visuelle Zustaende wie andere Eingabefelder im Projekt.
  Nutzer koennen laengere Nachrichten dadurch ruhiger und komfortabler schreiben.
*/
import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'border-input placeholder:text-muted-foreground/90 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-24 w-full rounded-xl border bg-background/95 px-3.5 py-2.5 text-base shadow-[0_2px_12px_rgba(15,23,42,0.06)] transition-[color,box-shadow,border-color,background-color] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
