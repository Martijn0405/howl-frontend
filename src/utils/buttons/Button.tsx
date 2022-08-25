import React from "react"

const Button = ({ title, handler }: { title: string; handler: any }) => {
  return (
    <>
      <button className="group relative flex h-44 items-start rounded-4 bg-red-dark px-16" onClick={handler}>
        <div className="tr absolute top-0 left-0 h-40 w-full rounded-4 bg-red group-hover:h-44"></div>
        <div className="tr relative flex h-42 items-center text-14 font-semibold text-white group-hover:h-44">
          {title}
        </div>
      </button>
    </>
  )
}

export default Button
