import Bg from "assets/img/bg.png"
import { SLUG } from "libs/constants"
import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"

const WrapperPage = ({ title, children }: { title: string; children: any }) => {
  const [openNav, setOpenNav] = useState(false)
  const [openChat, setOpenChat] = useState(false)

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
      <Helmet>
        <title>
          {title} {SLUG}
        </title>
      </Helmet>
      <div className="relative mt-[56px] mb-[56px] desktop:mt-[108px] desktop:mb-0 desktop:ml-[330px]">
        <div className="absolute top-0 left-0 w-full">
          <img alt="" className="w-full" src={Bg} />
        </div>
        <div className="relative w-full p-[20px]">{children}</div>
      </div>
    </>
  )
}

export default WrapperPage
