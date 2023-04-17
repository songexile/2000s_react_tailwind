import React from "react";
import ModelLoader from "./ModelLoader";

function LeftPage() {
  return (
    <div className="w-2/3 flex flex-col">
      <div className="h-5/6 bg-blue-300 mx-1 mt-2 rounded-xl y2k-shadow2 flex justify-center items-center ">
        {/* <div className="h-full rounded-2xl  w-full bg-cover y2k-shadow4 bg-[url('./assets/faye.png')] inner-stroke "></div> */}
        <ModelLoader modelPath="src/assets/models/mercedes-benz_s_500_-_ps1_low_poly/scene.gltf" />
      </div>
      <div className="h-1/6 bg-gradient-to-t from-[#8ea7aa] to-[#53686b] mb-1 mt-4 rounded-2xl y2k-shadow4 mx-1 p-4 inner-stroke">
        <div className="flex items-center justify-center h-full">
          <div className="w-1/2 flex flex-col items-start justify-center pr-2">
            <div className="w-full bg-gray-400 m-1 y2k-shadow3 flex">
              <div className="text-right p-1 text-white bg-green-500 w-1/3 y2k-shadow3"></div>
            </div>
            <div className="w-full bg-gray-400 m-1 y2k-shadow3 flex">
              <div className="text-right p-1 text-white bg-green-500 w-1/2 y2k-shadow3"></div>
            </div>
            <div className="w-full bg-gray-400 m-1 y2k-shadow3 flex">
              <div className="text-right p-1 text-white bg-green-500 w-1/2 y2k-shadow3"></div>
            </div>
            <div className="w-full bg-gray-400 m-1 y2k-shadow3 flex">
              <div className="text-right p-1 text-white bg-green-500 w-1/3 y2k-shadow3"></div>
            </div>
            <div className="w-full bg-gray-400 m-1 y2k-shadow3 flex">
              <div className="text-right p-1 text-white bg-green-500 w-1/2 y2k-shadow3"></div>
            </div>
            <div className="w-full bg-gray-400 m-1 y2k-shadow3 flex">
              <div className="text-right p-1 text-white bg-green-500 w-1/2 y2k-shadow3"></div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-start justify-center pl-2">
            <div className="w-full  m-1  flex">
              <div className="text-right p-1 text-white bg-green-500 w-1/3 y2k-shadow3"></div>
            </div>
            <div className="w-full  m-1  flex">
              <div className="text-right p-1 text-white bg-green-500 w-1/2 y2k-shadow3"></div>
            </div>
            <div className="w-full  m-1  flex">
              <div className="text-right p-1 text-white bg-green-500 w-1/2 y2k-shadow3"></div>
            </div>
            <div className="w-full  m-1  flex">
              <div className="text-right p-1 text-white bg-green-500 w-1/3 y2k-shadow3"></div>
            </div>
            <div className="w-full  m-1  flex">
              <div className="text-right p-1 text-white bg-green-500 w-1/2 y2k-shadow3"></div>
            </div>
            <div className="w-full  m-1  flex">
              <div className="text-right p-1 text-white bg-green-500 w-1/2 y2k-shadow3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftPage;
