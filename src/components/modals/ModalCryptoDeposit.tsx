import { ReactComponent as Btc } from "assets/img/btc.svg"
import CoinPng from "assets/img/coin.png"
import { ReactComponent as Dollar } from "assets/img/dollar.svg"
import { ReactComponent as Eth } from "assets/img/eth.svg"
import { ReactComponent as Ltc } from "assets/img/ltc.svg"
import ModalCryptoTop from "components/modals/elements/ModalCryptoTop"
import ModalBody from "components/modals/general/ModalBody"
import WrapperModal from "components/wrapper/WrapperModal"
import { CryptoType } from "libs/enums"
import React, { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { MdFileCopy } from "react-icons/md"
import QRCode from "react-qr-code"
import { toast } from "react-toastify"

const ModalCryptoDeposit = ({ open, handler, type }: { open: boolean; handler: any; type?: CryptoType }) => {
  const [address] = useState("0xfe69abea58237a2f3f9659bd24d47b1c9d236229")

  const [coins, setCoins] = useState(0)
  const [usd, setUsd] = useState(0)
  const [btc, setBtc] = useState(0)

  const [crypto, setCrypto] = useState(CryptoType.Btc)

  useEffect(() => {
    const newUsd = coins / 100

    setUsd(newUsd)
    setBtc(newUsd / 35000)
  }, [coins])

  useEffect(() => {
    if (type !== undefined) {
      setCrypto(type)
    }
  }, [type])

  return (
    <>
      <ModalBody open={open}>
        <WrapperModal top={<ModalCryptoTop handler={handler} type={crypto} deposit />}>
          <div className="grid w-full grid-cols-1 gap-[24px] p-[20px] lg:grid-cols-[auto,1fr]">
            <div className="flex w-full items-start justify-center lg:w-auto">
              <div className="rounded-8 bg-grey-med-2 p-[16px]">
                <CopyToClipboard text={address} onCopy={() => toast.success("Copied!")}>
                  <button className="rounded-[6px] bg-white p-[14px]">
                    <QRCode size={124} value={address} />
                  </button>
                </CopyToClipboard>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-[36px]">
              <div className="grid w-full grid-cols-1 gap-[12px]">
                <div className="grid w-full grid-cols-1 gap-[8px]">
                  <div className="w-full text-center text-[12px] font-bold text-white lg:text-left">
                    {
                      {
                        [CryptoType.Btc]: "BTC",
                        [CryptoType.Eth]: "ETH",
                        [CryptoType.Ltc]: "LTC"
                      }[crypto]
                    }{" "}
                    Deposit Address
                  </div>
                  <CopyToClipboard text={address} onCopy={() => toast.success("Copied!")}>
                    <button className="group flex h-[44px] w-full items-start rounded-[4px] bg-black-32 shadow-md">
                      <div className="tr-h grid h-[42px] w-full grid-cols-[auto,1fr,auto] items-center gap-[12px] rounded-[4px] border-[1px] border-grey-med-4 bg-grey-med-2 p-[4px] group-hover:h-[44px]">
                        <div className="flex h-[32px] w-[32px] items-center justify-center">
                          {
                            {
                              [CryptoType.Btc]: <Btc className="h-[32px]" />,
                              [CryptoType.Eth]: <Eth className="h-[32px]" />,
                              [CryptoType.Ltc]: <Ltc className="h-[32px]" />
                            }[crypto]
                          }
                        </div>
                        <div className="w-full truncate overflow-ellipsis text-left text-[14px] font-semibold text-white">
                          {address}
                        </div>
                        <div className="flex h-[32px] w-[32px] items-center justify-center">
                          {
                            {
                              [CryptoType.Btc]: <MdFileCopy className="text-[20px] text-orange" />,
                              [CryptoType.Eth]: <MdFileCopy className="text-[20px] text-blue-light" />,
                              [CryptoType.Ltc]: <MdFileCopy className="text-[20px] text-grey-blue" />
                            }[crypto]
                          }
                        </div>
                      </div>
                    </button>
                  </CopyToClipboard>
                </div>
                <div className="flex w-full justify-center lg:justify-start">
                  <div className="w-full max-w-[300px] text-center text-[12px] italic text-grey-light-5 lg:text-left">
                    Only send{" "}
                    {
                      {
                        [CryptoType.Btc]: "BTC",
                        [CryptoType.Eth]: "ETH",
                        [CryptoType.Ltc]: "LTC"
                      }[crypto]
                    }{" "}
                    to the address above through{" "}
                    {
                      {
                        [CryptoType.Btc]: "Bitcoin",
                        [CryptoType.Eth]: "Ethereum",
                        [CryptoType.Ltc]: "Litecoin"
                      }[crypto]
                    }{" "}
                    Network. 1 confirmation required
                  </div>
                </div>
              </div>
              <div className="grid w-full grid-cols-1 gap-[8px]">
                <div className="w-full text-center text-[12px] font-bold text-white lg:text-left">Coin Calculator</div>
                <div className="grid w-full grid-cols-1 gap-[10px] sm:grid-cols-3 lg:grid-cols-[1fr,auto,1fr,auto,1fr]">
                  <div className="group flex h-[44px] w-full items-start rounded-[4px] bg-black-32 shadow-md">
                    <div className="tr-h grid h-[42px] w-full grid-cols-[auto,1fr,auto] items-center gap-[12px] rounded-[4px] border-[1px] border-grey-med-4 bg-grey-med-2 p-[4px] group-hover:h-[44px]">
                      <div className="flex h-[32px] w-[32px] items-center justify-center">
                        <img alt="" className="h-[26px]" src={CoinPng} />
                      </div>
                      <input
                        className="w-full text-[14px] font-semibold text-white"
                        placeholder={"0.00"}
                        type="number"
                        value={coins}
                        onChange={(e) => setCoins(parseInt(e.target.value))}
                      />
                    </div>
                  </div>
                  <div className="hidden h-full items-center text-[24px] text-grey-blue lg:flex">=</div>
                  <div className="group flex h-[44px] w-full items-start rounded-[4px] bg-black-32 shadow-md">
                    <div className="tr-h grid h-[42px] w-full grid-cols-[auto,1fr,auto] items-center gap-[12px] rounded-[4px] border-[1px] border-grey-med-4 bg-grey-med-2 p-[4px] group-hover:h-[44px]">
                      <div className="flex h-[32px] w-[32px] items-center justify-center">
                        <Dollar className="h-[26px]" />
                      </div>
                      <div className="w-full text-left text-[14px] font-semibold text-white">{usd}</div>
                    </div>
                  </div>
                  <div className="hidden h-full items-center text-[24px] text-grey-blue lg:flex">=</div>
                  <div className="group flex h-[44px] w-full items-start rounded-[4px] bg-black-32 shadow-md">
                    <div className="tr-h grid h-[42px] w-full grid-cols-[auto,1fr,auto] items-center gap-[12px] rounded-[4px] border-[1px] border-grey-med-4 bg-grey-med-2 p-[4px] group-hover:h-[44px]">
                      <div className="flex h-[32px] w-[32px] items-center justify-center">
                        {
                          {
                            [CryptoType.Btc]: <Btc className="h-[26px]" />,
                            [CryptoType.Eth]: <Eth className="h-[26px]" />,
                            [CryptoType.Ltc]: <Ltc className="h-[26px]" />
                          }[crypto]
                        }
                      </div>
                      <div className="w-full truncate overflow-ellipsis text-left text-[14px] font-semibold text-white">
                        {btc.toFixed(10)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-t-[1px] border-grey-med-5 p-[20px]">
            <div className="relative flex h-0 w-full justify-center">
              <button className="group flex h-[36px] items-start rounded-[4px] bg-black-32">
                <div className="tr-h flex h-[34px] w-full items-center rounded-[4px] bg-grey-med-4 px-[12px] text-[12px] font-bold text-grey-light-4 group-hover:h-[36px]">
                  View All{" "}
                  {
                    {
                      [CryptoType.Btc]: "BTC",
                      [CryptoType.Eth]: "ETH",
                      [CryptoType.Ltc]: "LTC"
                    }[crypto]
                  }{" "}
                  Transactions
                </div>
              </button>
            </div>
          </div>
        </WrapperModal>
      </ModalBody>
    </>
  )
}

export default ModalCryptoDeposit
