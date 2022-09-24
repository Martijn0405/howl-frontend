import { ReactComponent as Case } from "assets/img/case.svg"
import { ReactComponent as Gift } from "assets/img/gift.svg"
import NavNotifications from "components/nav/NavNotifications"
import NavProfileAvatarBig from "components/nav/NavProfileAvatarBig"
import { useModal } from "contexts/ModalContext"
import { useProps } from "contexts/PropsContext"
import { LinkInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ButtonCircle from "utils/buttons/ButtonCircle"

const NavMobile = ({ openNav, links, pages }: { openNav: boolean; links: LinkInterface[]; pages: LinkInterface[] }) => {
  const { path, user } = useProps()
  const { openDiscord, setOpenDiscord } = useModal()

  const [dailyCase, setDailyCase] = useState(false)
  const [freeGift, setFreeGift] = useState(false)

  useEffect(() => {
    setDailyCase(true)
    setFreeGift(true)
  }, [])

  return (
    <>
      <div className="absolute left-0 top-0 bottom-0 z-[-1] w-screen">
        <div
          className={`tr-t absolute right-0 top-[56px] bottom-[72px] z-30 flex min-h-full w-[230px] min-w-[230px] transform  flex-col bg-grey-dark desktop:hidden ${
            openNav ? "translate-x-[0%]" : "translate-x-[100%] desktop:translate-x-[0%]"
          }`}
        >
          <div className="grid w-full grid-cols-1">
            <div className="w-full bg-grey px-[16px] pt-[32px] pb-[16px]">
              <div className="mb-16 flex w-full justify-center">
                <NavProfileAvatarBig />
              </div>
              <div className="mb-14 w-full truncate overflow-ellipsis text-center text-[12px] font-semibold text-white">
                {user.username}
              </div>
              <div className="flex w-full items-center justify-center gap-[8px]">
                <ButtonCircle
                  icon={
                    <Case
                      className={`tr-c fill-current ${
                        openDiscord ? "text-red" : "text-grey-med-7 group-hover:text-red"
                      }`}
                    />
                  }
                  bg={"bg-grey"}
                  handler={() => setOpenDiscord(true)}
                  news={dailyCase}
                  open={openDiscord}
                />
                <ButtonCircle
                  icon={
                    <Gift
                      className={`tr-c w-[14px] fill-current ${
                        openDiscord ? "text-red" : "text-grey-med-7 group-hover:text-red"
                      }`}
                    />
                  }
                  bg={"bg-grey"}
                  handler={() => setOpenDiscord(true)}
                  news={freeGift}
                  open={openDiscord}
                />
                <div className="h-[24px] border-l-[1px] border-grey-med-4"></div>
                <NavNotifications bg={"bg-grey"} />
              </div>
            </div>
            <div className="flex w-full flex-grow overflow-auto">
              <div className="grid w-full grid-cols-1 gap-[24px] p-[24px]">
                <div className="grid w-full grid-cols-1 gap-[14px]">
                  {pages.map((link, key) => (
                    <Link
                      key={key}
                      className="tr-c group grid w-full grid-cols-[auto,1fr] items-center gap-[10px]"
                      to={link.link}
                    >
                      <div
                        className={`${path === link.link ? "first:text-red" : "text-grey-med-7 group-hover:text-red"}`}
                      >
                        {link.icon}
                      </div>
                      <div
                        className={`tr-c w-full text-left text-[12px] font-semibold ${
                          path === link.link ? "text-white" : "text-grey-light-3 group-hover:text-white"
                        }`}
                      >
                        {link.title}
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="grid w-full grid-cols-1 gap-[14px]">
                  {links.map((link: LinkInterface, key: number) => (
                    <Link
                      key={key}
                      className="tr-c w-full text-[12px] font-semibold text-grey-light hover:text-white"
                      to={link.link}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavMobile
