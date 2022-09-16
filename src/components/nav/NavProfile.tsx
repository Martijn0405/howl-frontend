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
          <div className="absolute top-80 right-0 w-140 rounded-4 bg-grey-dark-2 p-6">
            <div className="absolute top-4 right-28 h-22 w-22 translate-y-[-50%] translate-x-[50%] rotate-[45deg] transform rounded-4 bg-grey-dark-2"></div>
            <div className="relative grid w-full grid-cols-1 gap-2">
              {pages.map((link, key) => (
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
