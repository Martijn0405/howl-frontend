import Wrapper from "components/wrapper/Wrapper"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { LinkInterface } from "libs/interfaces"
import React, { useState } from "react"
import { MdLogout, MdOutlineGroupWork, MdOutlineHistory, MdPerson, MdSettings } from "react-icons/md"
import { TbListCheck } from "react-icons/tb"
import { Link } from "react-router-dom"

const NavProfile = () => {
  const { path, user } = useProps()

  const [openProfile, setOpenProfile] = useState(false)

  const [links] = useState<LinkInterface[]>([
    {
      title: "Account",
      icon: <MdPerson className="tr-c text-16" />,
      link: URL.ACCOUNT
    },
    {
      title: "Affiliates",
      icon: <MdOutlineGroupWork className="tr-c text-16" />,
      link: URL.AFFILIATES
    },
    {
      title: "Transactions",
      icon: <TbListCheck className="tr-c text-16" />,
      link: URL.TRANSACTIONS
    },
    {
      title: "Settings",
      icon: <MdSettings className="tr-c text-16" />,
      link: URL.SETTINGS
    },
    {
      title: "History",
      icon: <MdOutlineHistory className="tr-c text-16" />,
      link: URL.HISTORY
    },
    {
      title: "Logout",
      icon: <MdLogout className="tr-c text-16" />,
      link: URL.LOGOUT
    }
  ])

  return (
    <>
      <div className="relative">
        <Wrapper open={openProfile}>
          <button className="fixed top-0 left-0 h-full w-full" onClick={() => setOpenProfile(false)}></button>
        </Wrapper>
        <button className="group relative h-54 pr-32" onClick={() => setOpenProfile(!openProfile)}>
          <div className="tr-c absolute top-[50%] right-0 flex h-32 w-58 translate-y-[-50%] transform items-center justify-end rounded-full border-1 border-grey-med-5 pr-10 group-hover:border-red group-hover:bg-grey-med-5">
            <MdPerson className="tr-c text-18 text-grey-med-7 group-hover:text-red" />
          </div>
          <div className="relative flex h-54 w-54 items-center justify-center overflow-hidden rounded-full">
            <div className="absolute top-0 left-0 h-full w-full rounded-full border-2 border-grey-dark bg-grey-med-3"></div>
            <img alt="" className="relative h-46 w-46 rounded-full" src={user.avatar} />
          </div>
          <div className="absolute right-34 bottom-2 flex h-20 w-20 items-center justify-center rounded-full bg-grey-med shadow-level">
            <div className="absolute top-0 left-0 h-full w-full rounded-full border-1 border-level"></div>
            <div className="absolute top-0 left-0 h-full w-full rounded-full bg-gradient-to-t from-transparent to-grey-med"></div>
            <div className="absolute top-0 left-0 h-full w-full rounded-full bg-gradient-to-t from-level-10 to-transparent"></div>
            <div className="text-blue relative text-10 font-bold text-level">17</div>
          </div>
        </button>
        <Wrapper open={openProfile}>
          <div className="absolute top-80 right-0 w-[140px] rounded-4 bg-grey-dark-2 p-6">
            <div className="absolute top-4 right-[28px] h-22 w-22 translate-y-[-50%] translate-x-[50%] rotate-[45deg] transform rounded-4 bg-grey-dark-2"></div>
            <div className="relative grid w-full grid-cols-1 gap-2">
              {links.map((link, key) => (
                <Link
                  key={key}
                  className={`tr-c group grid h-36 w-full grid-cols-[auto,1fr] items-center gap-12 rounded-4 px-12 ${
                    path === link.link ? "bg-grey-med-5" : "hover:bg-grey-med-5"
                  }`}
                  to={link.link}
                >
                  <div className={`${path === link.link ? "first:text-red" : "text-grey-med-7 group-hover:text-red"}`}>
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
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default NavProfile
