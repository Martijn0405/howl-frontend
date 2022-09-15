import { RippleButton } from "libs/ripples"
import React from "react"

const ButtonGrey = ({
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
        className={`group relative flex h-44 items-start rounded-4 ${
          active ? "bg-grey-med-5" : "cursor-not-allowed bg-grey-med-2"
        } ${full ? "w-full" : ""}`}
        disabled={!active}
      >
        <RippleButton className="w-full rounded-4">
          <div
            className={`relative flex h-42 w-full items-center justify-center rounded-4 px-16 text-14 font-semibold ${
              active ? "bg-grey-med-7 text-white group-hover:bg-grey-light" : "bg-grey-med-6 text-grey-med-7"
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

export default ButtonGrey
