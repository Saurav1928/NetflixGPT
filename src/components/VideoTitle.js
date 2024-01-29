import React from "react"

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-28 px-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-md w-1/2">{overview}</p>
      <div className="flex justify-around p-4 w-1/2">
        <button className="border px-4 py-1 rounded-md bg-slate-600 ">
          ▶Play
        </button>
        <button className="border px-4 py-1 rounded-md bg-slate-600">
          More info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
