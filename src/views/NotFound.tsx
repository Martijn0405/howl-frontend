import { SLUG } from "libs/constants"
import React from "react"
import { Helmet } from "react-helmet"

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found {SLUG}</title>
      </Helmet>
      <div className="flex h-[100vh] w-full items-center justify-center bg-grey-med text-24 font-semibold text-white">
        404
      </div>
    </>
  )
}

export default NotFound
