import { RippleButton } from "libs/ripples"
import React from "react"

const Button = ({ title, handler, full, active }: { title: string; handler: any; full?: boolean; active: boolean }) => {
  return (
    <>
      <button
        className={`group relative flex h-44 items-start rounded-4 ${
          active ? "bg-red-dark" : "cursor-not-allowed bg-grey-med-2"
        } ${full ? "w-full" : ""}`}
        disabled={!active}
      >
        <RippleButton className="w-full rounded-4">
          <div
            className={`relative flex h-42 w-full items-center justify-center rounded-4 px-16 text-14 font-semibold ${
              active ? "bg-red text-white group-hover:bg-red-light" : "bg-grey-med-6 text-grey-med-7"
            }`}
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
