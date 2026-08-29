import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = { children: ReactNode; to?: string; variant?: 'primary' | 'ghost' } & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, to, variant = 'primary', className = '', ...props }: Props) {
  const classes = `btn btn-${variant} ${className}`.trim()
  if (to) return <Link className={classes} to={to}>{children}</Link>
  return <button className={classes} {...props}>{children}</button>
}
