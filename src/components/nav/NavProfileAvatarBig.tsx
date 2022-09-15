import Wrapper from "components/wrapper/Wrapper"
import { useProps } from "contexts/PropsContext"
import React, { useState } from "react"
import { MdPerson } from "react-icons/md"

const NavProfileAvatarBig = ({ side }: { side?: boolean }) => {
  const { user } = useProps()

  const [openProfile, setOpenProfile] = useState(false)

  return (
    <>
      <button
        className={`h-66 group relative ${side ? "pr-32" : ""}`}
        onClick={() => (side ? setOpenProfile(!openProfile) : {})}
      >
        <Wrapper open={side ? true : false}>
          <div className="tr-c absolute top-[50%] right-0 flex h-32 w-70 translate-y-[-50%] transform items-center justify-end rounded-full border-1 border-grey-med-5 pr-10 group-hover:border-red group-hover:bg-grey-med-5">
            <MdPerson className="tr-c text-18 text-grey-med-7 group-hover:text-red" />
          </div>
        </Wrapper>
        <div className="h-66 w-66 relative flex items-center justify-center overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 h-full w-full rounded-full border-2 border-grey-dark bg-grey-med-3"></div>
          <img alt="" className="relative h-58 w-58 rounded-full" src={user.avatar} />
        </div>
        <div className="absolute left-40 bottom-2 flex h-20 w-20 items-center justify-center rounded-full bg-grey-med shadow-level">
          <div className="absolute top-0 left-0 h-full w-full rounded-full border-1 border-level"></div>
          <div className="absolute top-0 left-0 h-full w-full rounded-full bg-gradient-to-t from-transparent to-grey-med"></div>
          <div className="absolute top-0 left-0 h-full w-full rounded-full bg-gradient-to-t from-level-10 to-transparent"></div>
          <div className="text-blue relative text-10 font-bold text-level">17</div>
        </div>
      </button>
    </>
  )
}

export default NavProfileAvatarBig
