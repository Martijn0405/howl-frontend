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
      <div className="relative w-full overflow-hidden rounded-[4px] bg-grey-med-2">
        {
          {
            [NotificationType.Explore]: (
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-yellow to-transparent opacity-[0.04]"></div>
            ),
            [NotificationType.Join]: (
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-red to-transparent opacity-[0.04]"></div>
            )
          }[type]
        }
        <div className="relative w-full">
          <div className="grid w-full grid-cols-[12.25rem,1fr] gap-[12px] p-16">
            <div className="relative w-full">
              {
                {
                  [NotificationType.Explore]: (
                    <img alt="" className="-ml-10 w-[calc(100%+0.625rem)] max-w-none" src={CasinoThumb} />
                  ),
                  [NotificationType.Join]: <img alt="" src={Event} />
                }[type]
              }
            </div>
            <div className="w-full pt-4">
              <div className="mb-8 w-full text-[12px] font-semibold text-white">{title}</div>
              <div className="w-full text-[11px] font-semibold text-grey-light-5">{text}</div>
            </div>
          </div>
          <div className="relative grid w-full grid-cols-[1fr,7.25rem]">
            <div className="absolute top-0 left-0 h-6 w-full translate-y-[-100%] transform bg-gradient-to-t from-black to-transparent opacity-[0.08]"></div>
            <div className="w-full py-[6px] px-[12px] text-[10px] font-semibold capitalize text-grey-med-7">
              {moment().fromNow(true)} Ago
            </div>
            <button className="w-full" onClick={handler}>
              {
                {
                  [NotificationType.Explore]: (
                    <div className=" flex h-[28px] w-full items-center justify-center bg-yellow text-[10px] font-semibold text-yellow-dark">
                      Explore
                    </div>
                  ),
                  [NotificationType.Join]: (
                    <div className="flex h-[28px] w-full items-center justify-center bg-red text-[10px] font-semibold text-white">
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
