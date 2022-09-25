import Texture from "assets/img/texture.png"
import React from "react"

const BgFire = () => {
  return (
    <>
      <div className="tr-o absolute top-0 left-0 bottom-[2px] w-full opacity-0 group-hover:opacity-100">
        <img alt="" className="absolute max-w-none animate-texture" src={Texture} />
      </div>
    </>
  )
}

export default BgFire
