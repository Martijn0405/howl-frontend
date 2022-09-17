import Wrapper from "components/wrapper/Wrapper"
import { useProps } from "contexts/PropsContext"
import React from "react"
import { MdPerson } from "react-icons/md"

const NavProfileAvatar = ({ side, handler }: { side?: boolean; handler?: any }) => {
  const { user } = useProps()

  return (
    <>
      <button
        className={`group relative h-[54px] ${side ? "pr-[32px]" : ""}`}
        onClick={() => (handler ? handler() : {})}
      >
        <Wrapper open={side ? true : false}>
          <div className="tr-c absolute top-[50%] right-0 flex h-[32px] w-[58px] translate-y-[-50%] transform items-center justify-end rounded-full border-[1px] border-grey-med-5 pr-[10px] group-hover:border-red group-hover:bg-grey-med-5">
            <MdPerson className="tr-c text-[18px] text-grey-med-7 group-hover:text-red" />
          </div>
        </Wrapper>
        <div className="relative flex h-[54px] w-[54px] items-center justify-center overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 h-full w-full rounded-full border-2 border-grey-dark bg-grey-med-3"></div>
          <img alt="" className="relative h-[46px] w-[46px] rounded-full" src={user.avatar} />
        </div>
        <div className="absolute left-[34px] bottom-2 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-grey-med shadow-level">
          <div className="absolute top-0 left-0 h-full w-full rounded-full border-[1px] border-level"></div>
          <div className="absolute top-0 left-0 h-full w-full rounded-full bg-gradient-to-t from-transparent to-grey-med"></div>
          <div className="absolute top-0 left-0 h-full w-full rounded-full bg-gradient-to-t from-level-10 to-transparent"></div>
          <div className="text-blue relative text-[10px] font-bold text-level">17</div>
        </div>
      </button>
    </>
  )
}

export default NavProfileAvatar
