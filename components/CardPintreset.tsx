import Image from "next/image";
import { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";
import Link from "next/link";
import ShowMoreInfo from "./ShowMoreInfo";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { uppdateUserInfoApi } from "../utils/API";
import { SavePost } from "../hooks/SavePost";
interface props {
  post: {
    _id: string;
    username: string;
    profile: string;
    post: string;
    size: string;
  };
  selected: boolean;
  handleShowMore: (e: any) => void;
}
const CardPintreset = ({
  post,
  selected,
  handleShowMore,
}: props) => {
  const { handleSavePost, isLoading, result } = SavePost({
    id: post._id,
  });

  return (
    <div className={`${post.size} m-2 relative`}>
      <div
        className={`card_pintreset  w-full h-[85%] relative `}
      >
        <div className="relative w-full h-full">
          <Image
            src={post.post}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="">
          <div
            className={` block w-full h-full absolute left-0 top-0 cursor-zoom-in`}
          >
            <Link
              href={`/posts/${post._id}`}
              passHref
            >
              <a className="w-full h-full block"></a>
            </Link>
          </div>

          <div
            className={`container_tool absolute w-fit h-fit right-2 top-3 opacity-0 ${
              selected && "!opacity-100"
            }`}
          >
            <button
              onClick={() => handleSavePost()}
              className="bg-red-600 w-20  py-[5px] rounded-full yekanBold text-sm hover:bg-red-700 text-white"
            >
              {isLoading ? "Saving" : result}
            </button>
          </div>
          <div
            className={`container_tool absolute w-fit h-fit bottom-1 right-2 flex gap-4 opacity-0 ${
              selected && "!opacity-100"
            }`}
          >
            <span
              onClick={handleShowMore}
              className={`bg-gray-300 w-9 h-9 z-50 rounded-full flex justify-center items-center hover:bg-gray-100 cursor-pointer transition-all ${
                selected && "!bg-gray-100"
              }`}
            >
              <FiMoreHorizontal
                size={20}
                color="#000000"
                className=""
              />
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-2   items-center mt-2 ">
        <Image
          src={post.profile}
          width={36}
          height={36}
          objectFit="contain"
          className="rounded-full overflow-hidden border"
        />
        <p className="text-sm font-bold text-ellipsis whitespace-nowrap overflow-hidden ltr">
          {post.username}
        </p>
      </div>
      <ShowMoreInfo
        ShowMoreInfo={selected}
        url={post.post}
        id={post._id}
        className="top-[86%] left-20"
      />
    </div>
  );
};

export default CardPintreset;
