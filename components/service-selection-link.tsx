"use client"

import type { ReactNode } from "react"
import Link, { type LinkProps } from "next/link"

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
  void serviceName
  void serviceTitle

  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  )
}
