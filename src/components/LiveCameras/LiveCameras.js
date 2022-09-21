import React from "react";
import newYork from "../../Video/newYork.mp4";
import london from "../../Video/london.mp4";
const LiveCameras = () => {
    let showDate = new Date();
    let showDateString = showDate.toDateString();
  return (
    <div className="mx-4 lg:mx-24 mb-12 lg:mb-20 lg:mt-40">
      <div class="card bg-slate-600 shadow-lg py-12">
        <div class="card-body">
          <h2 class="card-title mb-2 text-2xl font-semibold text-white hidden lg:block">Live Cameras</h2>
          <div className="lg:flex items-center justify-between ">
            <div className="grid justify-items-center">
            <video className='rounded-xl  w-72 h-44' src={newYork} controls muted></video>
            <h2 className="text-white mt-2 font-semibold">New York</h2>
            <p className="text-white text-xs">{showDateString}</p>
            </div>
            <div className="grid justify-items-center">
            <video className='rounded-xl  w-72 h-44' src={london} controls muted></video>
            <h2 className="text-white mt-2 font-semibold">Finland</h2>
            <p className="text-white text-xs">{showDateString}</p>
            </div>
            <div className="grid justify-items-center">
            <video className='rounded-xl  w-72 h-44' src={newYork} controls muted></video>
            <h2 className="text-white mt-2 font-semibold">London</h2>
            <p className="text-white text-xs">{showDateString}</p>
            </div>
            <div className="grid justify-items-center">
            <video className='rounded-xl  w-72 h-44' src={london} controls muted></video>
            <h2 className="text-white mt-2 font-semibold">Thailand</h2>
            <p className="text-white text-xs">{showDateString}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCameras;
