import React from "react";
import newPost from "../images/newpost.png";
import group from "../images/Group.png";
import news from "../images/news.png";
import eyije from "../images/eyije.png";
import vector from "../images/Vector.png";
import diary from "../images/diary.png";
import owambe from "../images/owambe.png";
import streaks from "../images/streak.png";

const MainContent = () => {
  return (
    <main className="bg-[#F5F5F5] h-full">
      <div className="px-4 pt-8 pb-4">
        <div className="flex justify-between items-center">
          <div className="border-gray-400 bg-white border rounded-xl h-[78px] w-[78px]">
            <div className="flex justify-center items-center flex-col gap-1 pt-4">
                <img src={newPost} alt="" className="w-6 h-6" />
                <p className="text-sm text-[#4F4F4F] font-normal">New Post</p>
            </div>
          </div>

          <div className="border-gray-400 bg-white border rounded-xl h-[78px] w-[78px]">
            <div className="flex justify-center items-center flex-col gap-1 pt-4">
                <img src={group} alt="" className="w-6 h-6" />
                <p className="text-sm text-[#4F4F4F] font-normal">QnAs</p>
            </div>
          </div>

          <div className="border-gray-400 bg-white border rounded-xl h-[78px] w-[78px]">
            <div className="flex justify-center items-center flex-col gap-1 pt-4">
                <img src={news} alt="" className="w-6 h-6" />
                <p className="text-sm text-[#4F4F4F] font-normal">Kiwi</p>
            </div>
          </div>

          <div className="border-gray-400 bg-white border rounded-xl h-[78px] w-[78px]">
            <div className="flex justify-center items-center flex-col gap-1 pt-4">
                <img src={eyije} alt="" className="w-6 h-6" />
                <p className="text-sm text-[#4F4F4F] font-normal">Rands</p>
            </div>
          </div>
        </div>

        <div className="my-5 bg-[#EFEFEF] text-[#C0BFBF] h-28 flex rounded-xl justify-center items-center text-xl font-normal">
        CODE CLAIM
        </div>

        <div className="flex justify-between items-center">
          <div className="border-gray-400 bg-white border rounded-xl h-[78px] w-[78px]">
            <div className="flex justify-center items-center flex-col gap-1 pt-4">
                <img src={vector} alt="" className="w-6 h-6" />
                <p className="text-sm text-[#4F4F4F] font-normal">New Post</p>
            </div>
          </div>

          <div className="border-gray-400 bg-white border rounded-xl h-[78px] w-[78px]">
            <div className="flex justify-center items-center flex-col gap-1 pt-4">
                <img src={diary} alt="" className="w-6 h-6" />
                <p className="text-sm text-[#4F4F4F] font-normal">QnAs</p>
            </div>
          </div>

          <div className="border-gray-400 bg-white border rounded-xl h-[78px] w-[78px]">
            <div className="flex justify-center items-center flex-col gap-1 pt-4">
                <img src={owambe} alt="" className="w-6 h-6" />
                <p className="text-sm text-[#4F4F4F] font-normal">Kiwi</p>
            </div>
          </div>

          <div className="border-gray-400 bg-white border rounded-xl h-[78px] w-[78px]">
            <div className="flex justify-center items-center flex-col gap-1 pt-4">
                <img src={streaks} alt="" className="w-6 h-6" />
                <p className="text-sm text-[#4F4F4F] font-normal">Rands</p>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 mt-5">
          <div className="flex-1 bg-[#EFEFEF] text-[#C0BFBF] h-20 rounded-xl"></div>
          <div className="flex-1 bg-[#EFEFEF] text-[#C0BFBF] h-20 rounded-xl"></div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
