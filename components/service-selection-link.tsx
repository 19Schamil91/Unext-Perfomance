"use client"

import type { ReactNode } from "react"
import Link, { type LinkProps } from "next/link"
import { storageKeys, writeStorage } from "@/lib/browser-storage"

interface ServiceSelectionLinkProps extends LinkProps {
  serviceName: string
  serviceTitle: string
  className?: string
  children: ReactNode
}

export function ServiceSelectionLink({
  serviceName,
  serviceTitle,
  href,
  className,
  children,
  ...props
}: ServiceSelectionLinkProps) {
  const hrefValue = typeof href === "string" ? href : href.pathname ?? ""

  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        writeStorage(storageKeys.lastSelectedService, {
          serviceName,
          serviceTitle,
          href: hrefValue,
          savedAt: new Date().toISOString(),
        })
      }
      {...props}
    >
      {children}
    </Link>
  )
}

