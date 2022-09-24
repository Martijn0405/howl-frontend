import React from "react"

const ModalShade = ({ bg, from }: { bg: string; from: string }) => {
  return (
    <>
      <div className="absolute top-0 left-0 flex h-full w-full items-center rounded-[6px] bg-grey-med-6"></div>
      <div
        className={`absolute top-0 left-0 flex h-full w-full items-center rounded-[6px] bg-gradient-to-r to-grey-med-6 ${from} tr-o opacity-[.15] group-hover:opacity-100`}
      ></div>
      <div className="absolute top-0 left-0 flex h-full w-full rounded-[6px] border-[1px] border-transparent">
        <div className="h-full w-full rounded-[5px] bg-grey-med"></div>
      </div>
      <div
        className={`tr-a absolute bottom-0 left-0 h-[50px] w-[50px] translate-x-[-50%] translate-y-[50%] transform blur-[50px] filter group-hover:w-[100px] group-hover:blur-[50px] ${bg}`}
      ></div>
    </>
  )
}

export default ModalShade
