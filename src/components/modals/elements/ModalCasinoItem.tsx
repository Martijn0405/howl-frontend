import React from "react"
import ButtonGrey from "utils/buttons/ButtonGrey"
import ButtonLink from "utils/buttons/ButtonLink"

const ModalCasinoItem = ({
  title,
  text,
  button,
  image,
  handler,
  link,
  border,
  handlerClose
}: {
  title: string
  text: string
  button: string
  image: string
  handler?: any
  link?: string
  border: string
  handlerClose: any
}) => {
  return (
    <>
      <div className="relative w-full p-[1px]">
        <div className={`absolute top-0 left-0 h-full w-full rounded-[4px] border-[1px] ${border}`}></div>
        <div className="absolute top-0 left-0 h-full w-full rounded-[4px] bg-gradient-to-r from-transparent to-grey-med-3"></div>
        <div className="relative grid w-full grid-cols-1 gap-[16px] rounded-[3px] bg-grey p-[20px] shadow-inset">
          <div className="relative w-full pt-[68%]">
            <img alt="" className="absolute -top-[18px] left-0 right-0" src={image} />
          </div>
          <div className="grid w-full grid-cols-1 gap-[12px]">
            <div className="w-full text-center text-[14px] font-bold text-white">{title}</div>
            <div className="w-full text-center text-[12px] font-semibold text-grey-light-4">{text}</div>
          </div>
          <div className="flex w-full justify-center">
            <div className="w-[154px]">
              {handler ? (
                <ButtonGrey handler={handler} handlerSide={handlerClose} title={button} active full />
              ) : (
                <ButtonLink handlerSide={handlerClose} link={link} title={button} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalCasinoItem
