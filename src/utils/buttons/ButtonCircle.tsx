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
        className={`tr-c group relative flex h-32 w-32 items-center justify-center rounded-full border-1 ${
          open ? "border-red bg-grey-med-5" : "border-grey-med-5 hover:border-red hover:bg-grey-med-5"
        }`}
        onClick={handler}
      >
        {icon}
        <Wrapper open={news}>
          <div className={`absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full ${bg}`}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-36">
              <div className="h-4 w-4 rounded-full bg-red"></div>
            </div>
          </div>
        </Wrapper>
      </button>
    </>
  )
}

export default ButtonCircle
