import { RippleButton } from "libs/ripples"
import React from "react"

const Button = ({ title, handler, full }: { title: string; handler: any; full?: boolean }) => {
  return (
    <>
      <button className={`group relative flex h-44 items-start rounded-4 bg-red-dark ${full ? "w-full" : ""}`}>
        <RippleButton className="w-full">
          <div
            className="relative flex h-42 w-full items-center justify-center rounded-4 bg-red px-16 text-14 font-semibold text-white group-hover:bg-red-light"
            onClick={handler}
          >
            {title}
          </div>
        </RippleButton>
      </button>
    </>
  )
}

export default Button
