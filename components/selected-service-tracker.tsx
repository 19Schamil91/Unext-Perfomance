"use client"

import { useEffect } from "react"
import { storageKeys, writeStorage } from "@/lib/browser-storage"

interface SelectedServiceTrackerProps {
  serviceName: string
  serviceTitle: string
  href?: string
}

export function SelectedServiceTracker({
  serviceName,
  serviceTitle,
  href,
}: SelectedServiceTrackerProps) {
  useEffect(() => {
    writeStorage(storageKeys.lastSelectedService, {
      serviceName,
      serviceTitle,
      href,
      savedAt: new Date().toISOString(),
    })
  }, [href, serviceName, serviceTitle])

  return null
}
