import Wrapper from "components/wrapper/Wrapper"
import { NotificationTabType } from "libs/enums"
import React from "react"

const NotificationsTab = ({
  tab,
  handler,
  selected,
  news
}: {
  tab: NotificationTabType
  handler: any
  selected: NotificationTabType
  news?: boolean
}) => {
  return (
    <>
      <button
        className={`tr-c group flex items-center justify-center border-b-2 py-10 ${
          tab === selected ? "border-red" : "border-grey-med-2 hover:border-red"
        }`}
        onClick={() => handler(tab)}
      >
        <div
          className={`tr-c relative text-12 font-semibold ${
            tab === selected ? "text-white" : "text-grey-light group-hover:text-white"
          }`}
        >
          {
            {
              [NotificationTabType.News]: <>Howly&apos;s News</>,
              [NotificationTabType.Transactions]: <>Transactions</>
            }[tab]
          }
          <Wrapper open={news ? true : false}>
            <div className="absolute -top-6 -right-14 flex h-10 w-10 items-center justify-center rounded-full bg-red-12">
              <div className="h-4 w-4 rounded-full bg-red"></div>
            </div>
          </Wrapper>
        </div>
      </button>
    </>
  )
}

export default NotificationsTab
