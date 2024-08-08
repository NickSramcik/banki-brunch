import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface ButtonProps {
  size?: "xs" | "s" | "base" | "lg" | "xl"
  children: ReactNode
  type?: "solid" | "transparent"
  to?: string
  disabled?: boolean
  onClick?: () => unknown
}

const sizeClasses = {
  xs: "px-3 py-2 text-xs",
  s: "px-3 py-2 text-sm",
  base: "px-5 py-2.5 text-sm",
  lg: "px-5 py-3 text-base",
  xl: "px-6 py-3.5 text-base"
}

const typeClasses = {
  solid:
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
  transparent:
    "text-blue-700 bg-transparent border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-blue-300 dark:text-blue-600 dark:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800"
}

const disabledClass = "disabled:cursor-not-allowed"

function Button({
  children,
  size = "base",
  type = "solid",
  to,
  disabled,
  onClick
}: ButtonProps) {
  const sizeClass = sizeClasses[size] || sizeClasses.base
  const variantClass = typeClasses[type] || typeClasses.solid

  if (to)
    return (
      <Link
        to={to}
        className={`${sizeClass} ${variantClass} font-medium text-center  rounded-lg focus:ring-4 focus:outline-none`}
      >
        {children}
      </Link>
    )
  return (
    <button
      className={`${sizeClass} ${variantClass} ${disabledClass} font-medium text-center rounded-lg focus:ring-4 focus:outline-none`}
      onClick={onClick}
    >
      {!disabled ? children : <span>Loading...</span>}
    </button>
  )
}

export default Button
