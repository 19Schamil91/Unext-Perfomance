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
  serviceName: _serviceName,
  serviceTitle: _serviceTitle,
  href,
  className,
  children,
  ...props
}: ServiceSelectionLinkProps) {
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  )
}
