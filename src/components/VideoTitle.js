import React from "react"

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-[7%] absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold ">{title}</h1>
      <p className="text-md w-1/3">{overview}</p>
      <div className="w-1/3 flex justify-center gap-10 p-4 mt-3">
        <button className="border px-6 py-2 rounded-md bg-white text-black font-semibold hover:bg-opacity-90 delay-75">
          <span className="px-1">▶</span>Play
        </button>
        <button className="border px-4 py-2 rounded-md bg-slate-600">
          <span className="border border-solid px-2 rounded-3xl">i</span> More
          info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
