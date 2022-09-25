import NavProfileAvatar from "components/nav/NavProfileAvatar"
import Wrapper from "components/wrapper/Wrapper"
import { useProps } from "contexts/PropsContext"
import { LinkInterface } from "libs/interfaces"
import React, { useState } from "react"
import { Link } from "react-router-dom"

const NavProfile = ({ pages }: { pages: LinkInterface[] }) => {
  const { path } = useProps()

  const [openProfile, setOpenProfile] = useState(false)

  return (
    <>
      <div className="relative">
        <Wrapper open={openProfile}>
          <button className="fixed top-0 left-0 h-full w-full" onClick={() => setOpenProfile(false)}></button>
        </Wrapper>
        <NavProfileAvatar handler={() => setOpenProfile(!openProfile)} side />
        <Wrapper open={openProfile}>
          <div className="absolute top-[80px] right-0 w-[150px] rounded-[4px] bg-grey-dark-2 p-[6px]">
            <div className="absolute top-[4px] right-[28px] h-[22px] w-[22px] translate-y-[-50%] translate-x-[50%] rotate-[45deg] transform rounded-[4px] bg-grey-dark-2"></div>
            <div className="relative grid w-full grid-cols-1 gap-[2px]">
              {pages.map((link, key) => (
                <Link
                  key={key}
                  className={`tr-c group grid h-[36px] w-full grid-cols-[auto,1fr] items-center gap-[12px] rounded-[4px] px-[12px] ${
                    path === link.link ? "bg-grey-med-5" : "hover:bg-grey-med-5"
                  }`}
                  to={link.link}
                >
                  <div
                    className={`flex w-[19px] justify-center ${
                      path === link.link ? "first:text-red" : "text-grey-med-7 group-hover:text-red"
                    }`}
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
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default NavProfile
