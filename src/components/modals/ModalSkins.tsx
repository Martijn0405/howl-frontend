import { ReactComponent as Coin } from "assets/img/coin.svg"
import { ReactComponent as Dota } from "assets/img/dota.svg"
import ModalSkin from "components/modals/elements/ModalSkin"
import ModalSkinsTop from "components/modals/elements/ModalSkinsTop"
import Modal from "components/modals/Modal"
import WrapperModal from "components/wrapper/WrapperModal"
import { SkinRarityType, SkinType } from "libs/enums"
import { SkinInterface } from "libs/interfaces"
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
  type: SkinType
  deposit: boolean
}) => {
  const [selected, setSelected] = useState<number[]>([])

  const [depositMin] = useState<number>(1000)
  const [selectedMax] = useState<number>(20)

  const [valueSelected, setValueSelected] = useState(0)
  const [valueTotal, setValueTotal] = useState(0)

  const [skins] = useState<SkinInterface[]>([
    {
      name: "Big Grin",
      description: "Metal Facemask",
      price: 3123.45,
      stack: 13,
      image:
        "https://community.akamai.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GLEfDY0jhyo8DEiv5daPq0_qrw_QfG9DKWskiE/360fx360f",
      type: SkinRarityType.Yellow
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
      type: SkinRarityType.Blue
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
      type: SkinRarityType.Grey
    }
  ])

  useEffect(() => {
    setValueTotal(skins.map((skin: SkinInterface) => skin.price).reduce((a, b) => a + b))
  }, [skins])

  useEffect(() => {
    setValueSelected(
      selected.length > 0
        ? skins
            .filter((skin: SkinInterface) => selected.includes(skin.type))
            .map((skin: SkinInterface) => skin.price)
            .reduce((a, b) => a + b)
        : 0
    )
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
      <Modal handler={handler} open={open}>
        <WrapperModal top={<ModalSkinsTop deposit={deposit} handler={handler} type={type} />} wide>
          <div className="relative max-h-[500px] w-full overflow-hidden">
            <div className="grid max-h-[500px] w-full grid-cols-2 gap-4 overflow-scroll p-20 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {skins.map((skin: SkinInterface, key: number) => (
                <ModalSkin
                  key={key}
                  handlerToggle={() => onToggle(key)}
                  selected={selected.includes(key)}
                  skin={skin}
                />
              ))}
            </div>
            <div className="absolute top-[420px] h-80 w-full bg-gradient-to-t from-grey-med to-transparent"></div>
          </div>
          <div className="grid w-full grid-cols-1 items-center gap-12 border-t-1 border-grey-med-4 p-20 lg:grid-cols-[1fr,auto]">
            <div className="grid w-full grid-cols-[auto,1fr] items-center gap-12">
              <button className="group mt-2 flex h-50 w-48 rounded-4 bg-black-32 shadow-md" onClick={onRefresh}>
                <div className="tr flex h-48 w-48 items-center justify-center rounded-4 bg-grey-med-2 group-hover:h-50">
                  <MdRefresh className="tr-a transform text-18 text-grey-med-7 group-hover:rotate-[360deg]" />
                </div>
              </button>
              <div className="grid w-full grid-cols-1">
                <div className="w-full">
                  <span className="text-12 text-grey-light-5 sm:text-14">Minimum Deposit of</span>
                  <Coin className="mx-6 inline" />
                  <span className="text-12 font-semibold text-white sm:text-14">{depositMin}</span>
                  <span className="text-12 text-grey-light-5 sm:text-14">, Max items </span>
                  <span className="text-12 font-semibold text-white sm:text-14">{selectedMax}</span>
                </div>
                <div className="w-full">
                  <span className="text-12 text-grey-light-5 sm:text-14">Inventory Value </span>
                  <Coin className="mx-6 inline" />
                  <span className="text-12 font-semibold text-white sm:text-14">{valueTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-[auto,1fr] md:gap-24 lg:w-auto">
              <div className="flex w-full items-center gap-12">
                <div className="flex h-46 w-full items-center justify-center gap-6 rounded-5 border-1 border-grey-med-6 bg-grey-dark-2 px-12">
                  {
                    {
                      [SkinType.Csgo]: <Dota />,
                      [SkinType.Dota]: <Dota />,
                      [SkinType.Rust]: <Dota />
                    }[type]
                  }
                  <div className="text-12 font-semibold text-grey-light-4">
                    <span className="text-16 text-white">{selected.length}</span>/{selectedMax}
                  </div>
                </div>
                <div className="flex h-46 w-full items-center justify-center gap-6 rounded-5 border-1 border-grey-med-6 bg-grey-dark-2 px-12">
                  <Coin />
                  <div className="text-14 font-semibold text-white">{valueSelected.toFixed(2)}</div>
                </div>
              </div>
              <Button handler={onDeposit} title={deposit ? "Deposit" : "Withdraw"} full />
            </div>
          </div>
        </WrapperModal>
      </Modal>
    </>
  )
}

export default ModalSkins
