import Event from "assets/img/events/event.png"
import CasinoThumb from "assets/img/news/casino/thumb.png"
import { NotificationType } from "libs/enums"
import moment from "moment"
import React from "react"

const Notification = ({
  title,
  text,
  type,
  handler
}: {
  title: string
  text: JSX.Element
  type: NotificationType
  handler?: any
}) => {
  return (
    <>
      <div className="relative w-full">
        {
          {
            [NotificationType.Explore]: <div className="absolute top-0 left-0"></div>,
            [NotificationType.Join]: <div className="absolute top-0 left-0"></div>
          }[type]
        }
        <div className="relative w-full overflow-hidden rounded-4 bg-grey-med-2">
          <div className="grid w-full grid-cols-[106px,1fr] gap-12 p-16">
            <div className="relative w-full">
              {
                {
                  [NotificationType.Explore]: (
                    <img alt="" className="ml-[-10px] w-[calc(100%+10px)] max-w-none" src={CasinoThumb} />
                  ),
                  [NotificationType.Join]: <img alt="" src={Event} />
                }[type]
              }
            </div>
            <div className="w-full pt-4">
              <div className="mb-8 w-full text-12 font-semibold text-white">{title}</div>
              <div className="w-full text-11 font-semibold text-grey-light-5">{text}</div>
            </div>
          </div>
          <div className="grid w-full grid-cols-[1fr,115px] border-t-1 border-grey-dark">
            <div className="w-full py-6 px-12 text-10 font-semibold capitalize text-grey-med-7">
              {moment().fromNow(true)} Ago
            </div>
            <button className="w-full" onClick={handler}>
              {
                {
                  [NotificationType.Explore]: (
                    <div className=" flex h-28 w-full items-center justify-center bg-yellow text-10 font-semibold text-yellow-dark">
                      Explore
                    </div>
                  ),
                  [NotificationType.Join]: (
                    <div className="flex h-28 w-full items-center justify-center bg-red text-10 font-semibold text-white">
                      Join
                    </div>
                  )
                }[type]
              }
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Notification
