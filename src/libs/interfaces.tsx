import { SkinRarityType, WalletType } from "libs/enums"

export interface GiftcardInterface {
  image: string
  amount: number
}

export interface LinkInterface {
  title: string
  link: string
  action?: any
  icon?: JSX.Element
  new?: number
}

export interface SkinInterface {
  name: string
  description: string
  price: number
  stack: number
  image: string
  type: SkinRarityType
}

export interface WalletInterface {
  title: string
  type: WalletType
}
