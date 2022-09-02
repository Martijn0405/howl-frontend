import React from "react"

const ModalBody = ({ children, open }: { children: any; open: boolean }) => {
  return (
    <>
      <div
        className={`tr-a absolute top-0 left-[50%] max-w-full translate-x-[-50%] transform duration-500 ${
          open ? "z-[2] opacity-100" : "z-[1] opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  )
}

export default ModalBody
