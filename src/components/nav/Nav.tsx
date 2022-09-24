import { openLink } from "api/integration/functions"
import { ReactComponent as Affiliates } from "assets/img/affiliates.svg"
import { ReactComponent as Gift } from "assets/img/gift.svg"
import { ReactComponent as Home } from "assets/img/home.svg"
import { ReactComponent as Logout } from "assets/img/logout.svg"
import { ReactComponent as Settings } from "assets/img/settings.svg"
import { ReactComponent as Transactions } from "assets/img/transactions.svg"
import { ReactComponent as UserOutline } from "assets/img/user_outline.svg"
import NavMobile from "components/nav/mobile/NavMobile"
import NavMobileBottom from "components/nav/mobile/NavMobileBottom"
import NavMobileTop from "components/nav/mobile/NavMobileTop"
import NavCase from "components/nav/NavCase"
import NavNotifications from "components/nav/NavNotifications"
import NavProfile from "components/nav/NavProfile"
import NavSwitcher from "components/nav/NavSwitcher"
import NavWallet from "components/nav/NavWallet"
import { URL } from "libs/constants"
import { LinkInterface } from "libs/interfaces"
import React, { useState } from "react"
import { FaDiscord, FaSteam, FaTwitter } from "react-icons/fa"
import { MdHistory } from "react-icons/md"
import { Link } from "react-router-dom"
import BgFire from "utils/bgs/BgFire"

const Nav = ({
  openChat,
  openNav,
  setOpenChat,
  setOpenNav
}: {
  openChat: boolean
  openNav: boolean
  setOpenChat: (openChat: boolean) => void
  setOpenNav: (openNav: boolean) => void
}) => {
  const [links] = useState<LinkInterface[]>([
    { title: "Provably Fair", link: URL.FAIR },
    { title: "Frequently Asked", link: URL.FAQ },
    { title: "Privacy Policy", link: URL.PRIVACY },
    { title: "Support", link: URL.SUPPORT },
    { title: "Blog", link: URL.BLOG }
  ])

  const [socials] = useState<LinkInterface[]>([
    { link: "", title: "", icon: <FaTwitter className="tr-c text-[14px] text-grey-med-7 group-hover:text-white" /> },
    { link: "", title: "", icon: <FaDiscord className="tr-c text-[14px] text-grey-med-7 group-hover:text-white" /> },
    { link: "", title: "", icon: <FaSteam className="tr-c text-[14px] text-grey-med-7 group-hover:text-white" /> }
  ])

  const [pages] = useState<LinkInterface[]>([
    {
      title: "Account",
      icon: <UserOutline className="tr-c stroke-current text-[16px]" />,
      link: URL.ACCOUNT
    },
    {
      title: "Affiliates",
      icon: <Affiliates className="tr-c fill-current text-[16px]" />,
      link: URL.AFFILIATES
    },
    {
      title: "Transactions",
      icon: <Transactions className="tr-c fill-current text-[16px]" />,
      link: URL.TRANSACTIONS
    },
    {
      title: "Settings",
      icon: <Settings className="tr-c fill-current text-[16px]" />,
      link: URL.SETTINGS
    },
    {
      title: "History",
      icon: <MdHistory className="tr-c text-[16px]" />,
      link: URL.HISTORY
    },
    {
      title: "Logout",
      icon: <Logout className="tr-c fill-current text-[16px]" />,
      link: URL.LOGOUT
    }
  ])

  return (
    <>
      <div className="absolute left-[330px] top-0 right-0 hidden border-b-2 border-grey-dark bg-grey-med-2 desktop:block">
        <div className="flex h-[36px] w-full items-center justify-between bg-grey-dark px-[24px]">
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center gap-[10px]">
              {socials.map((link: LinkInterface, key: number) => (
                <button
                  key={key}
                  className="tr-c group flex h-[24px] w-[24px] items-center justify-center rounded-[4px] border-[1px] border-grey-med-2 bg-grey-dark hover:bg-grey-med-2"
                  onClick={(e) => openLink(e, link.link)}
                >
                  {link.icon}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-[16px]">
              {links.map((link: LinkInterface, key: number) => (
                <Link
                  key={key}
                  className="tr-c text-[12px] font-semibold text-grey-light hover:text-white"
                  to={link.link}
                >
                  {link.title}
                </Link>
              ))}
              <NavCase />
            </div>
          </div>
          <div className="flex items-center gap-[4px]">
            <div className="text-[12px] font-bold text-white">0</div>
            <div className="text-[12px] font-semibold text-grey-light-5">Total Bets</div>
          </div>
        </div>
        <div className="flex h-[70px] w-full items-center justify-between px-[24px]">
          <div className="flex items-center">
            <Link
              className="tr-c group flex h-[42px] w-[42px] items-center justify-center rounded-[4px] hover:bg-red-bg"
              to={URL.HOME}
            >
              <Home className="tr-c w-[26px] fill-current text-grey-med-7 group-hover:text-red" />
            </Link>
            <div className="mx-20 h-[24px] border-l-[1px] border-grey-med-5"></div>
            <NavSwitcher />
          </div>
          <NavWallet />
          <div className="flex items-center gap-[20px]">
            <Link className="group relative flex h-[30px] items-start rounded-[4px] bg-red-dark" to={URL.HOME}>
              <div className="absolute top-0 left-0 bottom-2 w-full overflow-hidden rounded-[4px] bg-red group-hover:bg-red-light">
                <BgFire />
              </div>
              <div className="relative flex h-[28px] items-center gap-[8px] rounded-[4px] px-[10px]">
                <Gift className="tr-a text-[14px] text-white group-hover:rotate-[-15deg] group-hover:scale-[1.1] group-hover:transform" />
                <div className="hidden text-[12px] font-bold text-white xl:flex">Free Coins</div>
              </div>
            </Link>
            <div className="h-[24px] border-l-[1px] border-grey-med-5"></div>
            <NavNotifications bg={"bg-grey-med-2"} />
            <NavProfile pages={pages} />
          </div>
        </div>
      </div>
      <NavMobile links={links} openNav={openNav} pages={pages} />
      <NavMobileTop openNav={openNav} setOpenNav={setOpenNav} />
      <NavMobileBottom handlerChat={() => setOpenChat(!openChat)} />
    </>
  )
}

export default Nav
