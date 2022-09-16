import React from "react"

const ModalWalletBox = ({ children, shade, handler }: { children: any; shade?: JSX.Element; handler: any }) => {
  return (
    <>
      <button className="group relative flex h-124 items-start rounded-6 bg-grey-dark lg:h-88" onClick={handler}>
        <div className="tr-h relative h-122 w-full overflow-hidden rounded-6 group-hover:h-124 lg:h-86 lg:group-hover:h-88">
          <div className="flex h-full w-full items-center rounded-6 border-1 border-grey-med-6 bg-grey-med">
            <div className="grid w-full grid-cols-1 items-center lg:grid-cols-[5.25rem,1fr] lg:pt-0">{children}</div>
          </div>
          {shade}
        </div>
      </button>
    </>
  )
}

export default ModalWalletBox
