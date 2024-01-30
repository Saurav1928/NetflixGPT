import React from "react"
import { lang } from "../utils/languageConstant"
import { useSelector } from "react-redux"

const GptSearchBar = () => {
  const selectedanguage = useSelector((store) => store.config.lang)
  return (
    <div className="pt-[10%] flex justify-center ">
      <form className=" w-1/2 grid grid-cols-12 bg-black rounded-lg">
        <input
          type="text"
          className="p-4 m-4 col-span-9 "
          placeholder={lang[selectedanguage].gptSearchPlaceHolder}
        />
        <button className="py-2 px-4 m-4 col-span-3 bg-red-600 rounded-md text-white">
          {lang[selectedanguage].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
