import { ReactComponent as Case } from "assets/img/case.svg"
import NavNotifications from "components/nav/NavNotifications"
import NavProfileAvatarBig from "components/nav/NavProfileAvatarBig"
import { useModal } from "contexts/ModalContext"
import { useProps } from "contexts/PropsContext"
import { LinkInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { FaGift } from "react-icons/fa"
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
          className={`tr-t absolute right-0 top-56 bottom-72 z-30 flex min-h-full w-[230px] min-w-[230px] transform  flex-col bg-grey-dark desktop:hidden ${
            openNav ? "translate-x-[0%]" : "translate-x-[100%] desktop:translate-x-[0%]"
          }`}
        >
          <div className="grid w-full grid-cols-1">
            <div className="w-full bg-grey px-16 pt-32 pb-16">
              <div className="mb-16 flex w-full justify-center">
                <NavProfileAvatarBig />
              </div>
              <div className="mb-14 w-full truncate overflow-ellipsis text-center text-12 font-semibold text-white">
                {user.username}
              </div>
              <div className="flex w-full items-center justify-center gap-8">
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
                    <FaGift
                      className={`tr-c fill-current ${
                        openDiscord ? "text-red" : "text-grey-med-7 group-hover:text-red"
                      }`}
                    />
                  }
                  bg={"bg-grey"}
                  handler={() => setOpenDiscord(true)}
                  news={freeGift}
                  open={openDiscord}
                />
                <div className="h-24 border-l-1 border-grey-med-4"></div>
                <NavNotifications bg={"bg-grey"} />
              </div>
            </div>
            <div className="flex w-full flex-grow overflow-auto">
              <div className="grid w-full grid-cols-1 gap-24 p-24">
                <div className="grid w-full grid-cols-1 gap-14">
                  {pages.map((link, key) => (
                    <Link
                      key={key}
                      className="tr-c group grid w-full grid-cols-[auto,1fr] items-center gap-10"
                      to={link.link}
                    >
                      <div
                        className={`${path === link.link ? "first:text-red" : "text-grey-med-7 group-hover:text-red"}`}
                      >
                        {link.icon}
                      </div>
                      <div
                        className={`tr-c w-full text-left text-12 font-semibold ${
                          path === link.link ? "text-white" : "text-grey-light-3 group-hover:text-white"
                        }`}
                      >
                        {link.title}
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="grid w-full grid-cols-1 gap-14">
                  {links.map((link: LinkInterface, key: number) => (
                    <Link
                      key={key}
                      className="tr-c w-full text-12 font-semibold text-grey-light hover:text-white"
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
