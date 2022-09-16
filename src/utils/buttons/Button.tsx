import { RippleButton } from "libs/ripples"
import React from "react"

const Button = ({
  title,
  handler,
  full,
  active,
  handlerSide
}: {
  title: string
  handler: any
  full?: boolean
  active: boolean
  handlerSide?: any
}) => {
  return (
    <>
      <button
        className={`group relative flex h-[44px] items-start rounded-[4px] ${
          active ? "bg-red-dark" : "cursor-not-allowed bg-grey-med-2"
        } ${full ? "w-full" : ""}`}
        disabled={!active}
      >
        <RippleButton className="w-full rounded-[4px]">
          <div
            className={`relative flex h-[42px] w-full items-center justify-center rounded-[4px] px-[16px] text-[14px] font-semibold ${
              active ? "bg-red text-white group-hover:bg-red-light" : "bg-grey-med-6 text-grey-med-7"
            }`}
            onClick={() => {
              handler()
              handlerSide()
            }}
          >
            {title}
          </div>
        </RippleButton>
      </button>
    </>
  )
}

export default Button
