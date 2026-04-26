/*
  Diese Datei definiert den Absende-Button fuer Formulare.
  Sie zeigt waehrend des Sendens einen Ladekreis und sperrt den Button.
  Nutzer koennen damit Kontakt- und Service-Anfragen eindeutig absenden.
*/
"use client"

import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

type Props = {
  submitLabel: string
  pendingLabel: string
}

export function FormSubmitButton({ submitLabel, pendingLabel }: Props) {
  // Dieser Wert kommt vom Formular und zeigt, ob die Anfrage gerade gesendet wird.
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Spinner className="mr-2" />
          {pendingLabel}
        </>
      ) : (
        submitLabel
      )}
    </Button>
  )
}
