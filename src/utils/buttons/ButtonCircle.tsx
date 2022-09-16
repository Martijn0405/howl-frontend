import Wrapper from "components/wrapper/Wrapper"
import React from "react"

const ButtonCircle = ({
  icon,
  open,
  handler,
  news,
  bg
}: {
  icon: JSX.Element
  open: boolean
  handler: any
  news: boolean
  bg: string
}) => {
  return (
    <>
      <button
        className={`tr-c group relative flex h-[32px] w-[32px] items-center justify-center rounded-full border-[1px] ${
          open ? "border-red bg-grey-med-5" : "border-grey-med-5 hover:border-red hover:bg-grey-med-5"
        }`}
        onClick={handler}
      >
        {icon}
        <Wrapper open={news}>
          <div
            className={`absolute -top-[4px] -right-[4px] flex h-[16px] w-[16px] items-center justify-center rounded-full ${bg}`}
          >
            <div className="flex h-[10px] w-[10px] items-center justify-center rounded-full bg-red-36">
              <div className="h-[4px] w-[4px] rounded-full bg-red"></div>
            </div>
          </div>
        </Wrapper>
      </button>
    </>
  )
}

export default ButtonCircle
