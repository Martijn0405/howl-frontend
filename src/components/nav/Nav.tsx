import { openLink } from "api/integration/functions"
import { ReactComponent as Jackpot } from "assets/img/jackpot.svg"
import NavMobileBottom from "components/nav/mobile/NavMobileBottom"
import NavMobileTop from "components/nav/mobile/NavMobileTop"
import NavNotifications from "components/nav/NavNotifications"
import NavProfile from "components/nav/NavProfile"
import NavWallet from "components/nav/NavWallet"
import { URL } from "libs/constants"
import { LinkInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { FaDiscord, FaGift, FaHome, FaSteam, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"
import BgFire from "utils/bgs/BgFire"

const Nav = () => {
  const [openNav, setOpenNav] = useState<boolean>(false)
  const [openChat, setOpenChat] = useState<boolean>(false)

  const [links] = useState<LinkInterface[]>([
    { link: "", title: "", icon: <FaTwitter className="tr-c text-14 text-grey-med-7 group-hover:text-white" /> },
    { link: "", title: "", icon: <FaDiscord className="tr-c text-14 text-grey-med-7 group-hover:text-white" /> },
    { link: "", title: "", icon: <FaSteam className="tr-c text-14 text-grey-med-7 group-hover:text-white" /> }
  ])

  const [socials] = useState<LinkInterface[]>([
    { title: "Provably Fair", link: URL.FAIR },
    { title: "Frequently Asked", link: URL.FAQ },
    { title: "Privacy Policy", link: URL.PRIVACY },
    { title: "Support", link: URL.SUPPORT },
    { title: "Blog", link: URL.BLOG }
  ])

  useEffect(() => {
    if (openNav) {
      setOpenChat(false)
    }
  }, [openNav])

  useEffect(() => {
    if (openChat) {
      setOpenNav(false)
    }
  }, [openChat])

  return (
    <>
      <div className="fixed left-[330px] top-0 right-0 z-20 hidden border-b-2 border-grey-dark bg-grey-med-2 shadow-nav xl:block">
        <div className="flex h-[36px] w-full items-center justify-between bg-grey-dark px-24">
          <div className="flex items-center gap-16">
            <div className="flex items-center gap-10">
              {links.map((link: LinkInterface, key: number) => (
                <button
                  key={key}
                  className="tr-c group flex h-24 w-24 items-center justify-center rounded-4 border-1 border-grey-med-2 bg-grey-dark hover:bg-grey-med-2"
                  onClick={(e) => openLink(e, link.link)}
                >
                  {link.icon}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-16">
              {socials.map((social: LinkInterface, key: number) => (
                <Link
                  key={key}
                  className="tr-c text-12 font-semibold text-grey-light hover:text-white"
                  to={social.link}
                >
                  {social.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-12 font-bold text-white">0</div>
            <div className="text-12 font-semibold text-grey-light-5">Total Bets</div>
          </div>
        </div>
        <div className="flex h-[70px] w-full items-center justify-between px-24">
          <div className="flex items-center">
            <Link
              className="tr-c group flex h-42 w-42 items-center justify-center rounded-4 hover:bg-red-bg"
              to={URL.HOME}
            >
              <FaHome className="tr-c text-26 text-grey-med-7 group-hover:text-red" />
            </Link>
            <div className="mx-20 h-24 border-l-1 border-grey-med-5"></div>
            <div className="flex items-center gap-4">
              <Link
                className="tr-c group flex h-70 items-center justify-center gap-16 border-b-1 border-transparent px-12 hover:border-red"
                to={URL.JACKPOT}
              >
                <Jackpot className="tr-c fill-current text-26 text-grey-med-7 group-hover:text-red" />
                <div className="tr-c text-16 font-bold text-grey-light group-hover:text-white">Jackpot</div>
              </Link>
            </div>
          </div>
          <NavWallet />
          <div className="flex items-center gap-20">
            <Link className="group relative flex h-30 items-start rounded-4 bg-red-dark" to={URL.HOME}>
              <div className="absolute top-0 left-0 bottom-2 w-full overflow-hidden rounded-4 bg-red group-hover:bg-red-light">
                <BgFire />
              </div>
              <div className="relative flex h-28 items-center gap-8 rounded-4 px-10">
                <FaGift className="tr-a text-14 text-white group-hover:rotate-[-15deg] group-hover:scale-[1.1] group-hover:transform" />
                <div className="text-12 font-bold text-white">Free Coins</div>
              </div>
            </Link>
            <div className="h-24 border-l-1 border-grey-med-5"></div>
            <NavNotifications />
            <NavProfile />
          </div>
        </div>
      </div>
      <NavMobileTop />
      <NavMobileBottom handlerChat={() => setOpenChat(!openChat)} />
    </>
  )
}

export default Nav
