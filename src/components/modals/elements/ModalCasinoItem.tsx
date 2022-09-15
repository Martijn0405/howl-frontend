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
      <div className="relative w-full p-1">
        <div className={`absolute top-0 left-0 h-full w-full rounded-4 border-1 ${border}`}></div>
        <div className="absolute top-0 left-0 h-full w-full rounded-4 bg-gradient-to-r from-transparent to-grey-med-3"></div>
        <div className="relative grid w-full grid-cols-1 gap-16 rounded-[3px] bg-grey p-20 shadow-inset">
          <div className="relative w-full pt-[68%]">
            <img alt="" className="absolute left-0 top-[-18px]" src={image} />
          </div>
          <div className="grid w-full grid-cols-1 gap-12">
            <div className="w-full text-center text-14 font-bold text-white">{title}</div>
            <div className="w-full text-center text-12 font-semibold text-grey-light-4">{text}</div>
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
