import { ReactComponent as Icon } from "assets/img/icon.svg"
import { URL } from "libs/constants"
import React from "react"
import { Link } from "react-router-dom"

const OverlayNotFound = () => {
  return (
    <>
      <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center overflow-hidden bg-purple-2">
        <Link to={URL.HOME}>
          <Icon className="absolute top-20 left-20 h-40 w-auto" />
        </Link>
        <div className="relative text-24 text-white sm:text-48 md:text-64">Page Not Found</div>
      </div>
    </>
  )
}

export default OverlayNotFound
