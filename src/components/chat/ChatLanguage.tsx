import { ReactComponent as LanguageChinese } from "assets/img/languages/chinese.svg"
import { ReactComponent as LanguageEnglish } from "assets/img/languages/english.svg"
import { ReactComponent as LanguageFrench } from "assets/img/languages/french.svg"
import { ReactComponent as LanguageGerman } from "assets/img/languages/german.svg"
import { ReactComponent as LanguagePortugese } from "assets/img/languages/portugese.svg"
import { ReactComponent as LanguageRussian } from "assets/img/languages/russian.svg"
import { ReactComponent as LanguageSpanish } from "assets/img/languages/spanish.svg"
import { ReactComponent as LanguageThai } from "assets/img/languages/thai.svg"
import { ReactComponent as LanguageTurkish } from "assets/img/languages/turkish.svg"
import Wrapper from "components/wrapper/Wrapper"
import { LanguageInterface } from "libs/interfaces"
import React, { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"

const ChatLanguage = ({ open, handler }: { open: boolean; handler: any }) => {
  const [languages] = useState<LanguageInterface[]>([
    {
      title: "English",
      icon: <LanguageEnglish className="h-auto w-[20px]" />,
      code: "en"
    },
    {
      title: "German",
      icon: <LanguageGerman className="h-auto w-[20px]" />,
      code: "de"
    },
    {
      title: "Spanish",
      icon: <LanguageSpanish className="h-auto w-[20px]" />,
      code: "es"
    },
    {
      title: "Russian",
      icon: <LanguageRussian className="h-auto w-[20px]" />,
      code: "ru"
    },
    {
      title: "French",
      icon: <LanguageFrench className="h-auto w-[20px]" />,
      code: "fr"
    },
    {
      title: "Turkish",
      icon: <LanguageTurkish className="h-auto w-[20px]" />,
      code: "tr"
    },
    {
      title: "Chinese",
      icon: <LanguageChinese className="h-auto w-[20px]" />,
      code: "zh"
    },
    {
      title: "Thai",
      icon: <LanguageThai className="h-auto w-[20px]" />,
      code: "th"
    },
    {
      title: "Portugese",
      icon: <LanguagePortugese className="h-auto w-[20px]" />,
      code: "pt"
    }
  ])

  const [languageSelected, setLanguageSelected] = useState<LanguageInterface>(languages[0])

  return (
    <>
      <div className="relative w-full">
        <Wrapper open={open}>
          <button className="fixed top-0 left-0 h-full w-full" onClick={() => handler(false)}></button>
        </Wrapper>
        <button
          className={`group flex h-[38px] w-full items-start rounded-[4px] bg-grey-med-2 ${open ? "z-10" : ""}`}
          onClick={() => handler(!open)}
        >
          <div className="flex h-[36px] w-full items-center justify-between gap-[12px] rounded-[4px] bg-grey-med-4 pr-[8px] pl-[8px] group-hover:bg-grey-med-5">
            <div className="flex items-center gap-[12px]">
              <div className="w-[20px]">{languageSelected.icon}</div>
              <div className="text-[12px] font-semibold text-grey-light-5">{languageSelected.title} Chat</div>
            </div>
            <div className="flex items-center gap-[12px]">
              <div className="flex items-center gap-[4px]">
                <div className="flex h-[12px] w-[12px] items-center justify-center rounded-full bg-red-12">
                  <div className="h-[4px] w-[4px] rounded-full bg-red"></div>
                </div>
                <div className="text-[12px] font-bold text-white">2,236</div>
              </div>
              <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-grey-med-2">
                <MdKeyboardArrowDown className="text-[16px] text-grey-med-7" />
              </div>
            </div>
          </div>
        </button>
        <Wrapper open={open}>
          <div className="absolute top-[56px] right-0 z-10 w-[164px] rounded-[4px] bg-grey-dark-2 p-[4px]">
            <div className="absolute top-[4px] right-[28px] h-[22px] w-[22px] translate-y-[-50%] translate-x-[50%] rotate-[45deg] transform rounded-[4px] bg-grey-dark-2"></div>
            <div className="relative grid w-full grid-cols-1 gap-[2px]">
              {languages.map((language, key) => (
                <button
                  key={key}
                  className={`tr-c grid h-[36px] w-full grid-cols-[auto,1fr] items-center gap-[12px] rounded-[4px] px-[12px] ${
                    languageSelected.title === language.title ? "bg-grey-med-5" : "hover:bg-grey-med-5"
                  }`}
                  onClick={() => {
                    setLanguageSelected(language)
                    handler(false)
                  }}
                >
                  {language.icon}
                  <div
                    className={`tr-c w-full text-left text-[12px] font-semibold ${
                      languageSelected.title === language.title ? "text-white" : "text-grey-light-3"
                    }`}
                  >
                    {language.title}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default ChatLanguage
