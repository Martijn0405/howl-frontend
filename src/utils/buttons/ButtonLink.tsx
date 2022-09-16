import { RippleButton } from "libs/ripples"
import React from "react"
import { Link } from "react-router-dom"

const ButtonLink = ({
  title,
  link,
  full,
  handlerSide
}: {
  title: string
  link: any
  full?: boolean
  handlerSide?: any
}) => {
  return (
    <>
      <div className={`group relative flex h-[44px] items-start rounded-[4px] bg-red-dark ${full ? "w-full" : ""}`}>
        <RippleButton className="w-full rounded-[4px]">
          <Link
            className="relative flex h-[42px] w-full items-center justify-center rounded-[4px] bg-red px-[16px] text-[14px] font-semibold text-white group-hover:bg-red-light"
            to={link}
            onClick={() => {
              console.log("link")
              if (handlerSide) {
                handlerSide()
              }
            }}
          >
            {title}
          </Link>
        </RippleButton>
      </div>
    </>
  )
}

export default ButtonLink
