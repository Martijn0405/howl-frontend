import { ReactComponent as Coin } from "assets/img/coin.svg"
import PatternBlueDark from "assets/img/patterns/pattern_skin_blue_dark.png"
import PatternBlueLight from "assets/img/patterns/pattern_skin_blue_light.png"
import PatternPink from "assets/img/patterns/pattern_skin_pink.png"
import PatternPurple from "assets/img/patterns/pattern_skin_purple.png"
import PatternRed from "assets/img/patterns/pattern_skin_red.png"
import { ReactComponent as ShapeBlueDark } from "assets/img/shapes/shape_skin_blue_dark.svg"
import { ReactComponent as ShapeBlueLight } from "assets/img/shapes/shape_skin_blue_light.svg"
import { ReactComponent as ShapePink } from "assets/img/shapes/shape_skin_pink.svg"
import { ReactComponent as ShapePurple } from "assets/img/shapes/shape_skin_purple.svg"
import { ReactComponent as ShapeRed } from "assets/img/shapes/shape_skin_red.svg"
import { ReactComponent as Stack } from "assets/img/stack.svg"
import { SkinRarityType } from "libs/enums"
import { SkinInterface } from "libs/interfaces"
import React, { useState } from "react"
import { MdCheck } from "react-icons/md"

const ModalSkin = ({
  skin,
  handlerToggle,
  selected
}: {
  skin: SkinInterface
  handlerToggle: any
  selected: boolean
}) => {
  const onBg = () => {
    switch (skin.type) {
      case SkinRarityType.Red:
        return "bg-skin-red"
      case SkinRarityType.Pink:
        return "bg-skin-pink"
      case SkinRarityType.Purple:
        return "bg-skin-purple"
      case SkinRarityType.BlueDark:
        return "bg-skin-blue-dark"
      case SkinRarityType.BlueLight:
        return "bg-skin-blue-light"
    }
  }

  const onFrom = () => {
    switch (skin.type) {
      case SkinRarityType.Red:
        return "from-skin-red"
      case SkinRarityType.Pink:
        return "from-skin-pink"
      case SkinRarityType.Purple:
        return "from-skin-purple"
      case SkinRarityType.BlueDark:
        return "from-skin-blue-dark"
      case SkinRarityType.BlueLight:
        return "from-skin-blue-light"
    }
  }

  const onBorder = () => {
    switch (skin.type) {
      case SkinRarityType.Red:
        return "border-skin-red"
      case SkinRarityType.Pink:
        return "border-skin-pink"
      case SkinRarityType.Purple:
        return "border-skin-purple"
      case SkinRarityType.BlueDark:
        return "border-skin-blue-dark"
      case SkinRarityType.BlueLight:
        return "border-skin-blue-light"
    }
  }

  const onText = () => {
    switch (skin.type) {
      case SkinRarityType.Red:
        return "text-skin-red"
      case SkinRarityType.Pink:
        return "text-skin-pink"
      case SkinRarityType.Purple:
        return "text-skin-purple"
      case SkinRarityType.BlueDark:
        return "text-skin-blue-dark"
      case SkinRarityType.BlueLight:
        return "text-skin-blue-light"
    }
  }

  const [bg] = useState(onBg())
  const [border] = useState(onBorder())
  const [from] = useState(onFrom())
  const [text] = useState(onText())

  return (
    <>
      <button
        className="group relative w-full overflow-hidden rounded-[4px] bg-gradient-to-b from-grey-med-2 via-grey-med to-grey-dark p-[12px]"
        onClick={handlerToggle}
      >
        <div className="absolute left-0 top-[6px] flex h-[24px] w-[60px] items-center gap-[6px] bg-gradient-to-r from-black-24 to-transparent pl-[8px]">
          <Stack />
          <div className="text-[11px] text-white">{skin.stack}</div>
        </div>
        <div className="absolute top-0 left-0 h-full w-full rounded-[4px]">
          <div
            className={`tr top-0 h-[4px] w-full rounded-t-4 group-hover:opacity-40 ${border} ${
              selected
                ? "border-l-[2px] border-r-[2px] border-t-[2px] !opacity-100"
                : "border-l-[1px] border-r-[1px] border-t-[1px] opacity-0"
            }`}
          ></div>
          <div
            className={`tr absolute bottom-[12px] top-[4px] left-0 bg-gradient-to-b to-transparent group-hover:opacity-40 ${from} ${
              selected ? "w-[2px] !opacity-100" : "w-[1px] opacity-0"
            }`}
          ></div>
          <div
            className={`tr absolute bottom-[12px] top-[4px] right-0 bg-gradient-to-b to-transparent group-hover:opacity-40 ${from} ${
              selected ? "w-[2px] !opacity-100" : "w-[1px] opacity-0"
            }`}
          ></div>
        </div>
        <div className="grid w-full grid-cols-1 gap-[12px]">
          <div className="relative h-[100px] w-full">
            <div
              className={`tr-h absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform blur-[60px] filter ${bg} ${
                selected ? "z-10 h-[50px] w-[100px]" : "h-[20px] w-[40px] group-hover:h-[40px] group-hover:w-[80px]"
              }`}
            ></div>
            {
              {
                [SkinRarityType.Red]: (
                  <>
                    <img
                      className={`absolute top-[57%] left-[50%] w-[125%] max-w-[125%] translate-x-[-50%] translate-y-[-50%] transform ${
                        selected ? "z-10" : ""
                      }`}
                      alt=""
                      src={PatternRed}
                    />
                    <ShapeRed
                      className={`absolute top-[50%] left-[50%] h-[132px] w-[132px] translate-x-[-50%] translate-y-[-50%] transform ${
                        selected ? "z-10" : ""
                      }`}
                    />
                  </>
                ),
                [SkinRarityType.Pink]: (
                  <>
                    <img
                      className={`absolute top-[57%] left-[50%] w-[125%] max-w-[125%] translate-x-[-50%] translate-y-[-50%] transform ${
                        selected ? "z-10" : ""
                      }`}
                      alt=""
                      src={PatternPink}
                    />
                    <ShapePink
                      className={`absolute top-[50%] left-[50%] h-[132px] w-[132px] translate-x-[-50%] translate-y-[-50%] transform ${
                        selected ? "z-10" : ""
                      }`}
                    />
                  </>
                ),
                [SkinRarityType.Purple]: (
                  <>
                    <img
                      className={`absolute top-[57%] left-[50%] w-[125%] max-w-[125%] translate-x-[-50%] translate-y-[-50%] transform ${
                        selected ? "z-10" : ""
                      }`}
                      alt=""
                      src={PatternPurple}
                    />
                    <ShapePurple
                      className={`absolute top-[50%] left-[50%] h-[132px] w-[132px] translate-x-[-50%] translate-y-[-50%] transform ${
                        selected ? "z-10" : ""
                      }`}
                    />
                  </>
                ),
                [SkinRarityType.BlueLight]: (
                  <>
                    <img
                      className={`absolute top-[57%] left-[50%] w-[125%] max-w-[125%] translate-x-[-50%] translate-y-[-50%] transform ${
                        selected ? "z-10" : ""
                      }`}
                      alt=""
                      src={PatternBlueLight}
                    />
                    <ShapeBlueLight
                      className={`absolute top-[50%] left-[50%] h-[132px] w-[132px] translate-x-[-50%] translate-y-[-50%] transform ${
                        selected ? "z-10" : ""
                      }`}
                    />
                  </>
                ),
                [SkinRarityType.BlueDark]: (
                  <>
                    <img
                      className={`absolute top-[57%] left-[50%] w-[125%] max-w-[125%] translate-x-[-50%] translate-y-[-50%] transform ${
                        selected ? "z-10" : ""
                      }`}
                      alt=""
                      src={PatternBlueDark}
                    />
                    <ShapeBlueDark
                      className={`absolute top-[50%] left-[50%] h-[132px] w-[132px] translate-x-[-50%] translate-y-[-50%] transform ${
                        selected ? "z-10" : ""
                      }`}
                    />
                  </>
                )
              }[skin.type]
            }
            <img
              className={`tr-a absolute top-[50%] left-[50%] w-[86px] max-w-[86px] translate-x-[-50%] translate-y-[-50%] transform ${
                selected ? "blur-sm filter" : ""
              }`}
              alt=""
              src={skin.image}
            />
            <div
              className={`tr absolute top-[50%] left-[50%] flex h-[44px] w-[44px] translate-x-[-50%] translate-y-[-50%] transform items-center justify-center ${
                selected ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className={`absolute top-0 left-0 h-full w-full rounded-full opacity-[.36] ${bg}`}></div>
              <MdCheck className={`relative text-[20px] ${text}`} />
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-[4px]">
            <div className="grid w-full grid-cols-1">
              <div className={`w-full text-left text-[12px] font-semibold  ${text}`}>{skin.name}</div>
              <div className="w-full text-left text-[11px] text-grey-light-5">{skin.description}</div>
            </div>
            <div className="grid w-full grid-cols-[auto,1fr] items-center gap-[6px]">
              <Coin className="w-[18px]" />
              <div className="w-full text-left text-[13px] font-semibold text-white">{skin.price}</div>
            </div>
          </div>
        </div>
      </button>
    </>
  )
}

export default ModalSkin
