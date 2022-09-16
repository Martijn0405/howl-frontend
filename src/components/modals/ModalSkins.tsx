import { ReactComponent as Coin } from "assets/img/coin.svg"
import { ReactComponent as Dota } from "assets/img/dota.svg"
import ModalSkin from "components/modals/elements/ModalSkin"
import ModalSkinsTop from "components/modals/elements/ModalSkinsTop"
import ModalBody from "components/modals/general/ModalBody"
import WrapperModal from "components/wrapper/WrapperModal"
import { SkinRarityType, SkinType } from "libs/enums"
import { SkinInterface } from "libs/interfaces"
import { RippleButton } from "libs/ripples"
import React, { useEffect, useState } from "react"
import { MdRefresh } from "react-icons/md"
import Button from "utils/buttons/Button"

const ModalSkins = ({
  open,
  handler,
  type,
  deposit
}: {
  open: boolean
  handler: any
  type?: SkinType
  deposit: boolean
}) => {
  const [selected, setSelected] = useState<number[]>([])

  const [depositMin] = useState<number>(1000)
  const [selectedMax] = useState<number>(20)

  const [valueSelected, setValueSelected] = useState(0)
  const [valueTotal, setValueTotal] = useState(0)

  const [skin, setSkin] = useState<SkinType>(SkinType.Csgo)

  const [skins] = useState<SkinInterface[]>([
    {
      name: "Big Grin",
      description: "Metal Facemask",
      price: 3123.45,
      stack: 13,
      image:
        "https://community.akamai.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GLEfDY0jhyo8DEiv5daPq0_qrw_QfG9DKWskiE/360fx360f",
      type: SkinRarityType.Red
    },
    {
      name: "Big Grin",
      description: "Metal Facemask",
      price: 3123.45,
      stack: 13,
      image:
        "https://community.akamai.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GLEfDY0jhyo8DEiv5daPq0_qrw_QfG9DKWskiE/360fx360f",
      type: SkinRarityType.Pink
    },
    {
      name: "Big Grin",
      description: "Metal Facemask",
      price: 3123.45,
      stack: 13,
      image:
        "https://community.akamai.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GLEfDY0jhyo8DEiv5daPq0_qrw_QfG9DKWskiE/360fx360f",
      type: SkinRarityType.Purple
    },
    {
      name: "Big Grin",
      description: "Metal Facemask",
      price: 3123.45,
      stack: 13,
      image:
        "https://community.akamai.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GLEfDY0jhyo8DEiv5daPq0_qrw_QfG9DKWskiE/360fx360f",
      type: SkinRarityType.Purple
    },
    {
      name: "Big Grin",
      description: "Metal Facemask",
      price: 3123.45,
      stack: 13,
      image:
        "https://community.akamai.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GLEfDY0jhyo8DEiv5daPq0_qrw_QfG9DKWskiE/360fx360f",
      type: SkinRarityType.Pink
    },
    {
      name: "Big Grin",
      description: "Metal Facemask",
      price: 3123.45,
      stack: 13,
      image:
        "https://community.akamai.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GLEfDY0jhyo8DEiv5daPq0_qrw_QfG9DKWskiE/360fx360f",
      type: SkinRarityType.Red
    },
    {
      name: "Big Grin",
      description: "Metal Facemask",
      price: 3123.45,
      stack: 13,
      image:
        "https://community.akamai.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GLEfDY0jhyo8DEiv5daPq0_qrw_QfG9DKWskiE/360fx360f",
      type: SkinRarityType.BlueLight
    },
    {
      name: "Big Grin",
      description: "Metal Facemask",
      price: 3123.45,
      stack: 13,
      image:
        "https://community.akamai.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GLEfDY0jhyo8DEiv5daPq0_qrw_QfG9DKWskiE/360fx360f",
      type: SkinRarityType.Purple
    },
    {
      name: "Big Grin",
      description: "Metal Facemask",
      price: 3123.45,
      stack: 13,
      image:
        "https://community.akamai.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GLEfDY0jhyo8DEiv5daPq0_qrw_QfG9DKWskiE/360fx360f",
      type: SkinRarityType.Pink
    },
    {
      name: "Big Grin",
      description: "Metal Facemask",
      price: 3123.45,
      stack: 13,
      image:
        "https://community.akamai.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GLEfDY0jhyo8DEiv5daPq0_qrw_QfG9DKWskiE/360fx360f",
      type: SkinRarityType.BlueLight
    },
    {
      name: "Big Grin",
      description: "Metal Facemask",
      price: 3123.45,
      stack: 13,
      image:
        "https://community.akamai.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GLEfDY0jhyo8DEiv5daPq0_qrw_QfG9DKWskiE/360fx360f",
      type: SkinRarityType.BlueDark
    }
  ])

  useEffect(() => {
    if (type !== undefined) {
      setSkin(type)
    }
  }, [type])

  useEffect(() => {
    setValueTotal(skins.map((entry: SkinInterface) => entry.price).reduce((a, b) => a + b))
  }, [skins])

  useEffect(() => {
    if (selected.length > 0) {
      const selectedSkins = skins.filter((entry: SkinInterface) => selected.includes(entry.type))

      if (selectedSkins.length > 0) {
        setValueSelected(selectedSkins.map((entry: SkinInterface) => entry.price).reduce((a, b) => a + b))
      }
    } else {
      setValueSelected(0)
    }
  }, [skins, selected])

  const onToggle = (id: number) => {
    const index = selected.indexOf(id)

    if (index === -1 && selected.length < selectedMax) {
      setSelected([...selected, id])
    } else {
      setSelected(selected.filter((item) => item !== id))
    }
  }

  const onDeposit = () => {
    console.log("Deposit")
  }

  const onRefresh = () => {
    console.log("Refresh")
  }

  return (
    <>
      <ModalBody open={open}>
        <WrapperModal size={880} top={<ModalSkinsTop deposit={deposit} handler={handler} type={skin} />}>
          <div className="h-[50px]0 relative w-full overflow-hidden">
            {skins.length > 0 ? (
              <>
                <div className="h-[50px]0 grid w-full items-start overflow-scroll p-[20px]">
                  <div className="grid w-full grid-cols-2 gap-[10px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {skins.map((entry: SkinInterface, key: number) => (
                      <ModalSkin
                        key={key}
                        handlerToggle={() => onToggle(key)}
                        selected={selected.includes(key)}
                        skin={entry}
                      />
                    ))}
                  </div>
                </div>
                <div
                  className="absolute bottom-0 z-10
             h-80 w-full bg-gradient-to-t from-grey-med to-transparent"
                ></div>
              </>
            ) : (
              <div className="h-[50px]0 flex w-full items-center justify-center">
                <div className="text-[14px] font-semibold text-grey-light-5">No skins found</div>
              </div>
            )}
          </div>
          <div className="grid w-full grid-cols-1 items-center gap-[12px] border-t-[1px] border-grey-med-4 p-[20px] lg:grid-cols-[1fr,auto]">
            <div className="grid w-full grid-cols-[auto,1fr] items-center gap-[12px]">
              <button className="group mt-2 flex h-[50px] w-[48px] rounded-[4px] bg-black-32 shadow-md">
                <RippleButton className="w-full rounded-[4px]">
                  <div
                    className="tr flex h-[48px] w-[48px] items-center justify-center rounded-[4px] bg-grey-med-2 group-hover:h-[50px]"
                    onClick={onRefresh}
                  >
                    <MdRefresh className="tr-a transform text-[18px] text-grey-med-7 group-hover:rotate-[360deg]" />
                  </div>
                </RippleButton>
              </button>
              <div className="grid w-full grid-cols-1">
                <div className="w-full">
                  <span className="text-[12px] text-grey-light-5 sm:text-[14px]">Minimum Deposit of</span>
                  <Coin className="mx-[6px] inline h-[18px] w-auto" />
                  <span className="text-[12px] font-semibold text-white sm:text-[14px]">{depositMin}</span>
                  <span className="text-[12px] text-grey-light-5 sm:text-[14px]">, Max items </span>
                  <span className="text-[12px] font-semibold text-white sm:text-[14px]">{selectedMax}</span>
                </div>
                <div className="w-full">
                  <span className="text-[12px] text-grey-light-5 sm:text-[14px]">Inventory Value </span>
                  <Coin className="mx-[6px] inline h-[18px] w-auto" />
                  <span className="text-[12px] font-semibold text-white sm:text-[14px]">{valueTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 items-center gap-[12px] md:grid-cols-[auto,1fr] md:gap-[24px] lg:w-auto">
              <div className="flex w-full items-center gap-[12px]">
                <div className="flex h-[46px] w-full items-center justify-center gap-[6px] rounded-[5px] border-[1px] border-grey-med-6 bg-grey-dark-2 px-[12px]">
                  {
                    {
                      [SkinType.Csgo]: <Dota className="h-[20px] w-auto" />,
                      [SkinType.Dota]: <Dota className="h-[20px] w-auto" />,
                      [SkinType.Rust]: <Dota className="h-[20px] w-auto" />
                    }[skin]
                  }
                  <div className="text-[12px] font-semibold text-grey-light-4">
                    <span className="text-[16px] text-white">{selected.length}</span>/{selectedMax}
                  </div>
                </div>
                <div className="flex h-[46px] w-full items-center justify-center gap-[6px] rounded-[5px] border-[1px] border-grey-med-6 bg-grey-dark-2 px-[12px]">
                  <Coin />
                  <div className="text-[14px] font-semibold text-white">{valueSelected.toFixed(2)}</div>
                </div>
              </div>
              <Button active={selected.length > 0} handler={onDeposit} title={deposit ? "Deposit" : "Withdraw"} full />
            </div>
          </div>
        </WrapperModal>
      </ModalBody>
    </>
  )
}

export default ModalSkins
