import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<"a"> {
  children: string
}

export function NavLink({ children, ...rest }: NavLinkProps) {
  return (
    <a href="" className="font-medium text-sm" {...rest}>{children}</a>
  )
}