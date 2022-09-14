import Bg from "assets/img/bg.png"
import Chat from "components/chat/Chat"
import Nav from "components/nav/Nav"
import { SLUG } from "libs/constants"
import React from "react"
import { Helmet } from "react-helmet"

const WrapperPage = ({ title, children }: { title: string; children: any }) => {
  return (
    <>
      <Helmet>
        <title>
          {title} {SLUG}
        </title>
      </Helmet>
      <Nav />
      <Chat />
      <div className="relative mt-56 mb-56 xl:mt-[106px] xl:mb-0 xl:ml-[330px]">
        <div className="absolute top-0 left-0 w-full">
          <img alt="" className="w-full" src={Bg} />
        </div>
        <div className="relative w-full p-20">{children}</div>
      </div>
    </>
  )
}

export default WrapperPage
