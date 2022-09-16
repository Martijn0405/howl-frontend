import React from "react"

const ModalShade = ({ bg }: { bg: string }) => {
  return (
    <>
      <div
        className={`absolute bottom-0 left-0 h-50 w-50 translate-x-[-50%] translate-y-[50%] transform blur-75 filter ${bg}`}
      ></div>
    </>
  )
}

export default ModalShade
