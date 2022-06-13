import Image from "next/image";
import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { FiCopy, FiMoreHorizontal } from "react-icons/fi";
import { SavePost } from "../hooks/SavePost";
import ShowMoreInfo from "./ShowMoreInfo";

const PostInfoById = ({ post }: { post: any }) => {
  const [showMore, setShowMore] = useState(false);
  const { handleSavePost, isLoading, result } = SavePost({
    id: post._id,
  });
  return (
    <>
      <div className=" flex justify-between items-center">
        <button
          onClick={() => handleSavePost()}
          className="bg-red-600 w-20 h-10   rounded-full yekanBold text-sm hover:bg-red-700 text-white"
        >
          {isLoading ? "Saving" : result}
        </button>
        <div className="flex gap-7 items-center relative">
          <FiMoreHorizontal
            className="cursor-pointer"
            onClick={() => setShowMore(!showMore)}
            size={25}
          />
          {showMore && (
            <ShowMoreInfo
              className="top-6 left-0"
              id={post._id}
              url={post.post}
              ShowMoreInfo
            />
          )}
        </div>
      </div>
      <div className=" mt-10">
        <p className="text-3xl font-bold">
          {post.titlePost}
        </p>
        <p className="pt-5 text-[16px] font-medium">
          {post.descriptionPost}
        </p>
      </div>
      <div className="flex justify-between items-center mt-10">
        <button className="bg-gray-300 w-20 h-10   rounded-full yekanBold text-md font-medium hover:bg-gray-400 text-white">
          Follow
        </button>
        <div className=" flex justify-end items-center gap-2">
          <div>
            <p className="text-[18px] font-bold">
              {post.username}
            </p>
            <p className="text-xs text-right flex gap-2 flex-row-reverse font-medium text-gray-600">
              {post.followers}
              <span>followers</span>
            </p>
          </div>
          <Image
            src={post.profile}
            width={40}
            height={40}
            className="rounded-full overflow-hidden"
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
};

export default PostInfoById;
