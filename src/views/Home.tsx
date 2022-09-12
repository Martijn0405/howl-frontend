import Chat from "components/chat/Chat"
import Nav from "components/nav/Nav"
import { SLUG } from "libs/constants"
import React from "react"
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home {SLUG}</title>
      </Helmet>
      <Nav />
      <Chat />
      <div className="relative mt-[106px] pl-[330px]">
        <div className="absolute top-0 left-0 w-full">
          <img alt="" src="" />
        </div>
        <div className="relative w-full p-20"></div>
      </div>
    </>
  )
}

export default Home
